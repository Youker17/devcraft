import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Inter', 'sans-serif'],
      mono: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        background: '#232946',
        primary: '#B8C1EC',
        secondary: '#FFFFFE',
        tertinary: '#EEBBC3',
      }
    },
  },
  plugins: [],
}
export default config
