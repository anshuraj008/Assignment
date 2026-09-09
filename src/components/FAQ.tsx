import React, { useState } from 'react';
import { Sparkles, HelpCircle } from 'lucide-react';
import { AccordionItem } from './AccordionItem';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const faqs = [
    {
      id: '1',
      category: 'Security & Privacy',
      question: 'Will our proprietary codebase or team chats train public AI models?',
      answer:
        'Never. We hold a strict Zero-Retention Enterprise policy. Your code, docs, tickets, and Slack messages are processed in isolated, dedicated enclaves and are never used to train public models. Furthermore, all data is encrypted in transit (TLS 1.3) and at rest (AES-256) with customer-managed encryption key (CMEK) support.',
    },
    {
      id: '2',
      category: 'Setup & Integrations',
      question: 'How difficult is it to integrate Nexora with our existing stack?',
      answer:
        'It takes less than 5 minutes. Nexora features native OAuth integrations with GitHub, GitLab, Jira, Linear, Slack, Notion, Figma, and Google Drive. There are no agents to install on local developer machines or complex SDK refactors required.',
    },
    {
      id: '3',
      category: 'Free Trial',
      question: 'How does the 14-day free trial work?',
      answer:
        'You get immediate, unrestricted access to the complete Pro feature set for 14 days with up to 50 team members. No credit card is required to sign up. If you decide not to upgrade, your workspace seamlessly transitions to our read-only archive without data loss.',
    },
    {
      id: '4',
      category: 'AI Reliability',
      question: 'How do you prevent hallucinations in code reviews and PR drafting?',
      answer:
        'Nexora utilizes deterministic AST (Abstract Syntax Tree) verification combined with sandboxed test execution. Before any pull request or code change is suggested to an engineer, Nexora executes your project unit test suite in an ephemeral container. If tests fail, the AI agent revises the implementation until all assertions pass.',
    },
    {
      id: '5',
      category: 'Billing & Plans',
      question: 'Can we switch between monthly and annual billing later?',
      answer:
        'Yes. You can switch between monthly and annual plans at any point from your billing dashboard. When upgrading to annual billing, your remaining monthly balance is credited proportionally toward the discounted annual rate.',
    },
    {
      id: '6',
      category: 'Self-Hosted & Enterprise',
      question: 'Do you offer an on-premise or sovereign cloud deployment option?',
      answer:
        'Yes. For regulated financial, healthcare, or defense organizations, Nexora Enterprise can be deployed inside your own AWS/GCP VPC or air-gapped private Kubernetes cluster with local LLM inference engines.',
    },
  ];

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold mb-4 border border-red-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Everything you need to know about the product, autonomous agents, security, and pricing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              id={faq.id}
              category={faq.category}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Have a question not listed here?</h4>
              <p className="text-xs text-zinc-500">Our engineering support team is available 24/7 to help.</p>
            </div>
          </div>
          <a
            href="mailto:support@nexora.ai"
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
};
