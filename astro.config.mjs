import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://aden.io",
  base: "/v1",
  integrations: [tailwind()],
  output: "static",
  build: {
    assets: "assets",
  },
});
