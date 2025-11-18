import { Camera, Sparkles, Rocket, Megaphone, MapPin, Timer } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "On-location production",
    desc: "Agile crews that capture your property at its best, from rooms to rooftop bars.",
  },
  {
    icon: Megaphone,
    title: "Ad strategy & scripts",
    desc: "We craft hotel-specific hooks and offers that turn viewers into bookers.",
  },
  {
    icon: Sparkles,
    title: "Editing & motion",
    desc: "Punchy edits, captions and motion graphics tailored for paid social.",
  },
  {
    icon: MapPin,
    title: "Multi-property rollouts",
    desc: "Scalable production for chains and groups with consistent brand quality.",
  },
  {
    icon: Timer,
    title: "Fast turnarounds",
    desc: "From shoot to campaign launch in days, not weeks.",
  },
  {
    icon: Rocket,
    title: "Performance focus",
    desc: "Creative that’s designed to drive occupancy and direct bookings.",
  },
];

export default function Features() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">What we do</h2>
          <p className="mt-3 text-white/70">
            A full-funnel creative partner for hotels and resorts.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:bg-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
