import React from 'react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';

const About: React.FC = () => {
  return (
    <>
      <div className="bg-skh-blue text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase">About SKH Automotive</h1>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-skh-blue mb-4">Our Mission & Vision</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              SKH Automotive Pvt. Ltd. is committed to becoming the most preferred partner in the automotive supply chain through a relentless focus on excellence in manufacturing, technological innovation, and sustainable practices.
            </p>
            <div className="bg-skh-light p-6 rounded-lg border-l-4 border-skh-red">
              <p className="font-semibold text-skh-dark">
                "We don't just build parts; we build trust through precision and reliability."
              </p>
            </div>
            <p className="mt-6 text-gray-700 leading-relaxed">
              <strong>Manufacturing Expertise:</strong> Our state-of-the-art facilities leverage the latest technologies in robotic welding, high-tonnage presses, and automated material handling systems to ensure precision, repeatability, and cost-efficiency in every component we deliver.
            </p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-skh-blue translate-x-4 translate-y-4 rounded-lg -z-10"></div>
             <img 
              src="https://picsum.photos/id/119/800/600" 
              alt="Factory Overview" 
              className="rounded-lg shadow-xl w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </Section>

      <Section background="gray">
        <h3 className="text-center text-2xl font-bold text-skh-red mb-12 uppercase tracking-wide">Leadership Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Mr. CEO Name', role: 'Chairman & Managing Director', imgId: '10' },
            { name: 'Mr. COO Name', role: 'Chief Operating Officer', imgId: '20' },
            { name: 'Ms. CFO Name', role: 'Chief Financial Officer', imgId: '30' },
          ].map((leader, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gray-200 mb-6 rounded overflow-hidden">
                <img src={`https://picsum.photos/id/10${index + 5}/400/300`} alt={leader.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold text-skh-blue">{leader.name}</h4>
              <p className="text-skh-red font-semibold text-sm uppercase mt-1">{leader.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;