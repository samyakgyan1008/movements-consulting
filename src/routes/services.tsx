import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, User, Building2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Movements Consulting" },
      { name: "description", content: "Executive coaching, change management consulting, and reskilling for VPs, CXOs and organisations in transformation." },
    ],
  }),
  component: ServicesPage,
});

const phases = [
  {
    num: "01",
    title: "Phase 1 — Ground truth",
    duration: "Month 1",
    body: "A genuine diagnostic. Not a questionnaire. A deep investigation into the gap between what the leader believes is happening and what is actually happening, in the organisation, in their leadership, and in the space between. Most clients describe this as the first time someone has told them what they actually needed to hear.",
  },
  {
    num: "02",
    title: "Phase 2 — Clarity at the root",
    duration: "Months 2–3",
    body: "Identity, assumptions, the system the leader has built around themselves. Using MBTI and other structured tools as lenses, not labels, to create new sight. The outcome is a specific set of recognitions: what actually matters, what needs to go, who the leader needs to become.",
  },
  {
    num: "03",
    title: "Phase 3 — Build what clarity demands",
    duration: "Months 4–6",
    body: "Insight followed by structure. The reskilling plan, the manager development journey, the communication infrastructure, designed and built in the same engagement. The work follows the work. Insight without structure does not change organisations.",
  },
];

const individualServices = [
  {
    tag: "Flagship · ICF Certified",
    title: "Executive coaching",
    body: "One-on-one coaching for VPs and CXOs who are the critical variable in a transformation and know it. Every engagement begins with the Ground Truth Diagnostic — a genuine investigation into the gap between what is being presented and what is actually happening. The coaching follows the work: into identity, assumptions, the leadership behaviours shaping the system, and the clarity that has to precede every major decision. ICF-certified practice.",
    best: "VPs and CXOs navigating AI or digital transformation, leading large teams through change, or at an inflection point where past strengths are no longer sufficient.",
  },
  {
    tag: "First 6–18 Months in Role",
    title: "First-time CXO coaching",
    body: "The identity that made you excellent at the level below is not the identity that will make you effective at this one. This coaching is specifically designed for leaders in their first CXO role — receiving deference they haven't yet learned to interrogate, making decisions at the pace the organisation demands, and privately aware that the gap between who they are performing and who they need to become is growing. The work is precise, honest, and confidential.",
    best: "Leaders in their first six to eighteen months as a CXO — promoted from within or brought in from outside — who want to make the identity shift before it becomes a performance problem.",
  },
  {
    tag: "Dale Carnegie · Presence",
    title: "Leadership presence and communication",
    body: "Built on the Dale Carnegie Executive Presence framework and thirty years of leading large, complex, high-stakes teams. This coaching is for leaders who know their thinking is right but whose ability to command rooms, move stakeholders, and communicate with the weight their role requires has not kept pace with their seniority. Not a presentation skills course. A precise, structured development of the presence that earns trust before you speak.",
    best: "Senior leaders preparing for board presentations, high-stakes negotiations, CEO conversations, or any context where presence and communication are the differentiating variable.",
  },
  {
    tag: "MBTI Certified",
    title: "MBTI leadership profile and coaching",
    body: "A structured, MBTI-certified exploration of how you are wired under pressure — your default responses, your blind spots, and the assumptions you make about how others think and decide. Used not as a label but as a lens. The coaching builds on the profile to create specific, practical shifts in how you lead, how you read the room, and how you create the conditions for the people around you to do their best work.",
    best: "Leaders who want to understand their defaults under pressure, improve the quality of their most difficult conversations, or prepare their teams for a significant change.",
  },
  {
    tag: "Standalone · 4 Weeks",
    title: "The Ground Truth Diagnostic",
    body: "A four-week standalone engagement for leaders who want clarity before committing to a longer coaching journey. Not a questionnaire. A genuine investigation into what is actually in the way of the goal the leader is trying to achieve, what is being seen clearly, and what the system around the leader has been designed, often unconsciously, not to show. The Diagnostic produces a specific, honest picture. What happens next is the leader's choice.",
    best: "Leaders who want to understand what is actually happening before committing to a full engagement, or whose organisation needs an independent, honest read of where a transformation is actually stuck.",
  },
  {
    tag: "Career Inflection",
    title: "Career transition and senior role coaching",
    body: "For senior leaders navigating a significant professional transition — stepping up to a larger role, moving across sectors, returning to a leadership position after a break, or making the decision to leave and build something of their own. The work focuses on clarity about what the leader actually wants, an honest assessment of what the transition requires, and the identity and capability development to make it real.",
    best: "Directors, VPs, and CXOs at a career inflection point who need more than a career coach and less than a therapist — someone who has navigated large organisations and knows what they actually demand.",
  },
  {
    tag: "Covey Certified",
    title: "The 7 Habits leadership journey",
    body: "A structured, facilitated leadership development programme built on Stephen Covey's 7 Habits of Highly Effective People — certified facilitator delivery, adapted for the specific pressures of senior leaders in Indian organisations navigating transformation. Not a workshop. A sustained development journey that moves from personal effectiveness to interpersonal influence to organisational impact. Run individually or with a small leadership cohort.",
    best: "Leaders who want a rigorous, structured development framework that builds habits rather than knowledge — individually or with a trusted team.",
  },
];

