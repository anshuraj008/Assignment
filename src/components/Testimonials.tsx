import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Staff Platform Engineer',
      company: 'Veloce Cloud',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      content:
        'Nexora completely changed how our team coordinates. The AI triages hundreds of issues coming from customer reports and translates them into actionable GitHub PRs before we even start our morning standup.',
      rating: 5,
      metric: '+40% Sprint Velocity',
    },
    {
      id: '2',
      name: 'David Kalu',
      role: 'Head of Engineering',
      company: 'Hyperion AI Labs',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      content:
        'The predictive risk radar alone paid for our annual contract in month one. It flagged an unaddressed dependency that would have delayed our v3.0 release by three weeks. Truly indispensable software.',
      rating: 5,
      metric: 'Zero Release Delays',
    },
    {
      id: '3',
      name: 'Amara Patel',
      role: 'Director of Product',
      company: 'FinPulse Systems',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      content:
        'Our product managers used to dread writing exhaustive specifications and manually updating tickets. Nexora synthesizes user interview transcripts and drafts technical specs with incredible fidelity.',
      rating: 5,
      metric: '14 hrs Saved/Wk',
    },
    {
      id: '4',
      name: 'Michael Brennan',
      role: 'Chief Technology Officer',
      company: 'CloudScale Corp',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      content:
        'The security architecture was our primary concern before onboarding an AI workspace. Nexora zero-retention guarantee and SOC-2 compliance gave our infosec team total confidence.',
      rating: 5,
      metric: 'SOC-2 Type II Certified',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  const active = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-28 relative bg-zinc-50/50 dark:bg-zinc-900/30 border-y border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold mb-4 border border-violet-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Loved by High-Growth Teams</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-4">
            Don't take our word for it
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Discover why forward-thinking technology leaders rely on NEXORA to deliver exceptional software with less friction.
          </p>
        </div>

        {/* Interactive Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden">
            <Quote className="w-20 h-20 text-violet-500/10 dark:text-violet-500/15 absolute -top-2 -right-2 pointer-events-none" />

            <div className="flex items-center space-x-1 text-amber-400 mb-6">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-3 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                {active.metric}
              </span>
            </div>

            <p className="text-lg sm:text-2xl font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed mb-8">
              "{active.content}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center space-x-4">
                <img
                  src={active.avatar}
                  alt={active.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-violet-500/30"
                />
                <div>
                  <h4 className="font-bold text-base text-zinc-900 dark:text-white">
                    {active.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                    {active.role} • <span className="text-zinc-700 dark:text-zinc-300 font-medium">{active.company}</span>
                  </p>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prev}
                  className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-zinc-400 px-2">
                  {currentIndex + 1} / {testimonials.length}
                </span>
                <button
                  onClick={next}
                  className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i
                    ? 'w-8 bg-violet-600'
                    : 'w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
