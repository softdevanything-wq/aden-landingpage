import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Use environment variable for base path, default to "/" for production
const BASE_PATH = process.env.PUBLIC_BASE_PATH || "/aden-landingpage/";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://softdevanything-wq.github.io",
  base: BASE_PATH,
  integrations: [tailwind()],
  output: "static",
  build: {
    assets: "assets",
  },
});
