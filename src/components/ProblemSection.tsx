import React from 'react';
import { Clock, Moon, AlertTriangle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="relative">
              <div className="bg-gray-100 rounded-xl p-6 shadow-md max-w-md mx-auto transform transition-transform duration-500 hover:scale-105">
                <div className="flex justify-center mb-6">
                  <div className="bg-orange-100 p-4 rounded-full">
                    <AlertTriangle className="h-10 w-10 text-orange-500" />
                  </div>
                </div>
                <img 
                  src="https://images.pexels.com/photos/3771079/pexels-photo-3771079.jpeg" 
                  alt="Student struggling to wake up" 
                  className="w-full h-64 object-cover rounded-lg mb-6" 
                />
                <div className="flex justify-around mb-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-sm text-gray-700">8:30 AM</span>
                  </div>
                  <div className="flex items-center">
                    <Moon className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-sm text-gray-700">Deep sleep</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <p className="text-sm text-gray-700">Missed alarm #1 - 7:00 AM</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <p className="text-sm text-gray-700">Missed alarm #2 - 7:15 AM</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <p className="text-sm text-gray-700">Missed alarm #3 - 7:30 AM</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-orange-200 rounded-full opacity-50" />
              <div className="hidden md:block absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-50" />
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Oversleeping is a campus epidemic.
            </h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg transform transition-transform duration-300 hover:-translate-y-1">
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">8 AM classes are tough.</span> Alarms fail. Roommates forget. Professors don't wait.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg transform transition-transform duration-300 hover:-translate-y-1">
                <p className="text-lg text-gray-700">
                  That's why students in hostels need something <span className="font-semibold">more reliable than traditional alarms.</span>
                </p>
              </div>
              <div className="mt-6 pl-4 border-l-4 border-blue-500">
                <p className="text-xl text-gray-600">
                  "I missed my mid-term because I couldn't wake up on time. My entire GPA suffered because of one morning."
                </p>
                <p className="mt-2 text-gray-500">— Alex, Computer Science student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;