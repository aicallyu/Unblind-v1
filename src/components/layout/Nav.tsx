import { Link } from 'react-router-dom'

interface NavProps {
  isArticlePage?: boolean
}

export default function Nav({ isArticlePage = false }: NavProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isArticlePage) return // Let the link navigate to home
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav>
      <div className="container">
        <div className="nav-content flex justify-between items-center">
          <Link to="/" className="logo">
            <div className="logo-icon"></div>
            <span className="logo-text">UNBLIND</span>
          </Link>
          <ul className="nav-links">
            <li>
              <a
                href={isArticlePage ? "/#sequence" : "#sequence"}
                onClick={(e) => scrollToSection(e, 'sequence')}
              >
                The Sequence
              </a>
            </li>
            <li>
              <a
                href={isArticlePage ? "/#topics" : "#topics"}
                onClick={(e) => scrollToSection(e, 'topics')}
              >
                Topics
              </a>
            </li>
            <li>
              <a
                href={isArticlePage ? "/#library" : "#library"}
                onClick={(e) => scrollToSection(e, 'library')}
              >
                Featured
              </a>
            </li>
            <li>
              <a
                href={isArticlePage ? "/#posts" : "#posts"}
                onClick={(e) => scrollToSection(e, 'posts')}
              >
                Archive
              </a>
            </li>
            <li>
              <a
                href={isArticlePage ? "/#subscribe" : "#subscribe"}
                onClick={(e) => scrollToSection(e, 'subscribe')}
              >
                Subscribe
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
