import React from 'react';
import { Clock, Map, UserCheck } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How WakePal Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our process is simple, reliable, and designed for student life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Clock className="h-10 w-10 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              1. Schedule
            </h3>
            <p className="text-gray-600 text-center">
              Set your wake-up time and location (room/hostel/block).
            </p>
            
            <div className="mt-8 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Wake-up Time</span>
                <span className="font-medium">7:30 AM</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Location</span>
                <span className="font-medium">Block C, Room 204</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Days</span>
                <span className="font-medium">Mon, Wed, Fri</span>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl md:transform md:translate-y-4">
            <div className="flex justify-center mb-6">
              <div className="bg-orange-100 p-4 rounded-full">
                <Map className="h-10 w-10 text-orange-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              2. Get a WakePal
            </h3>
            <p className="text-gray-600 text-center">
              A nearby student picks the time and takes the task.
            </p>
            
            <div className="mt-8 bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-medium text-blue-500">JP</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Jamie P.</p>
                    <p className="text-sm text-gray-500">4.9 ★ (24 wake-ups)</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                  Accepted
                </span>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <UserCheck className="h-10 w-10 text-green-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              3. Wake Up Happy
            </h3>
            <p className="text-gray-600 text-center">
              Your WakePal shows up on time. You rise and shine!
            </p>
            
            <div className="mt-8 bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Arrived on time: 7:28 AM</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Wake-up confirmed: 7:32 AM</span>
                </div>
                <div className="mt-2 text-center bg-blue-50 p-2 rounded w-full">
                  <span className="text-sm text-blue-700">+ 20 Points Earned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;