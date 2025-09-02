import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Use environment variable for base path, default to "/" for production
const BASE_PATH = process.env.PUBLIC_BASE_PATH || "/aden-landingpage/";

export default defineConfig({
  site: "https://aden.io",
  base: "/",
  integrations: [tailwind()],
  output: "static",
  build: {
    assets: "assets",
  },
});
