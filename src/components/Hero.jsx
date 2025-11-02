import Spline from "@splinetool/react-spline";
import { ArrowRight, Shield, Coins } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full bg-black text-white overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Gradient overlays for readability (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-white/80">
            <Coins size={14} /> Shiny, holographic crypto motion — built for finance-grade scale
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Infrastructure for the next era of on-chain intelligence
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            nous labs builds secure, high-performance blockchain software — from core protocols to data pipelines — enabling enterprises to launch, scale, and govern decentralized systems with confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">
              Explore the platform <ArrowRight size={18} />
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 text-white px-5 py-3 font-medium hover:bg-white/10 transition">
              <Shield size={18} /> Security & compliance brief
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
