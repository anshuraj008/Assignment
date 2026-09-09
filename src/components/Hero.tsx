import React from 'react';
import { ArrowRight, Play, CheckCircle2, Star, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  const handleScrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      const offsetTop = pricingSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[900px] md:h-[450px] bg-gradient-to-tr from-violet-600/15 via-indigo-600/20 to-purple-500/10 blur-[120px] -z-10 pointer-events-none rounded-full" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 dark:bg-zinc-800/80 border border-zinc-700/60 dark:border-zinc-700/50 shadow-sm mb-8 hover:border-brand-500/40 transition-colors">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 absolute" />
          <span className="text-xs font-semibold text-zinc-300 pl-2">
            Nexora 2.0 is Live
          </span>
          <span className="text-zinc-600 dark:text-zinc-500">•</span>
          <span className="text-xs font-medium text-brand-400 flex items-center">
            Autonomous Work Intelligence
            <Sparkles className="w-3 h-3 ml-1" />
          </span>
        </div>

        {/* Confident Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.08] mb-6">
          Move work forward.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-400 to-brand-300 dark:from-violet-400 dark:via-indigo-300 dark:to-brand-200">
            Automatically.
          </span>
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed mb-10">
          The unified AI workspace that helps high-velocity teams plan roadmaps, automate cross-tool busywork, synthesize team knowledge, and ship faster with confidence.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-12">
          <a
            href="#pricing"
            onClick={handleScrollToPricing}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Start 14-Day Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-750 border border-zinc-200 dark:border-zinc-700/70 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Play className="w-4 h-4 text-violet-500 fill-violet-500/20" />
            <span>Interactive Demo</span>
          </button>
        </div>

        {/* Trust Badges & Micro-proof */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>No credit card required</span>
          </div>
          <div className="hidden sm:inline-block text-zinc-700">•</div>
          <div className="flex items-center space-x-1.5">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Instant 5-minute setup</span>
          </div>
          <div className="hidden sm:inline-block text-zinc-700">•</div>
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-400" />
            <span>SOC-2 Type II & GDPR compliant</span>
          </div>
        </div>

        {/* Social Proof Star Rating Card */}
        <div className="mt-10 inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
          <div className="flex items-center space-x-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
            Rated <span className="font-bold text-zinc-950 dark:text-white">4.9/5</span> by over 1,200+ product & engineering teams
          </span>
        </div>

      </div>
    </section>
  );
};
