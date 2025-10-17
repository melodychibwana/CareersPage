/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#004aad',
        'brand-light': '#f8f9fc',
        'text-dark': '#1f2937',
        'text-muted': '#6b7280',
        'accent': '#2563eb',
      },
    },
  },
  plugins: [],
}
