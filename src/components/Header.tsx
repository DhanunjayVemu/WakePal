import React, { useState, useEffect } from 'react';
import { Menu, X, AlarmCheck } from 'lucide-react';
import Button from './ui/Button';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white dark:bg-dark-bg shadow-md dark:shadow-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AlarmCheck className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-2xl font-bold text-blue-500">WakePal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">
              How It Works
            </a>
            <a href="#benefits" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">
              Benefits
            </a>
            <ThemeToggle />
            <Button onClick={() => console.log('Join waitlist')} className="ml-4">
              Join Waitlist
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="p-2 focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden">
            <nav className="bg-white dark:bg-dark-card bg-opacity-95 dark:bg-opacity-95 backdrop-blur-sm shadow-lg border-t border-gray-100 dark:border-gray-800 animate-fadeIn">
              <div className="container mx-auto px-6 py-4 space-y-4">
                <a 
                  href="#how-it-works" 
                  className="block text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
                <a 
                  href="#benefits" 
                  className="block text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Benefits
                </a>
                <div className="pt-2">
                  <Button 
                    onClick={() => {
                      console.log('Join waitlist');
                      setIsMenuOpen(false);
                    }} 
                    className="w-full justify-center py-3"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;