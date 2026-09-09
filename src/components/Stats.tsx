import React, { useEffect, useState, useRef } from 'react';

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
      description: 'Zero hallucination rate with verified deterministic code execution.',
    },
    {
      numeric: 10,
      decimals: 0,
      suffix: 'x',
      label: 'Faster Issue-to-PR Time',
      description: 'From customer report to vetted pull request in under 5 minutes.',
    },
    {
      numeric: 14,
      decimals: 0,
      suffix: ' hrs',
      label: 'Weekly Hours Reclaimed',
      description: 'Average time saved per engineer on administrative syncs and manual triaging.',
    },
    {
      numeric: 50,
      decimals: 0,
      suffix: 'k+',
      label: 'Active Workspaces',
      description: 'Global engineering and product organizations scaling with Nexora.',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900/90 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white mb-3">
              Proven impact on enterprise development velocity
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Measurable ROI validated across thousands of production sprints and cross-functional teams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200 dark:divide-zinc-800">
            {stats.map((stat, i) => (
              <div 
                key={stat.label} 
                className={`flex flex-col items-center text-center ${i !== 0 ? 'pt-8 sm:pt-0 sm:pl-8' : ''}`}
              >
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-500 to-brand-400 mb-2">
                  <StatCounter 
                    end={stat.numeric} 
                    decimals={stat.decimals} 
                    suffix={stat.suffix} 
                  />
                </div>
                <div className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
