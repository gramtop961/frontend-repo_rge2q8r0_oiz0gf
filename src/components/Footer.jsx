import { ArrowRight, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-300" />
              <span className="font-semibold">nous labs</span>
            </div>
            <p className="mt-3 text-white/70 text-sm max-w-sm">
              Building the infrastructure layer for verifiable, intelligent, and interoperable on-chain systems.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                <div>
                  <h3 className="text-lg font-medium">Get product updates</h3>
                  <p className="text-sm text-white/70">Join the early access list for releases and research notes.</p>
                </div>
                <form className="flex w-full sm:w-auto items-center gap-2">
                  <div className="relative flex-1 sm:w-80">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={16} />
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full rounded-lg bg-black/60 border border-white/15 px-9 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition"
                  >
                    Subscribe <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60">
          <p>© {new Date().getFullYear()} nous labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Security</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
