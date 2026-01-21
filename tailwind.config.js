/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode backgrounds
        'bg-dark': '#030305',
        'bg-card-dark': 'rgba(12, 12, 18, 0.95)',
        // Light mode backgrounds
        'bg-light': '#f5f5f7',
        'bg-card-light': 'rgba(255, 255, 255, 0.95)',
        // Accent colors (NO PINK)
        'accent-cyan': '#00f0ff',
        'accent-cyan-light': '#0891b2',
        'accent-purple': '#a855f7',
        'accent-blue': '#3b82f6',
        'accent-green': '#10b981',
        // Text colors
        'text-primary-dark': '#ffffff',
        'text-primary-light': '#1a1a2e',
        'text-secondary-dark': 'rgba(255, 255, 255, 0.6)',
        'text-secondary-light': 'rgba(26, 26, 46, 0.7)',
        'text-muted-dark': 'rgba(255, 255, 255, 0.4)',
        'text-muted-light': 'rgba(26, 26, 46, 0.5)',
      },
      fontFamily: {
        'main': ['Space Grotesk', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'display': ['Outfit', 'sans-serif'],
      },
      animation: {
        'twinkle': 'twinkle var(--duration, 4s) ease-in-out infinite',
        'gridMove': 'gridMove 20s linear infinite',
        'orbFloat1': 'orbFloat1 30s ease-in-out infinite',
        'orbFloat2': 'orbFloat2 35s ease-in-out infinite',
        'scanDown': 'scanDown 6s linear infinite',
        'logoShine': 'logoShine 3s ease-in-out infinite',
        'dotPulse': 'dotPulse 1.5s ease-in-out infinite',
        'gradientFlow': 'gradientFlow 6s ease infinite',
        'pulseGlow': 'pulseGlow 2s ease-in-out infinite',
        'particleRise': 'particleRise 12s infinite',
        'titleShine': 'titleShine 4s ease-in-out infinite',
        'rotateBg': 'rotateBg 12s linear infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'float1': 'float1 30s ease-in-out infinite',
        'float2': 'float2 25s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: 'var(--opacity, 0.7)', transform: 'scale(1)' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100px' },
        },
        orbFloat1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-50px, 80px) scale(1.1)' },
        },
        orbFloat2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(100px, -80px) scale(1.2)' },
        },
        scanDown: {
          '0%': { top: '-10px' },
          '100%': { top: '100vh' },
        },
        logoShine: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
        gradientFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        particleRise: {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-100px) scale(1.5)', opacity: '0' },
        },
        titleShine: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        rotateBg: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        float1: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-50px, 100px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(80px, -60px)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0, 240, 255, 0.4)',
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.4)',
        'elevated': '0 20px 60px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
