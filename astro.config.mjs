import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "viewport",
  },
  image: {
    domains: ["a.storyblok.com"],
  },
  integrations: [
    tailwind(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        flexible: "components/storyblok/templates/flexible",
        home_hero: "components/storyblok/flexible/home_hero",
        text_block: "components/storyblok/flexible/text_block",
        experience: "components/storyblok/flexible/experience",
      },
    }),
  ],
});
