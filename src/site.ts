export const site = {
  title: "Tim Schraepen's Blog",
  tagline: 'Yet another developer blog.',
  description: 'Blog of Tim Schraepen, developer.',
  author: {
    name: 'Tim Schraepen',
    email: 'sch3lp@gmail.com',
    avatar: 'https://www.gravatar.com/avatar/c9811dcdf2ab224aea0e1928e9422d07.png?s=160',
  },
  links: [
    { name: 'GitHub', url: 'https://github.com/Sch3lp' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/timschraepen' },
  ],
  // Disqus shortname of the old Jekyll blog; set to null to drop comments.
  disqusShortname: 'sch3lpsblog' as string | null,
};

// Display names for tags whose slug doesn't title-case nicely.
const tagNames: Record<string, string> = {
  'how-to': 'HowTo',
  TDD: 'TDD',
};

export function tagName(slug: string): string {
  return tagNames[slug] ?? slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
}

export function tagSlug(tag: string): string {
  return tag.toLowerCase();
}
