import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/hooks/useTheme'
import LandingPage from '@/pages/LandingPage'
import ArticlePage from '@/pages/ArticlePage'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
