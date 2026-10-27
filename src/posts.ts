import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

const ID = /^(\d{4})-(\d{2})-(\d{2})-(.+)$/;

/** Published posts, newest first. In dev, drafts with a dated filename are included too. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection(
    'posts',
    (p: Post) => ID.test(p.id) && (p.data.published || import.meta.env.DEV),
  );
  return posts.sort((a: Post, b: Post) => b.id.localeCompare(a.id));
}

export function postDate(post: Post): Date {
  const [, y, m, d] = post.id.match(ID)!;
  return new Date(Date.UTC(+y, +m - 1, +d));
}

/** Same URL shape as Jekyll's `permalink: pretty`: /YYYY/MM/DD/slug/ */
export function postPath(post: Post): string {
  const [, y, m, d, slug] = post.id.match(ID)!;
  return `/${y}/${m}/${d}/${slug}/`;
}

export function postParams(post: Post) {
  const [, year, month, day, slug] = post.id.match(ID)!;
  return { year, month, day, slug };
}

export function readingTime(post: Post): number {
  const words = (post.body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function excerpt(post: Post, length = 220): string {
  if (post.data.description) return post.data.description;
  const text = (post.body ?? '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#+\s.*$/gm, '')
    .replace(/[*_>`#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > length ? text.slice(0, text.lastIndexOf(' ', length)) + '…' : text;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** Posts sharing the most tags, falling back to the most recent ones. */
export function relatedPosts(post: Post, all: Post[], limit = 3): Post[] {
  const score = (p: Post) => p.data.tags.filter((t: string) => post.data.tags.includes(t)).length;
  return all
    .filter((p) => p.id !== post.id)
    .map((p, i) => ({ p, s: score(p), i }))
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .slice(0, limit)
    .map(({ p }) => p);
}
