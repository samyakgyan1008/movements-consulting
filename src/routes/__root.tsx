import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Movements — Consulting with a Conscience" },
      { name: "description", content: "Executive coaching and change consulting for VPs and CXOs in mid-size Indian organisations navigating AI and digital transformation." },
      { name: "author", content: "Movements Consulting" },
      { property: "og:title", content: "Movements — Consulting with a Conscience" },
      { property: "og:description", content: "Executive coaching and change consulting for VPs and CXOs in mid-size Indian organisations navigating AI and digital transformation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Movements — Consulting with a Conscience" },
      { name: "twitter:description", content: "Executive coaching and change consulting for VPs and CXOs in mid-size Indian organisations navigating AI and digital transformation." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aa6efb9f-18bc-44f3-98b5-18a744e720fc/id-preview-278176fd--eaf05e2e-f0a8-43db-bcff-afde19b2ba46.lovable.app-1778002455374.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aa6efb9f-18bc-44f3-98b5-18a744e720fc/id-preview-278176fd--eaf05e2e-f0a8-43db-bcff-afde19b2ba46.lovable.app-1778002455374.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-30 h-14 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur-md px-4">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <Link to="/" className="font-serif text-sm font-semibold tracking-[0.2em] text-foreground">
                MOVEMENTS
              </Link>
            </div>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center rounded-md bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Start a Conversation
            </Link>
          </header>
          <main className="flex-1">
            <Outlet />
          </main>
          <footer className="border-t border-border bg-card mt-12">
            <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-4 text-sm">
              <div>
                <div className="font-serif text-base font-semibold tracking-wide">MOVEMENTS</div>
                <p className="text-muted-foreground mt-2 text-xs uppercase tracking-[0.16em]">Consulting with a Conscience</p>
              </div>
              <div>
                <p className="font-medium mb-2">Explore</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li><Link to="/about" className="hover:text-primary">About</Link></li>
                  <li><Link to="/services" className="hover:text-primary">Services</Link></li>
                  <li><Link to="/legal" className="hover:text-primary">Legal for MSMEs</Link></li>
                  <li><Link to="/philosophy" className="hover:text-primary">Philosophy</Link></li>
                  <li><Link to="/insights" className="hover:text-primary">Insights</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Contact</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li><a href="mailto:deepak@movementsindia.com" className="hover:text-primary">deepak@movementsindia.com</a></li>
                  <li><a href="tel:+919908438744" className="hover:text-primary">+91 99084 38744</a></li>
                  <li>Hyderabad, India</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Subscribe</p>
                <p className="text-muted-foreground text-xs mb-2">Occasional notes from the field. No spam.</p>
                <form className="flex gap-2">
                  <input type="email" placeholder="you@email.com" className="flex-1 min-w-0 rounded-md border border-input bg-background px-3 py-2 text-xs" />
                  <button type="submit" className="rounded-md bg-accent px-3 py-2 text-xs font-medium text-accent-foreground">Join</button>
                </form>
              </div>
            </div>
            <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Movements Consulting. All rights reserved.</div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
