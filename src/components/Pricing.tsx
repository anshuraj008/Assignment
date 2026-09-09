import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Zap, Shield } from 'lucide-react';

interface PricingProps {
  onOpenDemoModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDemoModal }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'Ideal for early-stage teams wanting to automate daily sprint overhead.',
      monthlyPrice: 29,
      annualPrice: 23,
      popular: false,
      features: [
        'Up to 10 team members',
        'Autonomous task triage (500 runs/mo)',
        'Notion, Slack & GitHub integrations',
        'Intelligent meeting summaries (10 hrs/mo)',
        'Standard 24-hr support response',
        'Community workspace templates',
      ],
      ctaText: 'Start 14-Day Free Trial',
      isCustom: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      tagline: 'For fast-growing tech teams needing predictive intelligence & autopilot execution.',
      monthlyPrice: 79,
      annualPrice: 63,
      popular: true,
      features: [
        'Up to 50 team members',
        'Unlimited autonomous task orchestration',
        'All 50+ native integrations (Jira, Linear, Figma)',
        'Predictive delivery risk & blocker radar',
        'Automated PR code analysis & test generation',
        'Custom team knowledge graph & vector index',
        'Priority 2-hour technical support',
      ],
      ctaText: 'Start 14-Day Free Trial',
      isCustom: false,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      tagline: 'For large engineering organizations demanding sovereign privacy and dedicated SLAs.',
      monthlyPrice: 199,
      annualPrice: 159,
      popular: false,
      features: [
        'Unlimited seats & workspaces',
        'Custom fine-tuned LLM deployment',
        'Zero-retention data privacy guarantee',
        'SAML SSO & SCIM directory provisioning',
        'Custom SOC-2 & HIPAA compliance logs',
        'Dedicated Solutions Architect & 99.99% SLA',
        'On-premise / VPC air-gapped hosting option',
      ],
      ctaText: 'Contact Enterprise Sales',
      isCustom: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold mb-4 border border-violet-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent, Scalable Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-4">
            Simple plans for teams of every size
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Start with our 14-day free trial. No credit card required. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Monthly vs Annual Toggle with discount badge */}
        <div className="flex items-center justify-center space-x-3 mb-16">
          <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-zinc-900 dark:text-white' : 'text-zinc-500'}`}>
            Billed Monthly
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={billingCycle === 'annual'}
            onClick={() => setBillingCycle(billingCycle === 'annual' ? 'monthly' : 'annual')}
            className={`relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 ${
              billingCycle === 'annual' ? 'bg-violet-600' : 'bg-zinc-300 dark:bg-zinc-700'
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition duration-200 ease-in-out ${
                billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>

          <div className="flex items-center space-x-2">
            <span className={`text-sm font-semibold ${billingCycle === 'annual' ? 'text-zinc-900 dark:text-white' : 'text-zinc-500'}`}>
              Billed Annually
            </span>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  plan.popular
                    ? 'bg-zinc-900 text-white border-2 border-violet-500 shadow-xl shadow-violet-500/20 lg:-translate-y-2'
                    : 'bg-white dark:bg-zinc-900/60 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/30 flex items-center space-x-1">
                    <Zap className="w-3.5 h-3.5 fill-white" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    {plan.popular && (
                      <span className="text-xs font-semibold text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-md border border-violet-500/20">
                        Recommended
                      </span>
                    )}
                  </div>
                  
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 min-h-[32px] mb-6">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                      ${price}
                    </span>
                    <span className="text-sm text-zinc-500 ml-2">
                      / seat / month
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={onOpenDemoModal}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-all duration-200 mb-8 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/30 hover:-translate-y-0.5'
                        : 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 hover:-translate-y-0.5'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Feature List */}
                  <div className="space-y-3.5 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                      Included features:
                    </div>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3 text-sm">
                        <div className="w-4 h-4 rounded-full bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center">
                    <Shield className="w-3.5 h-3.5 mr-1 text-emerald-500" />
                    14-day free trial
                  </span>
                  <span>No card required</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
