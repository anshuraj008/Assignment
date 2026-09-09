import React from 'react';
import { ArrowRight, Play, CheckCircle2, Zap, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenDemoModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemoModal }) => {
  const handleScrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricing = document.querySelector('#pricing');
    if (pricing) {
      const offsetTop = pricing.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border border-red-500/30 p-8 sm:p-14 lg:p-18 text-center shadow-2xl shadow-red-950/40 overflow-hidden">
          
          {/* Radial Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold mb-6 border border-red-500/25">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transform Your Engineering Velocity Today</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
              Move work forward.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-200">
                Automatically.
              </span>
            </h2>

            <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
              Join thousands of high-velocity developers, engineering managers, and product leaders who let Nexora handle coordination so they can build what matters.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="#pricing"
                onClick={handleScrollToPricing}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all text-base"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl font-semibold text-white bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700 hover:border-zinc-600 transition-all hover:-translate-y-0.5 text-base"
              >
                <Play className="w-4 h-4 text-red-400 fill-red-400/20" />
                <span>Book 15-Min Live Demo</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-zinc-400">
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-1.5" />
                No credit card required
              </span>
              <span className="hidden sm:inline text-zinc-700">•</span>
              <span className="flex items-center">
                <Zap className="w-4 h-4 text-amber-400 mr-1.5" />
                5-minute 1-click stack setup
              </span>
              <span className="hidden sm:inline text-zinc-700">•</span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mr-1.5" />
                Cancel anytime with zero lock-in
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
