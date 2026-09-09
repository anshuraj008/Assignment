import React from 'react';
import { 
  Bot, 
  Network, 
  Workflow, 
  Radar, 
  Mic2, 
  ShieldCheck, 
  Sparkles,
  Lock,
  GitBranch
} from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold mb-4 border border-red-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineered for Velocity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-4">
            Autonomous intelligence at every stage of work
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Replace fragmented SaaS tools and repetitive coordination meetings with unified AI agents that execute work alongside your team.
          </p>
        </div>

        {/* Asymmetric Bento Grid (Minimum 6 Features) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Large Bento (Col-span 2 on lg) */}
          <div className="lg:col-span-2 group relative p-7 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 dark:hover:border-red-500/50 shadow-sm hover:shadow-glow-sm transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity">
              <Bot className="w-48 h-48 text-red-500" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center border border-red-500/20">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                  Autonomous Core
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                Autonomous Task Orchestration & Sprint Balancing
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mb-6">
                Nexora analyzes past velocity, story point weights, and team member cognitive capacity to automatically assign tickets, re-balance sprints, and adjust deadlines before scope creep occurs.
              </p>
            </div>

            {/* Micro-UI Preview inside Card */}
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 shadow-sm">
              <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">Live AI Allocation Engine</span>
                <span className="text-emerald-500 font-bold">● Balanced across 8 engineers</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800">
                  <div className="font-bold text-zinc-900 dark:text-white">Frontend</div>
                  <div className="text-[11px] text-zinc-400">85% capacity (Optimal)</div>
                </div>
                <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800">
                  <div className="font-bold text-zinc-900 dark:text-white">Backend</div>
                  <div className="text-[11px] text-zinc-400">91% capacity (Optimal)</div>
                </div>
                <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800">
                  <div className="font-bold text-zinc-900 dark:text-white">QA Automation</div>
                  <div className="text-[11px] text-emerald-500 font-semibold">100% Autopilot</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Knowledge Graph */}
          <div className="group relative p-7 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 dark:hover:border-red-500/50 shadow-sm hover:shadow-glow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-500/20">
                  <Network className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                  Unified Search
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mb-2 group-hover:text-rose-500 transition-colors">
                Contextual Knowledge Graph
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                Never ask "where is that doc?" again. Nexora indexes Google Drive, Notion, Slack, and GitHub into an instant semantic graph with verified citations.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-xs">
              <div className="flex items-center space-x-2 text-zinc-400 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                <span className="font-mono text-[11px]">Instant Answer (42ms)</span>
              </div>
              <p className="font-medium text-zinc-800 dark:text-zinc-200 text-xs">
                "API rate limits are 1,000 req/min, defined in PR #214 by Sarah."
              </p>
            </div>
          </div>

          {/* Card 3: Cross-Platform Workflows */}
          <div className="group relative p-7 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 dark:hover:border-red-500/50 shadow-sm hover:shadow-glow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-700/10 dark:bg-red-700/20 text-red-600 dark:text-red-400 flex items-center justify-center border border-red-700/20">
                  <Workflow className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-700/10 text-red-600 dark:text-red-400 border border-red-700/20">
                  No-Code / Low-Code
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mb-2 group-hover:text-red-500 transition-colors">
                Cross-Platform Automations
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                Chain triggers and AI evaluations across 50+ integrations. Automatically translate customer issues into tickets, PRs, and status notifications.
              </p>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-xs font-semibold">
              <span className="flex items-center text-zinc-700 dark:text-zinc-300">
                <GitBranch className="w-3.5 h-3.5 mr-1.5 text-red-400" />
                50+ Connectors
              </span>
              <span className="text-emerald-500">Zero Maintenance</span>
            </div>
          </div>

          {/* Card 4: Large Bento (Col-span 2 on lg) */}
          <div className="lg:col-span-2 group relative p-7 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 dark:hover:border-red-500/50 shadow-sm hover:shadow-glow-sm transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 flex items-center justify-center border border-pink-500/20">
                  <Radar className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                  Early Warning
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
                Predictive Blocker & Delivery Risk Radar
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mb-6">
                Nexora identifies subtle delivery risks up to 5 days in advance — such as delayed review cycles, external API dependencies, or under-specified design specs — giving leads time to intervene proactively.
              </p>
            </div>

            {/* Visual Risk Radar Mini-Widget */}
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 shadow-sm">
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Active Risk Projections</span>
                <span className="text-xs text-zinc-400">Next Release: Friday</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-600 dark:text-emerald-400">
                  <span>Backend Auth Refactor</span>
                  <span className="font-bold">LOW RISK (On Schedule)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-600 dark:text-amber-400">
                  <span>Stripe Webhook Migration</span>
                  <span className="font-bold">MODERATE RISK (Awaiting Sandbox Key)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Meeting Synthesis */}
          <div className="group relative p-7 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 dark:hover:border-red-500/50 shadow-sm hover:shadow-glow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/20">
                  <Mic2 className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  Voice & Video AI
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mb-2 group-hover:text-amber-500 transition-colors">
                Intelligent Meeting & Standup Synthesis
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                Turn 45-minute syncs into concise decision trees, assigned tickets, and Slack updates. Cut meetings by up to 60%.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-xs flex items-center justify-between">
              <span className="text-zinc-600 dark:text-zinc-400">Average Sync Time Saved</span>
              <span className="font-bold text-amber-500">6.5 hrs / wk</span>
            </div>
          </div>

          {/* Card 6: Enterprise Security */}
          <div className="group relative p-7 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 dark:hover:border-red-500/50 shadow-sm hover:shadow-glow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Enterprise Grade
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">
                Zero-Retention Security & Sovereign Privacy
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                Your data is never used to train public models. Backed by SOC-2 Type II certification, SAML SSO, and encrypted at rest with customer-managed keys.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-xs flex items-center justify-between">
              <span className="flex items-center text-zinc-600 dark:text-zinc-400">
                <Lock className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                AES-256 / TLS 1.3
              </span>
              <span className="font-bold text-emerald-500">SOC-2 Type II</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
