import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Movements Consulting" },
      { name: "description", content: "Notes from the field on transformation, leadership, and the human side of change." },
    ],
  }),
  component: InsightsPage,
});

const posts = [
  { tag: "Field Notes", title: "Why most AI transformations fail at the middle manager", excerpt: "The reskilling deck never made it past quarterly review. Here's what we found when we looked at what actually happened on the floor." },
  { tag: "Essay", title: "The summary is not the situation", excerpt: "What gets reported upward and what is actually happening on the ground are rarely the same thing. The cost of that gap is everything." },
  { tag: "Interview", title: "First six months as a CXO: the identity shift no one prepares you for", excerpt: "A conversation about deference, decisions, and the loneliness of the chair." },
];

function InsightsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Insights</p>
      <h1 className="font-serif text-4xl md:text-5xl mb-10">Notes from the field.</h1>
      <div className="space-y-6">
        {posts.map((p) => (
          <article key={p.title} className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">{p.tag}</div>
            <h2 className="font-serif text-2xl mb-2">{p.title}</h2>
            <p className="text-foreground/75">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}