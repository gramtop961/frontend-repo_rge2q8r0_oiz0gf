import { Cpu, Layers, Lock, Gauge, Database, Globe } from "lucide-react";

const features = [
  {
    title: "High‑throughput core",
    description:
      "Optimized execution, mempool orchestration, and block production deliver predictable latency at scale.",
    icon: Cpu,
  },
  {
    title: "Modular by design",
    description:
      "Composable consensus, data availability, and settlement layers let you ship only what you need.",
    icon: Layers,
  },
  {
    title: "Enterprise security",
    description:
      "Hardware-backed key custody, granular roles, and audit trails aligned to SOC2 and ISO frameworks.",
    icon: Lock,
  },
  {
    title: "Observability",
    description:
      "Deep metrics, structured logs, and tracing across nodes and pipelines for real-time health.",
    icon: Gauge,
  },
  {
    title: "Data pipelines",
    description:
      "Indexers and ETL flows turn on-chain activity into queryable datasets and actionable insights.",
    icon: Database,
  },
  {
    title: "Global ready",
    description:
      "Multi-region deployment templates with automated failover and sovereign data controls.",
    icon: Globe,
  },
];

export default function Features() {
  return (
    <section className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What we build</h2>
          <p className="mt-3 text-white/70">
            A full-stack platform for institutions to design, launch, and operate blockchain networks with confidence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-white/20 transition">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-2.5 text-white">
                  <Icon size={20} />
                </div>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
