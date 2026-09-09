import React from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  category?: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  category,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden transition-colors bg-white dark:bg-zinc-900/60 shadow-sm">
      <button
        type="button"
        id={`faq-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 hover:bg-zinc-50 dark:hover:bg-zinc-850/50 transition-colors"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          {category && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 bg-red-500/10 px-2 py-0.5 rounded w-fit">
              {category}
            </span>
          )}
          <span className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white">
            {question}
          </span>
        </div>
        <div
          className={`w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 transition-transform duration-300 shrink-0 ${
            isOpen ? 'rotate-180 text-red-500 bg-red-500/10' : ''
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/60">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};
