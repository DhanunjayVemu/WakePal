import React from 'react';
import { UserCheck, Award, Smile, Building } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 border-t-4 ${color} transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const WhyItWorksSection: React.FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why WakePal is the Best Wake-Up Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've designed WakePal specifically for campus life, addressing the unique challenges students face.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <BenefitCard 
            icon={<UserCheck className="h-10 w-10 text-blue-500" />}
            title="Human > Alarm Clock"
            description="Getting up is easier when someone's at your door. The social commitment makes it nearly impossible to ignore."
            color="border-blue-500"
          />
          
          <BenefitCard 
            icon={<Award className="h-10 w-10 text-orange-500" />}
            title="Earn Rewards"
            description="WakePals get points and rewards for each successful wake-up. Help others and earn campus perks."
            color="border-orange-500"
          />
          
          <BenefitCard 
            icon={<Smile className="h-10 w-10 text-purple-500" />}
            title="No Awkwardness"
            description="No more begging friends. It's a fair system where everyone benefits, creating a positive wake-up culture."
            color="border-purple-500"
          />
          
          <BenefitCard 
            icon={<Building className="h-10 w-10 text-green-500" />}
            title="Built for Hostels"
            description="Made by students who've been through the same struggle. Designed for hostel layouts and campus life."
            color="border-green-500"
          />
        </div>
        
        {/* Testimonials */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            What Students Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-gray-700 italic mb-4">
                "I used to miss my morning classes all the time. Since using WakePal, I haven't missed a single one. Game changer!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="font-medium text-blue-600">MJ</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Maya J.</p>
                  <p className="text-sm text-gray-500">Engineering, Year 2</p>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl">
              <p className="text-gray-700 italic mb-4">
                "I make extra cash between classes just by waking people up. It's the easiest campus job and I can work it around my schedule."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="font-medium text-orange-600">TK</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Tyler K.</p>
                  <p className="text-sm text-gray-500">Business, Year 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;