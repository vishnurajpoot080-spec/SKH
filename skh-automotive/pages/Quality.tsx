import React from 'react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import { Award, ShieldCheck, Leaf, Activity } from 'lucide-react';

const Quality: React.FC = () => {
  return (
    <>
      <div className="bg-skh-blue text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase">Quality & Assurance</h1>
      </div>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="CERTIFICATIONS" />
          <div className="mb-12 text-center text-lg text-gray-700">
            <p>Quality is non-negotiable. Our management systems are fully certified to the most rigorous international automotive standards, ensuring operational excellence across all plants.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <ul className="space-y-6">
              {[
                { icon: <Award />, code: 'IATF 16949:2016', desc: 'Quality Management System for Automotive Production.' },
                { icon: <Leaf />, code: 'ISO 14001:2015', desc: 'Environmental Management System.' },
                { icon: <Activity />, code: 'ISO 45001:2018', desc: 'Occupational Health and Safety Management System.' },
                { icon: <ShieldCheck />, code: 'VDA Standards', desc: 'Strict adherence to German automotive industry quality requirements.' },
              ].map((item, index) => (
                <li key={index} className="flex items-center p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors rounded">
                  <div className="text-skh-red mr-6 bg-red-100 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-xl font-bold text-skh-blue">{item.code}</span>
                    <span className="text-gray-600">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Quality;