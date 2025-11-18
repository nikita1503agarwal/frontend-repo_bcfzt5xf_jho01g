import { PlayCircle, Hotel, Compass } from "lucide-react";

const items = [
  {
    brand: "Seabreeze Resort",
    result: "+34% direct bookings",
    thumb: "https://images.unsplash.com/photo-1501117716987-c8e3f6c9e2fb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    brand: "Vista Grand",
    result: "2.1x ROAS on Meta",
    thumb: "https://images.unsplash.com/photo-1501117161576-7407be5f2d1d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    brand: "Palm Court",
    result: "+18% occupancy",
    thumb: "https://images.unsplash.com/photo-1501117492348-41fb1b1f1f1d?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Recent results</h2>
            <p className="mt-3 text-white/70">Short, punchy edits that sell the stay.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition">
            <Compass className="h-4 w-4"/> Explore services
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((i) => (
            <div key={i.brand} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={i.thumb} alt={i.brand} className="h-60 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-end p-5">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-xs text-white/80 backdrop-blur">
                    <Hotel className="h-3 w-3"/> {i.brand}
                  </div>
                  <div className="mt-2 text-white font-medium">{i.result}</div>
                </div>
                <button className="ml-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white/90 backdrop-blur group-hover:bg-white/20 transition">
                  <PlayCircle className="h-4 w-4"/> Play
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
