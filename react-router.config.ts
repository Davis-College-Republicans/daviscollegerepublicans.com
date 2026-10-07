import type { Config } from "@react-router/dev/config";

export default {
  // GitHub Pages is static files only.
  ssr: false,
  prerender: ["/", "/contact", "/join", "/support", "/discord"],
} satisfies Config;
