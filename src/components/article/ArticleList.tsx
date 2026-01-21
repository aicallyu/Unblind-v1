import { ReactNode } from 'react'

interface ArticleListProps {
  items: ReactNode[]
}

export default function ArticleList({ items }: ArticleListProps) {
  return (
    <ul className="my-8 pl-0 list-none">
      {items.map((item, index) => (
        <li
          key={index}
          className="relative pl-8 mb-4 text-lg"
          style={{ color: 'var(--text-secondary)' }}
        >
          <span
            className="absolute left-0 top-3 w-2 h-2 rounded-full"
            style={{
              background: 'var(--accent-cyan)',
              boxShadow: '0 0 12px var(--accent-cyan)',
            }}
          />
          {item}
        </li>
      ))}

      <style>{`
        li strong {
          color: var(--text-primary);
          font-weight: 600;
        }
      `}</style>
    </ul>
  )
}
