import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "http://github-dev.orderly.network",
  base: "/aden-landingpage",
  integrations: [tailwind()],
  output: "static",
  build: {
    assets: "assets",
  },
});
