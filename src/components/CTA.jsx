export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Ready to boost bookings?</h3>
              <p className="mt-3 text-white/70">Tell us about your property and we’ll send a tailored creative plan.</p>
            </div>
            <form className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input placeholder="Property name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-cyan-400/50" />
              <input placeholder="Email" type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-cyan-400/50" />
              <button type="button" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition">
                Get a proposal
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
