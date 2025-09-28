/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', // This is the crucial line for Astro files
    './public/**/*.html', // Good for any static HTML files in public
  ],
  theme: {
    extend: {
      fontFamily: {
        
        'aboreto': ['Aboreto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}