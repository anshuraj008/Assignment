import React from 'react';
import { Sparkles, Plug, BrainCircuit, Rocket, LineChart } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Plug,
      title: 'Connect Your Stack in 60 Seconds',
      description: 'One-click native integrations with Slack, GitHub, Jira, Linear, Figma, and Google Workspace with zero code required.',
      highlight: '50+ Native Connectors',
    },
    {
      number: '02',
      icon: BrainCircuit,
      title: 'Nexora Indexes Team Context',
      description: 'The AI builds a private, sovereign semantic vector graph of past PRs, sprint velocity, technical docs, and ongoing discussions.',
      highlight: 'Zero Data Retention',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Autonomous Agents Execute Work',
      description: 'AI agents automatically triage issues, draft pull requests, balance sprint allocations, and sync cross-team blockers.',
      highlight: 'Sub-second Triggers',
    },
    {
      number: '04',
      icon: LineChart,
      title: 'Continuous Velocity Optimization',
      description: 'Real-time telemetry and predictive forecasting alert engineering leaders before bottlenecks jeopardize sprint deadlines.',
      highlight: 'Predictive Radar',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative bg-zinc-50/60 dark:bg-zinc-900/40 border-y border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold mb-4 border border-red-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Effortless Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-4">
            How Nexora transforms your workflow
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            From setup to automated sprint execution in minutes — without changing how your engineers and PMs love to work.
          </p>
        </div>

        {/* 4-Step Grid with progressive connector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle connecting beam between steps on desktop */}
          <div className="hidden lg:block absolute top-[48px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-red-500/20 via-rose-500/40 to-red-500/20 pointer-events-none" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-red-500/40 dark:hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between z-10"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-black text-zinc-300 dark:text-zinc-700 group-hover:text-red-500 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 group-hover:bg-red-500/10 group-hover:text-red-600 dark:group-hover:text-red-400 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <span className="inline-flex items-center text-xs font-semibold text-red-600 dark:text-red-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
                    {step.highlight}
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
