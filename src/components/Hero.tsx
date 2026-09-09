import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Zap, Sparkles, Terminal, CornerDownLeft } from 'lucide-react';

interface HeroProps {
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  const [commandText, setCommandText] = useState('');
  const [commandResponse, setCommandResponse] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);

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

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandText.trim()) return;
    setIsExecuting(true);
    setCommandResponse(null);
    setTimeout(() => {
      setIsExecuting(false);
      setCommandResponse(`✓ AI Agent triaged 14 issues, balanced 2 sprint backlogs, and flagged 1 PR bottleneck.`);
    }, 700);
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Aurora spotlight horizon */}
      <div className="absolute top-0 left-0 right-0 h-[500px] aurora-spotlight -z-10 pointer-events-none" />

      {/* Masked dot matrix grid */}
      <div className="absolute inset-0 bg-dots-pattern -z-10 pointer-events-none" />

      {/* Top glowing laser beam line */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl beam-line pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Floating Liquid-Glass Eyebrow Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full liquid-glass shadow-sm mb-8 hover:border-violet-500/40 transition-colors cursor-default">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
          </span>
          <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 pl-1">
            Nexora 2.0 Released
          </span>
          <span className="text-zinc-400 dark:text-zinc-600">•</span>
          <span className="text-xs font-medium text-violet-600 dark:text-violet-400 flex items-center">
            Autonomous Work Intelligence
            <Sparkles className="w-3 h-3 ml-1" />
          </span>
        </div>

        {/* Confident Headline with Rich Text Accent */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.08] mb-6">
          Move work forward.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-200">
            Automatically.
          </span>
        </h1>

        {/* Crisp Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-10">
          The unified AI workspace that orchestrates team roadmaps, executes repetitive cross-tool workflows, and unifies company knowledge into automated execution.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-10">
          <a
            href="#pricing"
            onClick={handleScrollToPricing}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-violet-600 hover:bg-violet-500 shadow-md shadow-violet-600/20 hover:shadow-violet-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            <span>Start 14-Day Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-medium text-sm text-zinc-800 dark:text-zinc-200 bg-white/60 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:-translate-y-0.5"
          >
            <Play className="w-3.5 h-3.5 text-violet-500" />
            <span>Interactive Demo</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-zinc-500 dark:text-zinc-400 mb-10">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>No credit card required</span>
          </div>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
          <div className="flex items-center space-x-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>5-minute instant setup</span>
          </div>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
            <span>SOC-2 Type II Certified</span>
          </div>
        </div>

        {/* Interactive Human-Crafted Command Bar Component (Shows AI capability naturally) */}
        <div className="max-w-xl mx-auto text-left">
          <form
            onSubmit={handleCommandSubmit}
            className="p-1.5 pl-3.5 rounded-xl bg-zinc-900/90 dark:bg-zinc-950/90 border border-zinc-700/60 dark:border-zinc-800 shadow-xl flex items-center justify-between text-xs transition-colors focus-within:border-violet-500/80"
          >
            <div className="flex items-center space-x-2.5 flex-1 mr-2">
              <Terminal className="w-3.5 h-3.5 text-violet-400 shrink-0" />
              <input
                type="text"
                value={commandText}
                onChange={(e) => setCommandText(e.target.value)}
                placeholder="Try command: /triage-sprint or /balance-workload"
                className="w-full bg-transparent text-zinc-200 placeholder-zinc-500 focus:outline-none text-xs"
              />
            </div>
            <button
              type="submit"
              disabled={isExecuting}
              className="px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 font-mono text-[11px] flex items-center space-x-1 border border-zinc-700/60 transition-colors"
            >
              <span>{isExecuting ? 'Running...' : 'Run'}</span>
              <CornerDownLeft className="w-3 h-3 text-zinc-400" />
            </button>
          </form>

          {commandResponse && (
            <div className="mt-2.5 p-2.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-xs text-violet-300 flex items-center justify-between animate-fade-in">
              <span>{commandResponse}</span>
              <span className="font-mono text-[10px] text-violet-400">42ms</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
