import React from 'react';
import { AlarmClock, Sparkles } from 'lucide-react';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              WakePal – Never miss a morning again
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Your reliable, real-human wake-up buddy – built for hostel life.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => console.log('Join waitlist')} 
                className="text-lg px-8 py-4"
              >
                Join the Waitlist <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-4"
              >
                How It Works
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative bg-white rounded-xl shadow-xl p-6 md:ml-12 transform transition-transform duration-500 hover:scale-105">
              <div className="grid grid-cols-2 gap-4">
                {/* Student struggling with alarm */}
                <div className="rounded-lg bg-gray-100 p-4 relative">
                  <AlarmClock className="h-8 w-8 text-red-500 absolute -top-4 -right-4 bg-white rounded-full p-1 shadow-md" />
                  <img 
                    src="https://images.pexels.com/photos/3807729/pexels-photo-3807729.jpeg" 
                    alt="Student struggling with alarm" 
                    className="w-full h-48 object-cover rounded-md mb-3" 
                  />
                  <p className="text-sm text-center text-gray-700">Traditional alarms keep failing me...</p>
                </div>
                
                {/* Student with WakePal */}
                <div className="rounded-lg bg-blue-50 p-4 relative">
                  <div className="absolute -top-4 -right-4 bg-white rounded-full p-1 shadow-md flex items-center justify-center">
                    <span className="flex h-8 w-8 text-green-500 font-bold items-center justify-center">WP</span>
                  </div>
                  <img 
                    src="https://images.pexels.com/photos/5256142/pexels-photo-5256142.jpeg" 
                    alt="Student with WakePal" 
                    className="w-full h-48 object-cover rounded-md mb-3" 
                  />
                  <p className="text-sm text-center text-gray-700">WakePal never lets me oversleep!</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="hidden md:block absolute -bottom-6 -left-6 w-24 h-24 bg-orange-200 rounded-full opacity-50" />
            <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;