import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import HowItWorksSection from './components/HowItWorksSection';
import WhyItWorksSection from './components/WhyItWorksSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans bg-white dark:bg-dark-bg dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <HeroSection />
          <ProblemSection />
          <HowItWorksSection />
          <WhyItWorksSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App