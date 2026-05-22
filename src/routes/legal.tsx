import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building, FileText, Users, Scale, ShieldCheck, Lightbulb, Coins } from "lucide-react";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal Services for MSMEs — Movements Consulting" },
      { name: "description", content: "Coordinated legal support across seven lifecycle clusters for MSMEs. Begin with a Legal Health Check." },
    ],
  }),
  component: LegalPage,
});

const stats = [
  { value: "6.2 Cr+", text: "MSMEs registered in India", source: "Government of India" },
  { value: "1,400+", text: "annual compliance obligations per MSME unit", source: "Industry data" },
  { value: "₹10.7L Cr", text: "in delayed payments owed to MSMEs annually", source: "MSME Ministry data" },
  { value: "97.9%", text: "of MSMEs operate with no in-house legal counsel", source: "Industry data" },
];

const clusters = [
  {
    icon: Building,
    num: "01",
    title: "Entity formation & startup legal",
    tag: "First steps. Right foundation.",
    body: "The legal decisions made at the start — business structure, registration, licences — shape everything that follows. Wrong choices here cost more to fix later than they do to get right now.",
    why: "New MSME classification rules (effective April 2025) require thousands of units to immediately reassess their legal structure and benefit eligibility.",
  },
  {
    icon: FileText,
    num: "02",
    title: "Contracts & commercial law",
    tag: "Protect the revenue. Protect the relationship.",
    body: "Every deal you do is a contract. Most MSME contracts are drafted by the larger party — for the larger party. This cluster ensures your agreements protect your payment terms, your margins, and your exit rights.",
    why: "MSMEs lose ₹10.7 lakh crore annually to delayed payments. Poorly drafted payment terms are the most common cause — and a solvable one.",
  },
  {
    icon: Users,
    num: "03",
    title: "Labour & employment law",
    tag: "Build teams. Manage risk. Stay compliant.",
    body: "From the first hire to a workforce of hundreds, labour law compliance is non-negotiable — and complex. Four new labour codes are being progressively notified across states. Most MSMEs are not ready.",
    why: "Compliance gaps in labour law carry criminal exposure, not just financial penalties. Jail clauses are still embedded in several statutes.",
  },
  {
    icon: Scale,
    num: "04",
    title: "Dispute resolution & arbitration",
    tag: "Recover what is owed. Avoid what can be avoided.",
    body: "When a large buyer defaults, most MSMEs don't know they have statutory rights to recover — with interest at three times the RBI bank rate. This cluster exists to make sure those rights are used, not wasted.",
    why: "Landmark 2024 Supreme Court rulings sharpened MSEF Council powers. MSME arbitration rights are stronger than ever — but still massively under-used.",
  },
  {
    icon: ShieldCheck,
    num: "05",
    title: "Regulatory & statutory compliance",
    tag: "Navigate the maze. Survive the inspector.",
    body: "GST returns. Factory licences. FSSAI. Environmental NOCs. Government procurement eligibility. The regulatory landscape for an MSME is dense and constantly shifting. This cluster manages it — systematically, not reactively.",
    why: "A structured compliance calendar and legal retainer can reduce annual compliance costs by 30–40% — while eliminating the risk of inadvertent criminal exposure.",
  },
  {
    icon: Lightbulb,
    num: "06",
    title: "Intellectual property & technology law",
    tag: "Own what you build. Protect what differentiates you.",
    body: "Your brand name, your process, your product — if it isn't registered, it isn't protected. As MSMEs digitalise rapidly, DPDP Act 2023 obligations also create new legal exposure most are completely unprepared for.",
    why: "Only 6–8% of MSMEs have a formal e-commerce presence — yet almost all are now digitally active. The legal exposure is real and largely unaddressed.",
  },
  {
    icon: Coins,
    num: "07",
    title: "Finance, credit & succession law",
    tag: "Structure the money. Protect the legacy.",
    body: "Loan documents, investor term sheets, succession plans, and M&A due diligence — the financial and ownership decisions that determine whether what you've built survives and grows. Most MSME founders sign these without independent legal review.",
    why: "₹25 lakh crore formal credit gap. Most MSMEs that access credit sign documents they don't fully understand. Most have no succession plan at all.",
  },
];

const tiers = [
  {
    tag: "STARTER",
    title: "Transaction advisory",
    subtitle: "A specific legal need, handled cleanly.",
    items: ["Udyam registration & recognition", "Single contract drafting or review", "MSME SAMADHAAN filing", "Trademark search & registration", "Regulatory notice response"],
    price: "Fixed fee per matter · ₹5,000–50,000",
    highlight: false,
  },
  {
    tag: "RECOMMENDED",
    title: "Annual legal retainer",
    subtitle: "Year-round legal cover — without the payroll.",
    items: ["All 7 clusters, on-call access", "Compliance calendar management", "Contract templates & policy drafting", "Quarterly Legal Health Check", "Priority dispute escalation"],
    price: "Monthly retainer · ₹8,000–30,000/month",
    highlight: true,
  },
  {
    tag: "TARGETED",
    title: "Cluster subscription",
    subtitle: "Focus on what matters most right now.",
    items: ["2–3 clusters of your choice", "Compliance audit & gap report", "Standard template library", "Bi-annual regulatory updates", "5 advisory hours per month"],
    price: "Per cluster · ₹4,000–12,000/month",
    highlight: false,
  },
];

const lifecycle = [
  { num: "01", phase: "Form", stage: "START" },
  { num: "02", phase: "Contract", stage: "GROW" },
  { num: "03", phase: "Hire", stage: "HIRE" },
  { num: "04", phase: "Dispute", stage: "FIGHT" },
  { num: "05", phase: "Comply", stage: "COMPLY" },
  { num: "06", phase: "Protect IP", stage: "BUILD" },
  { num: "07", phase: "Scale / Exit", stage: "EXIT" },
];

function LegalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">A third practice under Movements — Consulting with a Conscience</p>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">Coordinated by Movements · Delivered by specialist legal partners</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl mb-6">
            You have built something real.{" "}
            <span className="italic text-accent">The question is whether the legal structure around it matches what you have built.</span>
          </h1>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Start with the Legal Health Check <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* The gap + stats */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">The gap most MSMEs don't see until it costs them</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-6 max-w-3xl">India's 6.2 crore MSMEs run the country. Most run it without legal counsel.</h2>
        <p className="text-foreground/80 max-w-3xl mb-10">
          India's 6.2 crore MSMEs collectively employ 120 million people and contribute 30% of GDP. Most operate with no legal counsel. They sign contracts they haven't fully understood, carry compliance obligations they don't know exist, and discover their legal exposure only when something goes wrong.
        </p>
        <p className="text-foreground/80 max-w-3xl mb-12">
          Movements coordinates structured legal support across seven clusters that cover every stage of an MSME's lifecycle — managed by Movements, delivered by specialist legal partners. The entry point is a Legal Health Check: an honest, structured review of where your business stands and what it actually needs.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="rounded-lg border border-border bg-card p-6">
              <div className="font-serif text-4xl text-primary mb-3">{s.value}</div>
              <p className="text-sm text-foreground/80 mb-3">{s.text}</p>
              <p className="text-xs text-muted-foreground italic">{s.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seven clusters */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Seven clusters. One lifecycle.</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Every MSME has a legal lifecycle.</h2>
          <p className="text-muted-foreground max-w-3xl mb-12">These seven clusters map directly onto the moments that matter most — from the day you register to the day you exit, succeed, or hand over.</p>
          <div className="grid gap-6 md:grid-cols-2">
            {clusters.map((c) => (
              <article key={c.num} className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <c.icon className="h-6 w-6 text-accent" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Cluster {c.num}</span>
                </div>
                <h3 className="font-serif text-xl mb-1">{c.title}</h3>
                <p className="text-sm italic text-accent mb-3">{c.tag}</p>
                <p className="text-sm text-foreground/80 mb-4">{c.body}</p>
                <p className="text-xs text-muted-foreground border-l-2 border-accent/40 pl-3">
                  <span className="font-semibold uppercase tracking-wider text-foreground/70">Why now: </span>{c.why}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Health Check */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">The Legal Health Check</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Where every engagement begins.</h2>
        <p className="text-foreground/80 mb-4">
          A structured review of your business's current legal exposure across all seven clusters. Not a questionnaire. A genuine diagnostic conversation that produces a clear, prioritised picture of what needs attention now, what can wait, and what the cost of inaction looks like in each area.
        </p>
        <p className="italic text-muted-foreground">Fixed fee. No retainer commitment required. You see the full picture before you decide what to do next.</p>
      </section>

      {/* Three engagement tiers */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Three ways to engage</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-12">Choose based on where you are in your business lifecycle and what you need most urgently.</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <article
                key={t.tag}
                className={`rounded-xl border p-8 flex flex-col ${
                  t.highlight ? "border-accent bg-accent/5 shadow-lg md:scale-105" : "border-border bg-background"
                }`}
              >
                <p className={`text-[10px] uppercase tracking-[0.25em] mb-3 ${t.highlight ? "text-accent font-semibold" : "text-muted-foreground"}`}>{t.tag}</p>
                <h3 className="font-serif text-2xl mb-2">{t.title}</h3>
                <p className="text-sm text-foreground/70 mb-6">{t.subtitle}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {t.items.map((i) => (
                    <li key={i} className="text-sm text-foreground/80 flex gap-2">
                      <span className="text-accent">·</span> {i}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-medium border-t border-border pt-4">{t.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Movements coordinates */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Why Movements coordinates this</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-6">Movements is not a law firm.</h2>
        <p className="text-foreground/85 mb-5">
          It is the practice that understands your business — its stage, its risks, its ambitions — and coordinates the right legal expertise for exactly what you need. You don't manage multiple advisors. You don't receive advice without context. You get one coordinating relationship that ensures the legal work reflects the commercial reality of your business.
        </p>
        <p className="text-foreground/85 italic">
          This is Consulting with a Conscience applied to legal services: ensuring the MSME owner has access to the same quality of legal protection that larger organisations take for granted — structured, coordinated, and priced for the scale of what they have actually built.
        </p>
      </section>

      {/* Lifecycle visual */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">The MSME legal lifecycle</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Every cluster maps to a predictable business moment.</h2>
          <p className="text-muted-foreground max-w-3xl mb-10">
            A client who starts with Cluster 01 will need Cluster 02 within months. Cluster 04 arrives the day a large buyer defaults. Legal support is most valuable when it is a lifecycle companion — not a crisis response.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
            {lifecycle.map((l) => (
              <div key={l.num} className="rounded-lg border border-border bg-card p-4 text-center">
                <div className="font-serif text-xl text-accent mb-1">{l.num}</div>
                <p className="text-sm font-medium mb-1">{l.phase}</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{l.stage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Start with the Legal Health Check.</h2>
        <p className="text-muted-foreground mb-8">See the full picture. Then decide what to do next.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Start a conversation <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="mt-6 text-sm text-muted-foreground">
          <a href="mailto:deepak@movementsindia.com" className="hover:text-primary">deepak@movementsindia.com</a>
          {" · "}
          <a href="tel:+919908438744" className="hover:text-primary">+91 99084 38744</a>
        </p>
      </section>
    </div>
  );
}
