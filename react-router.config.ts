import type { Config } from "@react-router/dev/config";
import { allPersonSlugs } from "./app/config/leadership";

export default {
  // GitHub Pages is static files only.
  ssr: false,
  prerender: [
    "/",
    "/contact",
    "/join",
    "/support",
    "/discord",
    "/leadership",
    "/team",
    ...allPersonSlugs().map((slug) => `/leadership/${slug}`),
  ],
} satisfies Config;
