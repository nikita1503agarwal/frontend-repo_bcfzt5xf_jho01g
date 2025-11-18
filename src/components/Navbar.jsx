import { Menu, Play, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20" />
            <div className="text-white font-semibold tracking-tight">VistaRooms Creative</div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#process" className="hover:text-white transition">Process</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+1000000000" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition">
              <Phone className="h-4 w-4" /> Call
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition">
              <Play className="h-4 w-4" /> Get a quote
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80"><Menu /></button>
        </div>

        {open && (
          <div className="md:hidden mt-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-white/80 space-y-3">
            <a href="#services" className="block">Services</a>
            <a href="#work" className="block">Work</a>
            <a href="#process" className="block">Process</a>
            <a href="#about" className="block">About</a>
            <div className="pt-2 flex gap-2">
              <a href="mailto:hello@vistaroomscreative.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90"><Mail className="h-4 w-4"/> Email</a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-3 py-2 text-sm font-semibold text-white">
                <Play className="h-4 w-4" /> Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
