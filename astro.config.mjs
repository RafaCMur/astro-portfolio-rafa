// @ts-nocheck
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server", // Enable API routes
  adapter: vercel(),
  integrations: [icon()],
});
