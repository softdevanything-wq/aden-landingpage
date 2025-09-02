import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://softdevanything-wq.github.io",
  base: "/aden-landingpage/",
  integrations: [tailwind()],
  output: "static",
  build: {
    assets: "assets",
  },
});
