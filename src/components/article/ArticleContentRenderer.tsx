import { ContentBlock } from '@/data/articleContent'
import HighlightBox from './HighlightBox'
import ContentImage from './ContentImage'
import ArticleTable from './ArticleTable'
import ArticleList from './ArticleList'
import SilentOculusSection from './SilentOculusSection'

interface ArticleContentRendererProps {
  content: ContentBlock[]
}

export default function ArticleContentRenderer({ content }: ArticleContentRendererProps) {
  return (
    <>
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p
                key={index}
                className="mb-7 text-lg leading-[1.9]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {block.content}
              </p>
            )

          case 'heading':
            return (
              <h2
                key={index}
                className="font-display text-[32px] font-bold mt-16 mb-6 relative pl-6"
                style={{
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                }}
              >
                <span
                  className="absolute left-0 top-2 bottom-2 w-1 rounded"
                  style={{
                    background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-purple))',
                  }}
                />
                {block.text}
              </h2>
            )

          case 'highlight':
            return (
              <HighlightBox
                key={index}
                copyText={block.copyText}
                shareText={block.shareText}
              >
                {block.content}
              </HighlightBox>
            )

          case 'image':
            return (
              <ContentImage
                key={index}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
              />
            )

          case 'table':
            return (
              <ArticleTable
                key={index}
                headers={block.headers}
                rows={block.rows}
              />
            )

          case 'list':
            return <ArticleList key={index} items={block.items} />

          case 'silent-oculus':
            return <SilentOculusSection key={index} />

          case 'hr':
            return (
              <hr
                key={index}
                className="my-16 border-none h-px"
                style={{ background: 'var(--border-color)' }}
              />
            )

          default:
            return null
        }
      })}

      <style>{`
        .article-content p strong {
          color: var(--text-primary);
          font-weight: 600;
        }
        .article-content p em {
          font-style: italic;
        }
        .article-content a {
          color: var(--accent-cyan);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s;
        }
        .article-content a:hover {
          border-bottom-color: var(--accent-cyan);
        }
      `}</style>
    </>
  )
}
