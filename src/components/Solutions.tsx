import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Terminal, 
  ShieldAlert, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Quote
} from 'lucide-react';

export const Solutions: React.FC<{ onOpenDemoModal: () => void }> = ({ onOpenDemoModal }) => {
  const [activeRole, setActiveRole] = useState<'pm' | 'eng' | 'ops' | 'exec'>('eng');

  const solutions = {
    eng: {
      role: 'Engineering Leads',
      icon: Terminal,
      headline: 'Eliminate triage toil, flaky reviews, and sprint surprises',
      description: 'Nexora acts as your 24/7 technical staff engineer — correlating stack traces with code diffs, synthesizing test suites, and alerting on high-risk pull requests before they merge.',
      metrics: [
        { label: 'Review Turnaround', val: '4.2x Faster' },
        { label: 'Unplanned Bugs', val: '-58% In Production' },
      ],
      points: [
        'Automated PR risk scoring based on file churn and test coverage',
        'Instant root-cause diagnosis from Sentry / Datadog crash reports',
        'Deterministic regression test generation matching your TypeScript patterns',
        'Automatic cross-repo dependency and breaking change alerts',
      ],
      quote: {
        text: "Nexora cut our team's PR review latency from 22 hours to under 30 minutes. It's like adding three senior engineers to our platform team.",
        author: 'Alex Rivera',
        title: 'VP of Engineering at Hyperion AI',
      },
    },
    pm: {
      role: 'Product Managers',
      icon: Layers,
      headline: 'Turn messy customer inputs into polished specs in minutes',
      description: 'Generate customer-backed PRDs, automatically decompose epics into estimated user stories, and keep stakeholders continuously aligned without endless status meetings.',
      metrics: [
        { label: 'Spec Drafting Time', val: '75% Reduction' },
        { label: 'Sprint Alignment', val: '99% Consensus' },
      ],
      points: [
        'One-click PRD generation from Slack discussions and user feedback calls',
        'Intelligent story point estimation based on your team historical velocity',
        'Automatic changelog generation and stakeholder email briefings',
        'Real-time scope creep warning when acceptance criteria expand',
      ],
      quote: {
        text: "I used to spend 15 hours a week writing specs and chasing updates. Now Nexora drafts the foundational docs so I can focus on customer interviews.",
        author: 'Elena Rostova',
        title: 'Head of Product at LinearFlow',
      },
    },
    ops: {
      role: 'Operations & RevOps',
      icon: ShieldAlert,
      headline: 'Orchestrate seamless cross-functional handoffs at scale',
      description: 'Bridge the communication gap between Sales, Support, and Product Engineering with automated bi-directional synchronization and compliance logging.',
      metrics: [
        { label: 'Ticket Routing Speed', val: 'Sub-2 Seconds' },
        { label: 'Audit Readiness', val: '100% Automated' },
      ],
      points: [
        'Automated Zendesk / Intercom escalation to Linear with AI summary',
        'Continuous SOC-2 and ISO 27001 audit evidence collection',
        'SLA breach prediction before customer impact occurs',
        'Self-healing integrations with automated retry logic',
      ],
      quote: {
        text: "The bridge between our support queue and engineering backlog was pure chaos before Nexora. Now handoffs are instantaneous and transparent.",
        author: 'Marcus Vance',
        title: 'Director of Business Ops at CloudScale',
      },
    },
    exec: {
      role: 'Founders & Executives',
      icon: Briefcase,
      headline: 'Unfiltered, real-time visibility into engineering throughput',
      description: 'Replace fragmented status reports with a single source of truth. See exactly how strategic initiatives are progressing, spot systemic blockers early, and allocate capital with confidence.',
      metrics: [
        { label: 'Roadmap Predictability', val: '94% On-Time' },
        { label: 'Reporting Overhead', val: 'Zero Hours' },
      ],
      points: [
        'Executive roll-up dashboards connecting roadmap milestones to revenue',
        'Objective engineering velocity metrics free from subjective bias',
        'Predictive delivery dates based on monte carlo sprint simulations',
        'Capital expenditure and headcount allocation modeling',
      ],
      quote: {
        text: "Nexora gives me the ground truth of our product development velocity without having to interrupt my engineering leaders during crunch sprints.",
        author: 'Siddharth Sankar',
        title: 'Managing Director & Founder',
      },
    },
  };

  const activeData = solutions[activeRole];
  const RoleIcon = activeData.icon;

  return (
    <section id="solutions" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold mb-4 border border-red-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored For Every Role</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-4">
            Built for modern, high-velocity teams
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Whether you write code, craft product strategy, or run business operations, Nexora adapts to your exact workflow.
          </p>
        </div>

        {/* Role Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['eng', 'pm', 'ops', 'exec'] as const).map((key) => {
            const item = solutions[key];
            const Icon = item.icon;
            const isSelected = activeRole === key;
            return (
              <button
                key={key}
                onClick={() => setActiveRole(key)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 border ${
                  isSelected
                    ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-600/20'
                    : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.role}</span>
              </button>
            );
          })}
        </div>

        {/* Active Role Content Card */}
        <div className="rounded-3xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Details & Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-zinc-200/60 dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <RoleIcon className="w-3.5 h-3.5 text-red-500" />
                <span>NEXORA For {activeData.role}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white leading-tight">
                {activeData.headline}
              </h3>

              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {activeData.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeData.points.map((point) => (
                  <div key={point} className="flex items-start space-x-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-red-500/25 transition-all"
                >
                  <span>See It in Action for {activeData.role}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Key Metrics & Testimonial Quote */}
            <div className="lg:col-span-5 space-y-6">
              {/* Metric Cards */}
              <div className="grid grid-cols-2 gap-4">
                {activeData.metrics.map((m) => (
                  <div key={m.label} className="p-5 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 shadow-sm">
                    <div className="flex items-center text-xs text-emerald-500 font-semibold mb-1">
                      <TrendingUp className="w-3.5 h-3.5 mr-1" /> Verified Outcome
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white mb-1">
                      {m.val}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 shadow-sm relative">
                <Quote className="w-8 h-8 text-red-500/20 absolute top-4 right-4" />
                <p className="text-sm italic text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                  "{activeData.quote.text}"
                </p>
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">
                    {activeData.quote.author}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    {activeData.quote.title}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
