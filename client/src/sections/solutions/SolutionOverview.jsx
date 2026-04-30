export default function SolutionOverview() {
  return (
    <section
      id="solutions"
      className="relative bg-black py-24 sm:py-32 overflow-hidden"
      data-testid="solutions-overview"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="font-mono type-eyebrow uppercase tracking-[0.4em] text-amber-500 mb-5">
          [06] Solutions
        </div>
        <h2 className="type-h1 font-bold uppercase">
          Engineered lift
          <br />
          <span className="text-amber-500">strategies.</span>
        </h2>
        <p className="type-body text-zinc-400 mt-6 max-w-2xl">
          From lift planning to on-site execution, we tailor a rig and crew to the
          constraints of your jobsite, timeline, and safety requirements.
        </p>
      </div>
    </section>
  );
}
