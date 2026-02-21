import { getYearsExperience, siteConfig } from "@/lib/site-config";

export function StatsSection() {
  const years = getYearsExperience();
  const stats = [
    { value: `${years}+`, label: "Years Experience" },
    { value: siteConfig.stats.projectsCompleted, label: "Projects Completed" },
    { value: siteConfig.stats.clientSatisfaction, label: "Client Satisfaction" },
  ];

  return (
    <section className="border-y border-neutral-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-red-600 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
