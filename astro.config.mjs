import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://speedwayscholarship.com/",
  integrations: [
    tailwind(),
    partytown(),
    sitemap({
      filter: (page) =>
        !page.includes("confirmation") && !page.includes("acknowledgement"),
      changefreq: "weekly",
      priority: 0.7,
      customPages: [
        "https://speedwayscholarship.com/apply",
        "https://speedwayscholarship.com/donate",
        "https://speedwayscholarship.com/about",
        "https://speedwayscholarship.com/speedway",
      ],
    }),
    react(),
  ],
});
