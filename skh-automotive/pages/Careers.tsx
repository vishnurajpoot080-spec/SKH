import React from 'react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import { Briefcase, MapPin } from 'lucide-react';

const Careers: React.FC = () => {
  const jobs = [
    { title: 'Sr. Robotic Welding Technician', location: 'Pune, India' },
    { title: 'Tool & Die Designer', location: 'Manesar, India' },
    { title: 'Quality Control Engineer (IATF)', location: 'Global' },
  ];

  return (
    <>
      <div className="bg-skh-blue text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase">Engineer Your Future</h1>
      </div>

      <Section>
        <SectionHeading title="OPEN POSITIONS" />
        <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Join a team that powers the automotive world. We are looking for skilled and motivated individuals to drive innovation.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {jobs.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-center bg-white p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow group">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                   <Briefcase size={20} className="text-skh-blue" />
                   <h4 className="text-xl font-bold text-skh-dark group-hover:text-skh-blue transition-colors">{job.title}</h4>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 text-sm">
                   <MapPin size={16} />
                   <span>{job.location}</span>
                </div>
              </div>
              <a 
                href={`mailto:careers@skhautomotive.in?subject=Application for ${job.title}`}
                className="bg-transparent border-2 border-skh-blue text-skh-blue font-bold py-2 px-6 rounded hover:bg-skh-blue hover:text-white transition-all whitespace-nowrap"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center bg-gray-50 p-8 rounded-lg max-w-2xl mx-auto">
          <p className="text-gray-600">
            Don't see a fit? We are always looking for talent.<br/> 
            Send your resume directly to: <a href="mailto:careers@skhautomotive.in" className="text-skh-blue font-bold hover:underline">careers@skhautomotive.in</a>
          </p>
        </div>
      </Section>
    </>
  );
};

export default Careers;