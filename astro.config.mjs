// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

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
    }),
  ],

  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "img-src 'self' data:",
        "font-src 'self' https://fonts.gstatic.com",
        "connect-src 'self' https://formspree.io",
        "form-action 'self' https://formspree.io",
        "upgrade-insecure-requests",
      ],

      styleDirective: {
        resources: [
          "'self'",
          "https://fonts.googleapis.com",
        ],
      },
    },
  },
});