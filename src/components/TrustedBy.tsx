import React from 'react';
import { Layers, Shield, Cpu, Zap, Compass, Terminal } from 'lucide-react';

export const TrustedBy: React.FC = () => {
  const partners = [
    { name: 'LinearFlow', icon: Layers, metric: '4.2x Faster Sprints' },
    { name: 'Hyperion AI', icon: Cpu, metric: 'Zero Triage Overhead' },
    { name: 'CloudScale', icon: Zap, metric: 'Enterprise Deployments' },
    { name: 'Sentinel Cyber', icon: Shield, metric: 'SOC-2 Compliant' },
    { name: 'Veloce Systems', icon: Terminal, metric: '100+ Engineers' },
    { name: 'Compass Health', icon: Compass, metric: 'HIPAA Certified' },
  ];

  return (
    <section className="py-10 border-y border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Trusted by engineering and product leaders at forward-thinking companies
        </p>
      </div>

      {/* Marquee Wrapper with Edge Fade Mask */}
      <div className="relative w-full overflow-hidden marquee-mask">
        <div className="flex w-max items-center space-x-6 sm:space-x-8 animate-marquee pause-on-hover py-2">
          {/* Double list to create seamless infinite scroll loop */}
          {[...partners, ...partners].map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <div
                key={`${partner.name}-${idx}`}
                className="group flex items-center space-x-3 px-5 py-2.5 rounded-2xl bg-white/70 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-red-500/40 dark:hover:border-red-500/40 shadow-xs hover:shadow-glow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-default shrink-0"
              >
                <div className="w-8 h-8 rounded-xl bg-zinc-100 dark:bg-zinc-850 flex items-center justify-center text-zinc-450 dark:text-zinc-400 group-hover:text-red-500 transition-colors">
                  <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-sm tracking-tight text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                    {partner.name}
                  </span>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
                    {partner.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
