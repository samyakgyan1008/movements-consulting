import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/philosophy")({
  head: () => ({
    meta: [
      { title: "Philosophy — Movements Consulting" },
      { name: "description", content: "Thought. Deed. Action. Three movements. One transformation." },
    ],
  }),
  component: PhilosophyPage,
});

const phases = [
  {
    num: "I",
    title: "Thought",
    body: "A movement begins in the mind. Not in a new system or a new strategy — in how a leader sees the situation they are in. Without that shift, everything else is rearrangement.",
    tail: "The problem a leader presents is almost never the problem that needs solving. The coaching work begins here — with what is actually happening, not what is being reported.",
  },
  {
    num: "II",
    title: "Deed",
    body: "Clarity without structure changes nothing. Once a leader sees what is real, the work becomes building what the answer requires — the reskilling architecture, the change design, the manager capability that makes transformation hold.",
    tail: "Diagnosis before design. Clarity before build. Always.",
  },
  {
    num: "III",
    title: "Action",
    body: "The people carrying the transformation are not a cost to be managed through it. They are the transformation.",
    tail: "Consulting with a Conscience means accountability to every person whose working life the engagement touches, not just the client who commissions it.",
  },
];

function PhilosophyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">The Philosophy</p>
      <h1 className="font-serif text-5xl md:text-6xl mb-3">Thought. Deed. Action.</h1>
      <p className="font-serif text-2xl md:text-3xl italic text-accent mb-16">Three movements. One transformation.</p>

      <div className="space-y-16">
        {phases.map((p) => (
          <div key={p.title} className="grid md:grid-cols-[120px_1fr] gap-6 border-l-2 border-accent pl-6 md:pl-0">
            <div className="font-serif text-6xl text-accent md:text-right">{p.num}</div>
            <div>
              <h2 className="font-serif text-3xl mb-4">{p.title}</h2>
              <p className="text-foreground/85 leading-relaxed text-lg mb-4">{p.body}</p>
              <p className="text-foreground/70 leading-relaxed italic">{p.tail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-border pt-12">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Why Movements</p>
        <h2 className="font-serif text-3xl mb-5">A movement is not a project or a programme.</h2>
        <p className="text-foreground/85 leading-relaxed text-lg">
          It is a sustained shift in how an organisation thinks, decides, and moves. Many small movements, all growing from the same place of genuine clarity.
        </p>
      </div>

      <div className="mt-16 text-center border-t border-border pt-12">
        <h3 className="font-serif text-2xl mb-3">If this is the kind of work you have been looking for —</h3>
        <p className="text-muted-foreground mb-6">An email is enough to start.</p>
        <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          deepak@movementsindia.com
        </Link>
      </div>
    </div>
  );
}
