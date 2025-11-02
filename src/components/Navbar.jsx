import { Rocket, Globe } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-300 animate-pulse" />
          <span className="font-semibold tracking-tight text-white">nous labs</span>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <li className="hover:text-white transition">Platform</li>
          <li className="hover:text-white transition">Solutions</li>
          <li className="hover:text-white transition">Research</li>
          <li className="hover:text-white transition">Docs</li>
        </ul>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 transition">
            <Globe size={16} />
            <span>Status</span>
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-3 py-1.5 text-sm font-medium hover:bg-white/90 transition">
            <Rocket size={16} />
            <span>Launch App</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
