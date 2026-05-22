// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// `cloudflare: false` disables the Cloudflare Workers plugin so the build emits a Node server
// bundle (.output/server/index.mjs) for Hostinger Cloud's Node.js hosting.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({ cloudflare: false });
