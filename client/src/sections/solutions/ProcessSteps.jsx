const STEPS = [
  {
    title: "Site assessment",
    desc: "We review access, ground bearing, clearances, and rigging constraints.",
  },
  {
    title: "Lift planning",
    desc: "Engineers map lift paths, load charts, and contingency protocols.",
  },
  {
    title: "Execution",
    desc: "Certified operators run the lift with real-time safety coordination.",
  },
];

export default function ProcessSteps() {
  return (
    <section
      className="relative bg-[#0a0a0a] py-24 sm:py-32 overflow-hidden"
      data-testid="solutions-steps"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
          <div className="md:col-span-7">
            <div className="font-mono type-eyebrow uppercase tracking-[0.4em] text-amber-500 mb-5">
              [07] Process
            </div>
            <h3 className="type-h1 font-bold uppercase">
              Precision in
              <br />
              every phase.
            </h3>
          </div>
          <div className="md:col-span-5 md:pl-8">
            <p className="type-body text-zinc-400">
              Our crews coordinate with your site leads to deliver safe, efficient,
              and fully documented lifts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900">
          {STEPS.map((step, i) => (
            <div key={step.title} className="bg-black p-8 sm:p-10">
              <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600 mb-4">
                / 0{i + 1}
              </div>
              <h4 className="type-h3 font-semibold uppercase mb-2">
                {step.title}
              </h4>
              <p className="type-body text-zinc-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
