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
    <section className="py-12 border-y border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-8">
          Trusted by engineering and product leaders at forward-thinking companies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-center">
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.name}
                className="group flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-zinc-800/50 hover:shadow-sm"
              >
                <div className="flex items-center space-x-2 text-zinc-400 dark:text-zinc-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-bold text-base tracking-tight text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                    {partner.name}
                  </span>
                </div>
                <span className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {partner.metric}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
