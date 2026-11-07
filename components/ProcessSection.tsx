import { eyebrow, sectionLead, sectionTitle } from "@/lib/ui";

const steps = [
  { title: "Free consultation", text: "We visit your property, listen to what you want and talk through options and budget." },
  { title: "Clear, itemised quote", text: "You get a detailed written quote within 24–48 hours, with no hidden extras." },
  { title: "Build & keep you updated", text: "Our own team carries out the work, with regular updates and a tidy site." },
  { title: "Handover & aftercare", text: "We walk through the finished job with you and stay on hand afterwards." },
];

export function ProcessSection() {
  return (
    <section className="bg-neutral-900 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className={eyebrow.replace("text-red-600", "text-red-400")}>How it works</p>
          <h2 className={`mt-3 ${sectionTitle} !text-white`}>From first call to final finish</h2>
          <p className={`${sectionLead} !text-neutral-300`}>A simple four-step process, so you always know what happens next.</p>
        </div>
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-xl border border-white/10 bg-white/5 p-6">
              <span className="font-display text-4xl font-extrabold text-red-500">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-balance text-sm leading-relaxed text-neutral-300">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
