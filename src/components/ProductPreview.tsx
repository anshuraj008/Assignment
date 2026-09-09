import React, { useState } from 'react';
import { 
  Kanban, 
  Workflow, 
  BarChart3, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Play, 
  AlertCircle,
  GitPullRequest,
  TrendingUp,
  Cpu
} from 'lucide-react';

type TabType = 'plan' | 'automate' | 'analyze';

export const ProductPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('plan');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState<number>(0);
  const [simulationComplete, setSimulationComplete] = useState(false);
  const [aiOptimized, setAiOptimized] = useState(false);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimulationComplete(false);
    setSimStep(1);
    setTimeout(() => {
      setSimStep(2);
    }, 400);
    setTimeout(() => {
      setSimStep(3);
    }, 850);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulationComplete(true);
    }, 1300);
  };

  return (
    <section id="product" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-4 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Platform Preview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-4">
            Everything your team needs to ship at lightspeed
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Experience how NEXORA unites project coordination, autonomous workflow execution, and predictive engineering analytics into one cohesive interface.
          </p>
        </div>

        {/* Interactive Tab Controls */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-inner">
            <button
              onClick={() => setActiveTab('plan')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'plan'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Kanban className="w-4 h-4 text-red-500" />
              <span>1. Plan</span>
            </button>

            <button
              onClick={() => setActiveTab('automate')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'automate'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Workflow className="w-4 h-4 text-rose-500" />
              <span>2. Automate</span>
            </button>

            <button
              onClick={() => setActiveTab('analyze')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'analyze'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-brand-400" />
              <span>3. Analyze</span>
            </button>
          </div>
        </div>

        {/* Believable SaaS Product Window */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl shadow-red-950/20 overflow-hidden transition-all duration-300">
          
          {/* macOS Style Window Titlebar */}
          <div className="px-4 py-3.5 bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
              <span className="ml-3 font-mono text-[11px] text-zinc-400 dark:text-zinc-500 hidden sm:inline">
                nexora.app / workspaces / sprint-24-release
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-medium border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>AI Engine: Active</span>
              </span>
            </div>
          </div>

          {/* Dashboard Canvas Area */}
          <div className="p-6 lg:p-8 min-h-[440px]">
            
            {/* TAB 1: PLAN */}
            {activeTab === 'plan' && (
              <div className="animate-fade-in space-y-6">
                {/* Sprint Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800/80">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center">
                      Sprint 24: Core Intelligence Layer
                      <span className="ml-2.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                        Day 6 of 10
                      </span>
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      18 of 22 user stories completed • Forecast: Ahead of schedule
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setAiOptimized(!aiOptimized)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-500/10 hover:bg-brand-500/20 text-brand-600 dark:text-brand-400 border border-brand-500/30 flex items-center space-x-1.5 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{aiOptimized ? '✓ Sprint Auto-Optimized' : 'Auto-Balance Sprint'}</span>
                    </button>
                    <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      Sprint Health: <span className="text-emerald-500 font-bold">{aiOptimized ? '98%' : '94%'}</span>
                    </div>
                  </div>
                </div>

                {/* 3 Kanban Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Column 1: Backlog / AI Triage */}
                  <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80">
                    <div className="flex items-center justify-between text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
                      <span>Triage & Scope (2)</span>
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/60 shadow-sm hover:border-brand-500/40 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded">
                            Medium
                          </span>
                          <span className="text-xs text-zinc-400 font-mono">NEX-104</span>
                        </div>
                        <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                          Semantic Cache Layer for LLM Gateway
                        </h4>
                        <div className="flex items-center justify-between text-[11px] text-zinc-500 mt-2">
                          <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> 3 pts</span>
                          <span className="font-semibold text-brand-400">AI Assigned</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/60 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded">
                            AI Story
                          </span>
                          <span className="text-xs text-zinc-400 font-mono">NEX-108</span>
                        </div>
                        <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                          Webhook Resilience & Dead-Letter Queue
                        </h4>
                        <div className="flex items-center justify-between text-[11px] text-zinc-500 mt-2">
                          <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> 2 pts</span>
                          <span>Auto-PRD Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: In Progress */}
                  <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80">
                    <div className="flex items-center justify-between text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
                      <span>In Progress (2)</span>
                      <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    </div>
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-800/90 border border-red-500/30 dark:border-red-500/40 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-rose-500" />
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded">
                            High Priority
                          </span>
                          <span className="text-xs text-zinc-400 font-mono">NEX-98</span>
                        </div>
                        <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                          Cross-Tool Knowledge Sync (Notion + Slack)
                        </h4>
                        <div className="flex items-center justify-between text-[11px] text-zinc-500 mt-2">
                          <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> 8 pts</span>
                          <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 text-[10px] font-bold">
                            Reviewing PR
                          </span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/60 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded">
                            Frontend
                          </span>
                          <span className="text-xs text-zinc-400 font-mono">NEX-101</span>
                        </div>
                        <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                          Responsive Dark/Light Theme Engine
                        </h4>
                        <div className="flex items-center justify-between text-[11px] text-zinc-500 mt-2">
                          <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> 5 pts</span>
                          <span className="text-emerald-500 font-medium">95% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Completed by AI Agents */}
                  <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80">
                    <div className="flex items-center justify-between text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
                      <span>Automated & Ready (2)</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-800/90 border border-emerald-500/30 dark:border-emerald-500/30 shadow-sm opacity-95">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded flex items-center">
                            <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
                          </span>
                          <span className="text-xs text-zinc-400 font-mono">NEX-92</span>
                        </div>
                        <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-1 line-through text-zinc-400">
                          Automated Regression Test Suite
                        </h4>
                        <div className="text-[11px] text-zinc-500 mt-2 flex justify-between">
                          <span>Auto-deployed to staging</span>
                          <span className="text-emerald-400 font-mono font-bold">+13 pts</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-800/90 border border-emerald-500/30 dark:border-emerald-500/30 shadow-sm opacity-95">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded flex items-center">
                            <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
                          </span>
                          <span className="text-xs text-zinc-400 font-mono">NEX-89</span>
                        </div>
                        <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-1 line-through text-zinc-400">
                          SOC-2 Audit Log Generation
                        </h4>
                        <div className="text-[11px] text-zinc-500 mt-2 flex justify-between">
                          <span>Zero human intervention</span>
                          <span className="text-emerald-400 font-mono font-bold">+8 pts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: AUTOMATE */}
            {activeTab === 'automate' && (
              <div className="animate-fade-in space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800/80">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center">
                      Live Workflow: Intelligent Incident Triage & Auto-PR
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      Triggered 142 times this week • Average resolution time: 4.8 minutes
                    </p>
                  </div>

                  <button
                    onClick={runSimulation}
                    disabled={isSimulating}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 flex items-center space-x-1.5 shadow-md shadow-red-500/20 disabled:opacity-50 transition-all"
                  >
                    <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                    <span>{isSimulating ? 'Executing Workflow...' : 'Simulate Workflow Run'}</span>
                  </button>
                </div>

                {/* Simulation Banner */}
                {simulationComplete && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
                    <span className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Simulation executed successfully in 312ms. Draft PR #402 opened with 100% test pass rate.
                    </span>
                    <span className="font-mono text-[10px]">STATUS: OK</span>
                  </div>
                )}

                {/* Workflow Visual Nodes */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 relative py-4">
                  
                  {/* Node 1: Trigger */}
                  <div className={`flex-1 p-4 rounded-xl border transition-all duration-300 text-left relative group ${
                    simStep >= 1
                      ? 'border-red-500 ring-2 ring-red-500/30 bg-red-500/5 dark:bg-red-500/10 shadow-md'
                      : 'bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-2 py-0.5 rounded">
                        Step 1: Event Trigger
                      </span>
                      <AlertCircle className={`w-4 h-4 text-red-400 ${simStep === 1 ? 'animate-bounce' : ''}`} />
                    </div>
                    <div className="font-semibold text-xs text-zinc-900 dark:text-white">
                      Customer Report on Linear
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-1">
                      Event: Issue created with label <code className="text-red-400">#severity-p0</code>
                    </p>
                  </div>

                  <div className={`hidden md:flex items-center justify-center transition-all duration-300 ${
                    simStep >= 2 ? 'text-red-500 scale-125' : 'text-zinc-400'
                  }`}>
                    <ArrowRight className="w-5 h-5 text-red-400" />
                  </div>

                  {/* Node 2: AI Processing */}
                  <div className={`flex-1 p-4 rounded-xl border transition-all duration-300 text-left relative ${
                    simStep >= 2
                      ? 'border-rose-500 ring-2 ring-rose-500/30 bg-rose-500/5 dark:bg-rose-500/10 shadow-md'
                      : 'bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded">
                        Step 2: Nexora AI Agent
                      </span>
                      <Cpu className={`w-4 h-4 text-rose-400 ${simStep === 2 ? 'animate-spin' : ''}`} />
                    </div>
                    <div className="font-semibold text-xs text-zinc-900 dark:text-white">
                      Inspect Stack Trace & Blame
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-1">
                      Cross-references commit history & generates reproducible test fixture
                    </p>
                  </div>

                  <div className={`hidden md:flex items-center justify-center transition-all duration-300 ${
                    simStep >= 3 ? 'text-emerald-500 scale-125' : 'text-zinc-400'
                  }`}>
                    <ArrowRight className="w-5 h-5 text-rose-400" />
                  </div>

                  {/* Node 3: Multi-Tool Actions */}
                  <div className={`flex-1 p-4 rounded-xl border transition-all duration-300 text-left relative ${
                    simStep >= 3
                      ? 'border-emerald-500 ring-2 ring-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 shadow-md'
                      : 'bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                        Step 3: Dual Action
                      </span>
                      <GitPullRequest className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="font-semibold text-xs text-zinc-900 dark:text-white">
                      Open PR + Slack Sync
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-1">
                      Drafts GitHub PR & alerts on-call lead in <span className="text-zinc-400 font-mono">#eng-core</span>
                    </p>
                  </div>
                </div>

                {/* Workflow Code & Logs Preview */}
                <div className="p-3.5 rounded-xl bg-zinc-900 text-zinc-300 font-mono text-xs border border-zinc-800 overflow-x-auto">
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-1">
                    <span>LIVE ORCHESTRATION LOG</span>
                    <span className="text-emerald-400">● 100% HEALTHY</span>
                  </div>
                  <p className="text-zinc-400">
                    <span className="text-red-400">[14:32:01]</span> Incoming webhook from Linear (Ticket #NEX-104) verified.
                  </p>
                  <p className="text-zinc-400">
                    <span className="text-red-400">[14:32:02]</span> AI Engine matched defect to src/telemetry/buffer.ts:L42. Confidence: 99.2%.
                  </p>
                  <p className="text-emerald-400">
                    <span className="text-red-400">[14:32:03]</span> Unit test passed. PR #402 drafted and assigned to team lead.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: ANALYZE */}
            {activeTab === 'analyze' && (
              <div className="animate-fade-in space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800/80">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center">
                      Engineering Velocity & Team Throughput
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      Real-time telemetry gathered across 14 connected services
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-zinc-400">
                    <span className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 font-semibold text-zinc-700 dark:text-zinc-300">
                      Last 30 Days
                    </span>
                  </div>
                </div>

                {/* 4 Metric Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                    <span className="text-xs text-zinc-500 font-medium">Cycle Time</span>
                    <div className="text-2xl font-black text-zinc-950 dark:text-white mt-1">1.4 Days</div>
                    <span className="text-[11px] text-emerald-500 font-semibold flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" /> -42% reduction
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                    <span className="text-xs text-zinc-500 font-medium">Automation Rate</span>
                    <div className="text-2xl font-black text-zinc-950 dark:text-white mt-1">88.4%</div>
                    <span className="text-[11px] text-emerald-500 font-semibold flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" /> +19% vs last sprint
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                    <span className="text-xs text-zinc-500 font-medium">Weekly Hours Saved</span>
                    <div className="text-2xl font-black text-zinc-950 dark:text-white mt-1">14.2 hrs</div>
                    <span className="text-[11px] text-red-400 font-semibold flex items-center mt-1">
                      Per engineer
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                    <span className="text-xs text-zinc-500 font-medium">Sprint Predictability</span>
                    <div className="text-2xl font-black text-zinc-950 dark:text-white mt-1">98.1%</div>
                    <span className="text-[11px] text-emerald-500 font-semibold flex items-center mt-1">
                      Near-zero drift
                    </span>
                  </div>
                </div>

                {/* SVG Visual Chart: Velocity Trend Over 5 Sprints */}
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                      Story Points Delivered vs Sprint Target
                    </span>
                    <div className="flex items-center space-x-4 text-xs">
                      <span className="flex items-center text-zinc-400">
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 mr-1.5" /> Planned
                      </span>
                      <span className="flex items-center text-red-400 font-semibold">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-1.5" /> Delivered with AI
                      </span>
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="w-full h-36 flex items-end justify-between gap-3 pt-4 px-2">
                    {[
                      { sprint: 'Sprint 20', planned: 40, actual: 44 },
                      { sprint: 'Sprint 21', planned: 45, actual: 52 },
                      { sprint: 'Sprint 22', planned: 50, actual: 64 },
                      { sprint: 'Sprint 23', planned: 55, actual: 76 },
                      { sprint: 'Sprint 24', planned: 60, actual: 88 },
                    ].map((item) => (
                      <div key={item.sprint} className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full max-w-[60px] flex items-end justify-center gap-1.5 h-24">
                          <div 
                            style={{ height: `${item.planned}%` }} 
                            className="w-1/2 bg-zinc-300 dark:bg-zinc-700 rounded-t transition-all duration-500" 
                            title={`Planned: ${item.planned} pts`}
                          />
                          <div 
                            style={{ height: `${item.actual}%` }} 
                            className="w-1/2 bg-gradient-to-t from-red-600 to-rose-500 rounded-t transition-all duration-500 shadow-sm shadow-red-500/30" 
                            title={`Delivered: ${item.actual} pts`}
                          />
                        </div>
                        <span className="text-[11px] font-mono text-zinc-500">{item.sprint}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Predictive Insight Callout */}
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start space-x-3 text-xs">
                  <Sparkles className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-900 dark:text-white">
                      AI Opportunity Forecast:
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-300 ml-1.5">
                      PR review turnaround for frontend repos is currently averaging 14 hours. Enabling Nexora Auto-Reviewer will decrease cycle time by an estimated 2.3 days.
                    </span>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
