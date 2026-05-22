import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { ArrowRight, User, Building2, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Movements — Consulting with a Conscience" },
      { name: "description", content: "The technology is the easy part. The humans are where transformation succeeds or fails." },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "88%", text: "of business transformations fail to achieve their original ambitions.", source: "Bain & Company, 2024" },
  { value: "42%", text: "of companies abandoned most of their AI initiatives in 2025, up from 17% the year before.", source: "McKinsey Global AI Survey, 2025" },
  { value: "68%", text: "of Indian white-collar workers fear their role will be automated within five years — even those who have already received AI training.", source: "IIM Ahmedabad, 2024" },
  { value: "70%", text: "of AI resources need to go to people and processes, not technology, for transformations to deliver real results. Most organisations invert this entirely.", source: "Gartner AI Maturity Report, 2024" },
];

const leaderPoints = [
  "Leading a transformation that depends on you",
  "In your first CXO role and privately aware of the gap",
  "At a career inflection point that requires real clarity",
  "Wanting to understand how you are wired under pressure",
];

const orgPoints = [
  "Change management architecture",
  "Reskilling and capability building at scale",
  "Transformation that sticks beyond the engagement",
];

const pillars = [
  {
    title: "Executive coaching",
    body: "We begin with what is actually happening, not what is being reported. One-on-one coaching for the leader who is the critical variable in the transformation and knows it.",
  },
  {
    title: "Change management",
    body: "The structural architecture transformation requires: change impact assessment, stakeholder and resistance mapping, adoption design, and communication infrastructure that creates genuine belief, not managed compliance.",
  },
  {
    title: "Capability building",
    body: "Reskilling programmes, manager development journeys, and the organisational infrastructure that makes change stick, built from the ground truth of what your people can do and who they need to become.",
  },
];

const forYouIf = [
  "You are 12 to 18 months into a transformation and privately aware it is not working the way it was supposed to",
  "You are receiving feedback that sounds fine and feels incomplete",
  "You know the technology is deployed and the people are not carrying it",
  "You are the most important variable in the transformation — and that thought keeps you up at night",
  "You are ready to hear what is actually in the way, not a polished version of it",
];

