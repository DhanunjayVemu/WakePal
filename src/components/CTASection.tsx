import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit to a backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Wake Up Right?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join WakePal today and never oversleep again. Be among the first to experience the future of campus wake-ups.
          </p>
          
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Join the Waitlist <Sparkles className="inline h-5 w-5 text-orange-500" />
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="student@university.edu"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-3 text-lg"
                disabled={submitted}
              >
                {submitted ? (
                  <span className="flex items-center justify-center">
                    <Check className="mr-2 h-5 w-5" />
                    You're on the list!
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                )}
              </Button>
            </form>
            
            <div className="mt-6 text-gray-600 text-sm">
              <p>
                We'll notify you as soon as WakePal launches at your campus.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-500">50+</span>
                  </div>
                  <span className="ml-3 text-gray-700">Students already on the waitlist</span>
                </div>
                <span className="text-orange-500 font-medium text-sm">
                  Early access coming soon!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;