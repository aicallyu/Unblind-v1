import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      title="Toggle Light/Dark Mode"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  )
}
