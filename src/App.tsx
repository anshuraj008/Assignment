import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { ProductPreview } from './components/ProductPreview';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Stats } from './components/Stats';
import { Solutions } from './components/Solutions';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => setIsDemoModalOpen(true);
  const handleCloseDemoModal = () => setIsDemoModalOpen(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-200 selection:bg-violet-500/30 selection:text-violet-300">
        <Navbar onOpenDemoModal={handleOpenDemoModal} />
        
        <main id="main-content">
          <Hero onOpenDemoModal={handleOpenDemoModal} />
          <TrustedBy />
          <ProductPreview />
          <Features />
          <HowItWorks />
          <Stats />
          <Solutions onOpenDemoModal={handleOpenDemoModal} />
          <Testimonials />
          <Pricing onOpenDemoModal={handleOpenDemoModal} />
          <FAQ />
          <FinalCTA onOpenDemoModal={handleOpenDemoModal} />
        </main>

        <Footer />

        {/* Interactive Demo Modal */}
        <DemoModal
          isOpen={isDemoModalOpen}
          onClose={handleCloseDemoModal}
        />

        {/* Floating Back to Top Button */}
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
