/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  jit: true,
  darkMode: "media",
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
