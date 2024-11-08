/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        primary: '#0A2529',
        secondary: '#0F2D31',
        tertiary: '#F3E9D9', 
      },
      zIndex: {
        max: 9999,
      },
      boxShadow: {
        boxShadow: '0 4px 4px 0  #0A2428',
    }, 

    },
  },
  plugins: [require('@tailwindcss/typography')],
};

