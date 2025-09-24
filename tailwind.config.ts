import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'animate-marquee',
    'animate-marquee-vertical',
  ],
  theme: {
    extend: {
      fontFamily: {
        'garamond': ['Garamond', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'dyslexic': ['OpenDyslexic', 'sans-serif'],
      },
      fontSize: {
        'small': '14px',
        'medium': '16px', 
        'large': '18px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        marquee: 'marquee-fallback 30s linear infinite',
        'marquee-vertical': 'marquee-vertical-fallback 30s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0%)' },
          to: { transform: 'translateY(-100%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config 