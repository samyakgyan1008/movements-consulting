import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Movements Consulting" },
      { name: "description", content: "Book a conversation with Deepak — or send an email. No sales call." },
    ],
  }),
  component: ContactPage,
});

declare global {
  interface Window {
    Cal?: any;
  }
}

function ContactPage() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...ar: any[]) {
          const cal = C.Cal;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function (...args: any[]) { p(api, args); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://cal.id/embed-link/embed.js", "init");

    window.Cal("init", "default", { origin: "https://cal.id" });
    window.Cal.ns.default("inline", {
      elementOrSelector: "#cal-inline",
      calLink: "movementsindia/connect-with-founder",
      layout: "month_view",
    });
    window.Cal.ns.default("ui", {
      cssVarsPerTheme: {
        light: { "cal-brand": "#007ee5" },
        dark: { "cal-brand": "#fafafa" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Contact</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-3 leading-tight">The conversation begins with the real problem.</h1>
          <p className="font-serif text-2xl md:text-3xl italic text-accent">Not the presenting one.</p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="prose prose-lg max-w-none space-y-5 text-foreground/85 mb-16">
          <p>There is no discovery call form here. No automated scheduler. No sequence of questions designed to qualify you before we have spoken.</p>
          <p>Send an email. Tell me, in whatever words feel right, what you are navigating. What is happening in your organisation, what you have tried, and what is not moving. That is enough to start.</p>
          <p className="italic text-foreground/70">I read every email personally and reply within 24 hours on working days.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Cal.id inline scheduler */}
          <div className="rounded-xl border border-border bg-card p-2 overflow-hidden">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2 px-4 pt-4">Or, book a time directly</p>
            <h2 className="font-serif text-2xl mb-4 px-4">Pick a slot that works for you.</h2>
            <div id="cal-inline" style={{ width: "100%", height: "720px", overflow: "auto" }} />
          </div>

          {/* Contact details */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-xl mb-5">Contact details</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-1 text-accent shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">Email</p>
                    <a href="mailto:deepak@movementsindia.com" className="hover:text-primary">deepak@movementsindia.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-1 text-accent shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">Mobile</p>
                    <a href="tel:+919908438744" className="hover:text-primary">+91 99084 38744</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-accent shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">Location</p>
                    <span>Hyderabad / Delhi, India</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Linkedin className="h-4 w-4 mt-1 text-accent shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">LinkedIn</p>
                    <span className="text-foreground/80">Deepak Lal · Movements (Company Page)</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
              <p className="text-sm italic text-foreground/80">"Not a sales call. A real one."</p>
            </div>
          </aside>
        </div>

        {/* What to expect */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">What to expect</p>
            <h2 className="font-serif text-2xl mb-4">A reply from Deepak. Directly.</h2>
            <div className="space-y-4 text-foreground/85">
              <p>
                When you email, you will hear back from Deepak directly, not an assistant, not an automated response. If what you describe is within the scope of what Movements does, we will arrange a conversation. That conversation is not a sales call. It is the beginning of the diagnostic, an honest exchange about what is actually happening and whether this practice is the right fit for what you need.
              </p>
              <p className="italic">
                If it is not the right fit, I will tell you. And if I know someone better placed to help, I will say so.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Speaking enquiries</p>
            <h2 className="font-serif text-2xl mb-4">Keynotes, leadership forums, facilitation.</h2>
            <div className="space-y-4 text-foreground/85">
              <p>
                Please include in your email the event name, audience profile, date, and the topic or theme you have in mind. Deepak speaks on AI transformation, the human side of organisational change, reskilling at scale, and what actually makes transformations succeed or fail.
              </p>
              <p className="italic text-foreground/70">
                All speaking enquiries are handled directly, with no agency or speaker bureau involved.
              </p>
            </div>
          </div>
        </div>

        {/* Closing quote */}
        <blockquote className="mt-20 border-l-4 border-accent pl-6 italic text-lg md:text-xl text-foreground/80 max-w-3xl">
          "In a world that won't stop changing, the leaders who struggle most are not the ones without answers. They are the ones without clarity — about what is real, what matters, and who they need to become to lead what is next."
          <footer className="mt-3 text-sm text-muted-foreground not-italic">— Deepak Lal</footer>
        </blockquote>
      </section>
    </div>
  );
}
