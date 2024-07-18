/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  jit: true,
  darkMode: "media",
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "inherit",
            p: {
              fontSize: theme("fontSize.lg"),
              fontWeight: 300,
            },
            h1: {
              fontWeight: "800",
            },
            h2: {
              fontWeight: "800",
            },
            h3: {
              fontWeight: "800",
            },
            h4: {
              fontWeight: "800",
            },
            h5: {
              fontWeight: "800",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
