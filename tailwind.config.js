/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}", // ルートにあるファイルも対象
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        english: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#E67E22', // アクセント用
          dark: '#D35400',
          light: '#F39C12',
          secondary: '#2C3E50',
          accent: '#F1C40F',
          bgLight: '#F8F9FA',
        }
      },
      // 不要なアニメーション設定などは削除
    },
  },
  plugins: [],
}