const orgServices = [
  {
    tag: "For Organisations",
    title: "Executive coaching",
    body: "When an organisation is investing in the coaching development of a VP or CXO, the engagement is designed with both the individual and the organisational context in mind. The leader's clarity becomes the organisation's asset. Available as a standalone engagement or as part of a broader transformation partnership.",
    best: "CHROs and CEOs investing in the development of their most critical leaders — individually or as part of a leadership pipeline programme.",
  },
  {
    tag: "CCMP Methodology",
    title: "Change management consulting",
    body: "Formal change architecture for organisations in transformation: change impact assessment, stakeholder and resistance mapping, adoption planning, and communication design that creates genuine belief, not managed compliance. Thirty years of operational accountability behind every recommendation. The work is systematic, measurable, and built to hold after the engagement ends.",
    best: "CHROs, COOs, and transformation leads who need a rigorous structural framework, not a consultant's opinion delivered and forgotten.",
  },
  {
    tag: "NSDC · Six Sigma",
    title: "Reskilling and capability building",
    body: "Large-scale reskilling architecture built from the ground truth of what your teams can do and who they need to become. Three layers: individual AI-fluency and role confidence, manager capability to coach rather than enforce, and system realignment so new behaviours become the easier choice. NSDC Master Trainer and Six Sigma Black Belt rigour — measurable at month three, month six, and month twelve.",
    best: "CHROs and COOs in telecom, BFSI, and BPO facing workforce transformation at scale — with a board mandate and a deadline.",
  },
  {
    tag: "Keynotes & Facilitation",
    title: "Speaking and facilitation",
    body: "Keynote talks and leadership team facilitation for conferences, offsites, and critical transitions. Built from real stories and real organisations, not from generic frameworks applied at altitude. Core topics: AI transformation and the human side of change, reskilling at scale, and what actually makes transformations succeed or fail.",
    best: "Conference organisers, HR leaders, and CEOs looking for a speaker who will shift the room, not just fill a slot.",
  },
];

function ServiceCard({ s }: { s: { tag: string; title: string; body: string; best: string } }) {
  return (
    <article className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow flex flex-col">
      <div className="text-[10px] uppercase tracking-[0.2em] text-accent mb-3">{s.tag}</div>
      <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
      <p className="text-sm text-foreground/80 mb-4 flex-1">{s.body}</p>
      <p className="text-xs text-muted-foreground border-t border-border pt-3 mt-2">
        <span className="font-semibold text-foreground">For: </span>{s.best}
      </p>
    </article>
  );
}

function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">The Full Practice</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">The work follows the work.</h1>
          <p className="text-muted-foreground max-w-3xl">
            Every engagement begins with a Ground Truth Diagnostic. What we build from there depends entirely on what we find.
          </p>
        </div>
      </section>

      {/* Flagship — From clarity to capability */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Signature Partnership · 6 Months</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-4">From clarity to capability.</h2>
        <p className="text-muted-foreground max-w-3xl mb-4">A 6-month leadership and organisational transformation partnership.</p>
        <p className="text-foreground/80 max-w-3xl mb-12">
          Designed for the VP or CXO who is the critical variable in their organisation's transformation, and knows it. This is not a coaching retainer or a consulting project. It is a partnership that follows the work wherever it needs to go.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {phases.map((p) => (
            <div key={p.num} className="rounded-lg border border-border bg-card p-7">
              <div className="font-serif text-5xl text-accent mb-3">{p.num}</div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{p.duration}</p>
              <h3 className="font-serif text-xl mb-3">{p.title}</h3>
              <p className="text-sm text-foreground/80">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For the individual leader */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3 mb-3">
            <User className="h-5 w-5 text-accent" />
            <p className="text-xs uppercase tracking-[0.3em] text-accent">For the individual leader</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Every coaching engagement begins with the same question.</h2>
          <p className="text-foreground/80 max-w-3xl mb-12">
            What is actually happening — not what is being reported, not what the organisation sees, not what the leader has decided is the problem. The work follows wherever the honest answer leads.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {individualServices.map((s) => (<ServiceCard key={s.title} s={s} />))}
          </div>
        </div>
      </section>

      {/* For the organisation */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-3 mb-3">
          <Building2 className="h-5 w-5 text-accent" />
          <p className="text-xs uppercase tracking-[0.3em] text-accent">For the organisation</p>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Transformation fails when the leader and the people inside it are left out of the equation.</h2>
        <p className="text-foreground/80 max-w-3xl mb-12">
          Every organisational engagement begins with the Ground Truth Diagnostic and stays through the build, not just the diagnosis.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {orgServices.map((s) => (<ServiceCard key={s.title} s={s} />))}
        </div>
      </section>

      {/* How it starts */}
      <section className="bg-primary/95 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">How it starts</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">An email or a call. A real conversation about what you are navigating.</h2>
          <p className="text-primary-foreground/80 mb-4">
            Every engagement, regardless of which service, begins the same way. No proposal templates, no scope documents before we have spoken.
          </p>
          <p className="text-primary-foreground/80 italic mb-10">
            The Ground Truth Diagnostic is the first formal step. It is not a formality. It is the work, and often the most valuable part of the entire engagement.
          </p>
          <p className="font-serif text-2xl mb-6">Not sure which service is right?</p>
          <p className="text-primary-foreground/80 mb-8">Start with an email. Describe what you are navigating. We will find the right entry point together.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="text-sm text-primary-foreground/70">
              <a href="mailto:deepak@movementsindia.com" className="hover:text-accent">deepak@movementsindia.com</a>
              {" · "}
              <a href="tel:+919908438744" className="hover:text-accent">+91 99084 38744</a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
