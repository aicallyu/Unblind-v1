export interface Article {
  id: string
  slug: string
  number: string
  title: string
  titleParts?: {
    before: string
    highlight: string
    after?: string
  }
  subtitle: string
  excerpt: string
  category: {
    icon: string
    name: string
  }
  date: string
  readTime: string
  heroImage: string
}

// Category definitions
export const categories = {
  'perception-vs-reality': { icon: '◐', name: 'Perception vs. Reality' },
  'blind-spots': { icon: '○', name: 'Blind Spots' },
  'decision-errors': { icon: '⊘', name: 'Decision Errors' },
  'communication-mismatch': { icon: '◇', name: 'Communication Mismatch' },
  'power-systems': { icon: '◎', name: 'Power & Systems' },
  'ai-perception-layer': { icon: '⬡', name: 'AI as Perception Layer' },
} as const

export const articles: Article[] = [
  {
    id: '001',
    slug: '001-the-decision-was-made',
    number: '001',
    title: 'The Decision Was Made Before You Entered the Room',
    titleParts: {
      before: 'The Decision Was Made ',
      highlight: 'Before You Entered the Room',
    },
    subtitle: 'On the forces that shape outcomes before deliberation begins.',
    excerpt: 'On the forces that shape outcomes before deliberation begins. Most decisions are not made in meetings.',
    category: categories['power-systems'],
    date: 'JANUARY 11, 2026',
    readTime: '12 MIN READ',
    heroImage: 'https://cdn.marblism.com/eJUr7nY1fku.webp',
  },
  {
    id: '002',
    slug: '002-why-you-cannot-see',
    number: '002',
    title: 'Why You Cannot See What You Cannot See',
    titleParts: {
      before: 'Why You Cannot See ',
      highlight: 'What You Cannot See',
    },
    subtitle: 'Blind spots are not gaps in knowledge. They are structures in perception.',
    excerpt: 'Blind spots are not gaps in knowledge. They are structures in perception that shape everything you think you know.',
    category: categories['blind-spots'],
    date: 'JANUARY 13, 2026',
    readTime: '14 MIN READ',
    heroImage: 'https://cdn.marblism.com/KOWuYLfc7dh.webp',
  },
  {
    id: '003',
    slug: '003-optimization-too-late',
    number: '003',
    title: 'Optimization Is Usually Too Late',
    titleParts: {
      before: 'Optimization Is ',
      highlight: 'Usually Too Late',
    },
    subtitle: 'The problem was upstream. The solution was downstream. They never met.',
    excerpt: 'The problem was upstream. The solution was downstream. They never met.',
    category: categories['decision-errors'],
    date: 'JANUARY 15, 2026',
    readTime: '11 MIN READ',
    heroImage: 'https://cdn.marblism.com/JYv-IGlvyyt.webp',
  },
  {
    id: '004',
    slug: '004-ai-doesnt-think',
    number: '004',
    title: "AI Doesn't Think for You. It Shapes What You Think About",
    titleParts: {
      before: "AI Doesn't Think for You. ",
      highlight: 'It Shapes What You Think About',
    },
    subtitle: 'The difference between using a tool and being shaped by a Perception Layer.',
    excerpt: 'The difference between using a tool and being shaped by a Perception Layer.',
    category: categories['ai-perception-layer'],
    date: 'JANUARY 17, 2026',
    readTime: '15 MIN READ',
    heroImage: 'https://cdn.marblism.com/EM01FQIoBP_.webp',
  },
  {
    id: '005',
    slug: '005-blind-spot-blind-spot',
    number: '005',
    title: 'Your Blind Spot Has a Blind Spot',
    titleParts: {
      before: 'Your Blind Spot ',
      highlight: 'Has a Blind Spot',
    },
    subtitle: "Second-order invisibility and why awareness isn't enough.",
    excerpt: "Second-order invisibility and why awareness isn't enough.",
    category: categories['blind-spots'],
    date: 'JANUARY 19, 2026',
    readTime: '14 MIN READ',
    heroImage: 'https://cdn.marblism.com/uxgaBEC1eqy.webp',
  },
  {
    id: '006',
    slug: '006-elon-musk-perception',
    number: '006',
    title: "Elon Musk's #1 Rule: Never Trust What You Think You See",
    titleParts: {
      before: "Elon Musk's #1 Rule: ",
      highlight: 'Never Trust What You Think You See',
    },
    subtitle: 'An autopsy of high-stakes perception.',
    excerpt: 'An autopsy of high-stakes perception. Why 99.9995% of information never reaches your conscious mind.',
    category: categories['perception-vs-reality'],
    date: 'JANUARY 21, 2026',
    readTime: '16 MIN READ',
    heroImage: 'https://cdn.marblism.com/nvQQMuCo1kZ.webp',
  },
]

export const topics = [
  {
    icon: '◐',
    title: 'Perception vs. Reality',
    description: 'What you see is not what is. The gap between signal and interpretation shapes everything that follows.',
  },
  {
    icon: '◯',
    title: 'Blind Spots',
    description: 'The things you cannot see about what you cannot see. Structural invisibility is the most dangerous kind.',
  },
  {
    icon: '⊘',
    title: 'Decision Errors',
    description: 'Why smart people make predictable mistakes. Systematic failure follows systematic patterns.',
  },
  {
    icon: '◈',
    title: 'Communication Mismatch',
    description: 'When words say one thing and systems say another. The gap between signal and noise.',
  },
  {
    icon: '◎',
    title: 'Power & Systems',
    description: 'How influence operates before it announces itself. The invisible architecture of control.',
  },
  {
    icon: '⬡',
    title: 'AI as Perception Layer',
    description: 'Not a tool. A mirror. A filter. A fundamental shift in how we see and what we see.',
  },
]

export const stats = [
  { target: 90, label: '% of decisions made unconsciously' },
  { target: 11, label: 'Million bits of info per second' },
  { target: 40, label: 'Bits consciously processed' },
  { target: 35, label: 'K daily decisions average' },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export function getLatestArticle(): Article {
  return articles[articles.length - 1]!
}