function Index() {
  const [tab, setTab] = useState<"leader" | "org">("leader");

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-primary-foreground">
          <div className="mb-8">
            <div className="inline-block rounded-md bg-primary-foreground/95 px-5 py-3 shadow-sm">
              <img src={logo} alt="Movements Consulting" className="h-14 md:h-16 w-auto object-contain" />
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl">
            The technology is the easy part.{" "}
            <span className="italic text-accent">The humans are where transformation succeeds or fails.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-primary-foreground/80">
            Movements works with VPs and CXOs in mid-size Indian organisations navigating AI and digital transformation — on the part no technology vendor will solve for you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#services" className="inline-flex items-center rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10">
              What we do
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">The Reality</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-10 max-w-3xl">The numbers most leaders find out the hard way.</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="rounded-lg border border-border bg-card p-6">
              <div className="font-serif text-4xl text-primary mb-3">{s.value}</div>
              <p className="text-sm text-foreground/80 mb-3">{s.text}</p>
              <p className="text-xs text-muted-foreground italic">{s.source}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 italic text-center text-muted-foreground">None of these are technology problems. They are all human ones.</p>
      </section>

      {/* The fork — individual vs organisation */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Where are you coming from?</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">The work is the same at its core. The entry point is different.</h2>
          <p className="text-muted-foreground mb-8">Choose the one that describes your situation.</p>
          <div className="inline-flex rounded-lg bg-card border border-border p-1 mb-8">
            <button onClick={() => setTab("leader")} className={`px-5 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors ${tab === "leader" ? "bg-primary text-primary-foreground" : "text-foreground/70"}`}>
              <User className="h-4 w-4" /> I am a leader
            </button>
            <button onClick={() => setTab("org")} className={`px-5 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors ${tab === "org" ? "bg-primary text-primary-foreground" : "text-foreground/70"}`}>
              <Building2 className="h-4 w-4" /> I represent an organisation
            </button>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 md:p-10">
            {tab === "leader" ? (
              <>
                <h3 className="font-serif text-2xl mb-3">I am navigating a transformation — and the hardest part is me.</h3>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Where you might be:</p>
                <ul className="space-y-2 mb-6">
                  {leaderPoints.map((p) => (
                    <li key={p} className="flex gap-3 text-foreground/85"><Check className="h-4 w-4 mt-1 text-accent shrink-0" /> {p}</li>
                  ))}
                </ul>
                <Link to="/services" className="text-accent hover:underline font-medium">See all coaching services →</Link>
              </>
            ) : (
              <>
                <h3 className="font-serif text-2xl mb-3">We are transforming — and the people side is not keeping up with the technology side.</h3>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">What you need:</p>
                <ul className="space-y-2 mb-6">
                  {orgPoints.map((p) => (
                    <li key={p} className="flex gap-3 text-foreground/85"><Check className="h-4 w-4 mt-1 text-accent shrink-0" /> {p}</li>
                  ))}
                </ul>
                <Link to="/services" className="text-accent hover:underline font-medium">Take me to organisation consulting →</Link>
              </>
            )}
          </div>
          <p className="mt-6 text-sm text-center text-muted-foreground">
            Not sure which path fits? Start with an email:{" "}
            <a href="mailto:deepak@movementsindia.com" className="text-accent hover:underline">deepak@movementsindia.com</a>
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">The Problem</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-8">Why this exists.</h2>
        <div className="space-y-5 text-foreground/85 leading-relaxed">
          <p>Most transformation programmes fail for the same reason. Not the technology. Not the strategy. The gap between what leadership intends and what the organisation actually experiences.</p>
          <p>You have seen this. The rollout goes to plan. The dashboards look fine. And yet something is not moving. The middle managers are confused about their new roles. The frontline is performing compliance without belief. And the feedback reaching the leadership floor is not telling the story that is actually happening on the ground.</p>
          <p>That gap — between intent and experience, between the summary and the reality — is where every transformation either lives or dies. It is also where Movements works.</p>
        </div>
        <div className="mt-10 border-l-2 border-accent pl-6 italic text-lg text-foreground/80 space-y-1">
          <p>The leader has to drive it.</p>
          <p>The people have to live it.</p>
          <p>Both need to move — together.</p>
        </div>
      </section>

      {/* Three things. One practice. */}
      <section id="services" className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">The Practice</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-12">Three things. One practice.</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.title} className="rounded-lg border border-border bg-card p-7">
                <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
                <p className="text-sm text-foreground/80 mb-5">{p.body}</p>
                <Link to="/services" className="text-accent text-sm hover:underline">Learn more →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* This work is for you if */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">An honest filter</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">This work is for you if —</h2>
          <ul className="space-y-4">
            {forYouIf.map((p) => (
              <li key={p} className="flex gap-3 text-primary-foreground/90 text-base md:text-lg leading-relaxed">
                <Check className="h-5 w-5 mt-1 text-accent shrink-0" /> {p}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-primary-foreground/80 italic">
            If that is where you are — the right next step is a single honest conversation. Not a sales call. A real one.
          </p>
        </div>
      </section>

      {/* Founder mini-bio */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Deepak Lal — founder, Movements</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-8 max-w-3xl">Thirty years of building, leading, and transforming organisations at scale.</h2>
        <div className="space-y-4 text-foreground/85 max-w-3xl">
          <p>
            Thirty years across telecom, banking, and professional services. Managed teams of over 1,200 people, held P&L responsibility up to USD 100 million annually, and built some of India's earliest outsourced contact centres from the ground up.
          </p>
          <p>
            ICF-certified executive coach, NSDC Master Trainer, and Six Sigma Black Belt. Currently pursuing his CCMP certification. Also a Teach For India Fellow — which is where the conscience in Consulting with a Conscience was formed.
          </p>
        </div>
        <div className="mt-8">
          <Link to="/about" className="text-accent hover:underline font-medium">Read the full story →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center border-t border-border">
        <h2 className="font-serif text-3xl md:text-4xl mb-3">The conversation begins with what is actually in the way.</h2>
        <p className="text-muted-foreground italic mb-8">Not the presenting problem. The real one.</p>
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
