import type { APIContext } from 'astro';
import { getPosts, postDate, postPath, type Post } from '../posts';
import { site } from '../site';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET(context: APIContext) {
  const posts = await getPosts();
  const base = context.site!;
  const abs = (path: string) => new URL(path, base).href;
  // Make root-relative links in post HTML absolute, so images work in feed readers.
  const absolutize = (html: string) => html.replace(/(src|href)="\/(?!\/)/g, `$1="${base.origin}/`);

  const entries = posts
    .map((post: Post) => {
      const url = abs(postPath(post));
      return `  <entry>
    <title>${escape(post.data.title)}</title>
    <link href="${url}"/>
    <id>${url}</id>
    <updated>${postDate(post).toISOString()}</updated>
    <content type="html">${escape(absolutize(post.rendered?.html ?? ''))}</content>
  </entry>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escape(site.title)}</title>
  <subtitle>${escape(site.tagline)}</subtitle>
  <link href="${abs('/atom.xml')}" rel="self"/>
  <link href="${abs('/')}"/>
  <id>${abs('/')}</id>
  <updated>${posts.length ? postDate(posts[0]).toISOString() : new Date().toISOString()}</updated>
  <author>
    <name>${escape(site.author.name)}</name>
  </author>
${entries}
</feed>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' } });
}
