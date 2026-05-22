import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Deepak Lal, Founder" },
      { name: "description", content: "Thirty years of being accountable for transformation. Not advising on it. Accountable for it." },
    ],
  }),
  component: AboutPage,
});

const credentials = [
  "ICF Certified Executive Coach",
  "NSDC Master Trainer",
  "Six Sigma Black Belt & Green Belt",
  "MBTI Certified Practitioner",
  "Dale Carnegie Executive Presence",
  "Stephen Covey 7 Habits Facilitator",
  "Deloitte Faculty Excellence (DFX)",
  "Master's in Organisational Development",
  "CCMP (pursuing)",
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Deepak Lal — Founder</p>
      <h1 className="font-serif text-4xl md:text-5xl mb-3 leading-tight">Thirty years of being accountable for transformation.</h1>
      <p className="font-serif text-2xl md:text-3xl italic text-accent mb-10">Not advising on it. Accountable for it.</p>

      <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
        <p>
          I started in sales. Times of India, Sterling Holiday Resorts — learning how to read people, how to close, and how revenue actually gets made. That ground-level commercial discipline has never left me. It shapes how I read organisations today.
        </p>
        <p>
          The pivot came at Magus Customer Dialog. I was Key Relationship Manager, selling outsourced contact centre engagements to major clients. I sold the engagement to Airtel. Then, instead of moving on, I stayed to build what I had sold. Two years in Delhi, constructing the first outsourced contact centre for Airtel from the ground up. No blueprint. Full accountability. Systems, infrastructure, and people capability built simultaneously under real pressure.
        </p>
        <p>
          Then I moved to Chandigarh and did it again — setting up and running the contact centre for Spice Telecom Punjab, this time with full P&L responsibility. That posting is where the thing I now do for a living became clear to me: what people report upward and what is actually happening on the ground are rarely the same thing. The leader sees the summary. The problem lives in the detail.
        </p>
        <p>
          HSBC and Deloitte followed — senior leadership across banking operations, HR, customer service, and training. Teams of over 1,200 people. Budgets up to USD 100 million. Executive committees. Strategic transformation at scale. And always the same instinct: get to the ground truth before deciding what needs to change.
        </p>
        <p>
          I am also a Teach For India Fellow. Teaching in under-resourced classrooms, no positional authority, limited infrastructure, outcomes entirely dependent on the ability to meet people where they are. That posting tested everything I thought I knew about leadership. The practice it built is the foundation of every coaching engagement I run now.
        </p>
        <p className="border-l-2 border-accent pl-6 italic text-foreground/80">
          Today I run Movements. The name says what I believe: real transformation is not an event. It is many small movements, all growing from the same place of genuine clarity. In the leader's mind first. Then in the organisation around them.
        </p>
      </div>

      <div className="mt-16">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Credentials</p>
        <h2 className="font-serif text-2xl mb-6">The story above has already done the work.</h2>
        <div className="flex flex-wrap gap-2">
          {credentials.map((c) => (
            <span key={c} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground/80">{c}</span>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-10">
        <h2 className="font-serif text-2xl mb-3">If you are ready for a real conversation —</h2>
        <p className="text-foreground/80 mb-6">Start with an email. Tell me what you are navigating.</p>
        <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          deepak@movementsindia.com
        </Link>
      </div>
    </div>
  );
}
