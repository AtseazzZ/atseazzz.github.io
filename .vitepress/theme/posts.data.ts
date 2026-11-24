import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  href: string
  accent: 'moss' | 'clay'
}

export declare const data: Post[]

export default createContentLoader('posts/*.md', {
  transform(entries): Post[] {
    return entries.map(({ url, frontmatter }) => ({
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      category: frontmatter.category,
      tags: frontmatter.tags,
      href: url,
      accent: frontmatter.category === '技术札记' ? 'clay' as const : 'moss' as const,
    })).sort((a, b) => b.date.localeCompare(a.date))
  },
})
