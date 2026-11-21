
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { notes } from "./src/data/notes";

export default defineConfig({
  site: "https://portfolio.ortheyus.uk",
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) =>
        !["/404", "/404/"].includes(new URL(page).pathname),

      serialize(item) {
        const pathname = new URL(item.url).pathname;

        const note = notes.find(
          (note) => pathname === `/notes/${note.slug}/`
        );

        if (note) {
          item.lastmod = note.date;
        }

        return item;
      },
    }),
  ],

  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "img-src 'self' data:",
        "font-src 'self'",

        // Formspree and Cloudflare Turnstile
        "connect-src 'self' https://formspree.io https://challenges.cloudflare.com",
        "form-action 'self' https://formspree.io",

        // YouTube and Cloudflare Turnstile
        "frame-src https://www.youtube-nocookie.com https://challenges.cloudflare.com",

        "upgrade-insecure-requests",
      ],

      // Cloudflare Turnstile
      scriptDirective: {
        resources: [
          "'self'",
          "https://challenges.cloudflare.com",
        ],
      },

      styleDirective: {
        resources: [
          "'self'",
          "https://challenges.cloudflare.com",
        ],
      },
    },
  },
});