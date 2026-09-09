import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Calendar, Loader2 } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companySize, setCompanySize] = useState('20-100');
  const [interest, setInterest] = useState('sprint-orchestration');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid work email address.');
      return;
    }

    setError('');
    setIsLoading(true);

    // Simulate realistic API request
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setError('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={handleResetAndClose}
      />

      {/* Modal Card with pop-in spring animation */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl z-10 animate-modal-pop text-zinc-900 dark:text-white">
        
        {/* Top subtle highlight line */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/70 to-transparent rounded-t-3xl" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 id="modal-title" className="text-2xl font-black">
              Demo Confirmed!
            </h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
              Thanks <span className="font-semibold text-zinc-900 dark:text-white">{name}</span>. We've sent an interactive calendar invite and workspace preview credentials to <span className="font-semibold text-zinc-900 dark:text-white">{email}</span>.
            </p>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-500 transition-colors shadow-md shadow-red-500/20"
              >
                Return to NEXORA Workspace
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-semibold mb-3 border border-red-500/20">
                <Calendar className="w-3.5 h-3.5" />
                <span>15-Minute Live Interactive Demo</span>
              </div>
              <h3 id="modal-title" className="text-2xl font-black tracking-tight">
                Experience Nexora in Action
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                See how autonomous work intelligence eliminates 14+ hours of coordination toil for your team every week.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Henderson"
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-zinc-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-zinc-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Team Size
                  </label>
                  <select
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-zinc-900 dark:text-white"
                  >
                    <option value="1-15">1 - 15 people</option>
                    <option value="20-100">20 - 100 people</option>
                    <option value="100-500">100 - 500 people</option>
                    <option value="500+">500+ Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Primary Focus
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-zinc-900 dark:text-white"
                  >
                    <option value="sprint-orchestration">Sprint Balancing</option>
                    <option value="knowledge-graph">Knowledge Search</option>
                    <option value="triage-automation">Issue-to-PR Triage</option>
                    <option value="risk-radar">Risk Forecasting</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-shimmer w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-500/25 flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Scheduling Demo...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm 15-Minute Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-zinc-400">
                🔒 Enterprise NDA protected. No credit card required.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
