import React, { useEffect, useState, useRef } from 'react';
import { ShieldCheck, Zap, Clock, Users, Sparkles, TrendingUp } from 'lucide-react';

interface StatCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ 
  end, 
  duration = 2000, 
  decimals = 0, 
  suffix = '', 
  prefix = '' 
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Ease out cubic function
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOutCubic * end;
            
            setCount(currentVal);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={counterRef} className="font-mono font-black tracking-tight">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  const stats = [
    {
      numeric: 99.4,
      decimals: 1,
      suffix: '%',
      label: 'Automation Precision',
      description: 'Deterministic rule validation with zero hallucination in production environments.',
      tag: 'Zero-Hallucination',
      icon: ShieldCheck,
    },
    {
      numeric: 10,
      decimals: 0,
      suffix: 'x',
      label: 'Issue-to-PR Velocity',
      description: 'From raw customer issue to reviewed, tested pull request in under 5 minutes.',
      tag: 'Under 5 Minutes',
      icon: Zap,
    },
    {
      numeric: 14,
      decimals: 0,
      suffix: ' hrs',
      label: 'Weekly Time Reclaimed',
      description: 'Eliminates repetitive status meetings, manual Jira triaging, and PR chase-downs.',
      tag: 'Per Engineer / Wk',
      icon: Clock,
    },
    {
      numeric: 50,
      decimals: 0,
      suffix: 'k+',
      label: 'Active Workspaces',
      description: 'Trusted by fast-moving high-growth engineering teams across 68 countries.',
      tag: 'Global Adoption',
      icon: Users,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-semibold mb-3 border border-red-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MEASURABLE VELOCITY IMPACT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 dark:text-white mb-3 tracking-tight">
            Validated ROI across thousands of production sprints
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Real performance benchmarks measured across engineering, product, and DevOps organizations.
          </p>
        </div>

        {/* 4 Elevated Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label} 
                className="card-interactive relative rounded-3xl p-6 sm:p-7 bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 dark:hover:border-red-500/40 shadow-xl shadow-zinc-950/5 dark:shadow-black/30 backdrop-blur-md overflow-hidden flex flex-col justify-between group"
              >
                {/* Top Subtle Red Accent Line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent group-hover:via-red-500 transition-all duration-300" />

                {/* Card Header: Icon & Micro Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 dark:bg-red-500/15 border border-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center transition-transform group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    <TrendingUp className="w-3 h-3 mr-1 text-red-500" />
                    {stat.tag}
                  </span>
                </div>

                {/* Number Counter */}
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-red-400 mb-2">
                  <StatCounter 
                    end={stat.numeric} 
                    decimals={stat.decimals} 
                    suffix={stat.suffix} 
                  />
                </div>

                {/* Label & Description */}
                <div>
                  <div className="text-base font-bold text-zinc-950 dark:text-zinc-100 mb-1.5">
                    {stat.label}
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
