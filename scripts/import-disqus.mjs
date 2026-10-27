// Converts a Disqus XML export into src/data/legacy-comments.json.
// Usage: node scripts/import-disqus.mjs <export.xml>
// Keeps only author name, date and sanitized message; drops deleted and spam comments.
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';

const [, , file] = process.argv;
if (!file) {
  console.error('Usage: node scripts/import-disqus.mjs <export.xml>');
  process.exit(1);
}

const xml = readFileSync(file, 'utf8');
const tag = (block, name) => block.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`))?.[1] ?? '';
const unescape = (s) =>
  s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

const postIds = readdirSync('src/content/posts')
  .filter((f) => /^\d{4}-\d{2}-\d{2}-.+\.md$/.test(f))
  .map((f) => f.replace(/\.md$/, ''));

// Thread links look like http://sch3lp.github.io/2014/07/12/slug/ (or localhost while developing).
function postIdFor(link) {
  const m = link.match(/\/(\d{4})\/(\d{2})\/(\d{2})\/([^/]+)\/?$/);
  if (!m) return null;
  const [, y, mo, d, slug] = m;
  return postIds.find((id) => id === `${y}-${mo}-${d}-${slug}`) ?? postIds.find((id) => id.slice(11) === slug) ?? null;
}

// Only paragraphs, line breaks and http(s) links survive.
function sanitize(html) {
  return html.replace(/<[^>]*>/g, (t) => {
    if (/^<\/?p\s*>$/i.test(t) || /^<\/a\s*>$/i.test(t)) return t.toLowerCase().replace(/\s/g, '');
    if (/^<br\s*\/?>$/i.test(t)) return '<br>';
    const href = t.match(/^<a\s[^>]*href="(https?:\/\/[^"]+)"/i)?.[1];
    if (href) return `<a href="${escapeAttr(unescape(href))}" rel="nofollow noopener">`;
    return '';
  });
}

const threads = new Map();
for (const [, id, block] of xml.matchAll(/<thread dsq:id="(\d+)">([\s\S]*?)<\/thread>/g)) {
  threads.set(id, tag(block, 'link'));
}

const comments = {};
const skipped = [];
for (const [, block] of xml.matchAll(/<post dsq:id="\d+">([\s\S]*?)<\/post>/g)) {
  if (tag(block, 'isDeleted') === 'true' || tag(block, 'isSpam') === 'true') continue;
  const link = threads.get(block.match(/<thread dsq:id="(\d+)"/)[1]) ?? '';
  const postId = postIdFor(link);
  const author = unescape(tag(tag(block, 'author'), 'name'));
  if (!postId) {
    skipped.push(`${author} on ${link}`);
    continue;
  }
  const message = tag(block, 'message').replace(/^<!\[CDATA\[|\]\]>$/g, '');
  (comments[postId] ??= []).push({ author, date: tag(block, 'createdAt'), html: sanitize(message) });
}

for (const list of Object.values(comments)) list.sort((a, b) => a.date.localeCompare(b.date));

mkdirSync('src/data', { recursive: true });
writeFileSync('src/data/legacy-comments.json', JSON.stringify(comments, null, 2) + '\n');

for (const [id, list] of Object.entries(comments)) console.log(`${list.length.toString().padStart(3)}  ${id}`);
if (skipped.length) console.log(`Skipped (no matching post):\n  ${skipped.join('\n  ')}`);
