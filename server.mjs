// Production Node.js entry for Hostinger Cloud (or any Node host).
// Wraps the SSR fetch handler from the Vite build with a static-file middleware
// for client assets, and binds to process.env.PORT.
import { serve } from "srvx";
import { serveStatic } from "srvx/static";
import server from "./dist/server/server.js";

serve({
  fetch: (request) => server.fetch(request),
  middleware: [serveStatic({ dir: "./dist/client" })],
  port: process.env.PORT || 3000,
  hostname: process.env.HOST || "0.0.0.0",
});
