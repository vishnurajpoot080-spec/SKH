import React from 'react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';

const facilities = [
  { title: 'Robotic Welding Lines', imgId: 191 },
  { title: 'High Tonnage Stamping Press', imgId: 192 },
  { title: 'In-House Tool & Die Room', imgId: 193 },
  { title: 'Advanced Quality Inspection', imgId: 195 },
  { title: 'Automated Warehouse', imgId: 199 },
  { title: 'Component Assembly Area', imgId: 201 },
];

const Facilities: React.FC = () => {
  return (
    <>
      <div className="bg-skh-blue text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase">State-of-the-Art Facilities</h1>
      </div>

      <Section>
        <SectionHeading title="INFRASTRUCTURE" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {facilities.map((item, index) => (
            <div key={index} className="group relative h-64 overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
              <img 
                src={`https://picsum.photos/id/${item.imgId}/600/400`} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-skh-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center translate-y-full group-hover:translate-y-0">
                <span className="text-white font-bold text-xl px-4 text-center">{item.title}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-skh-blue/80 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 md:hidden">
                 <span className="text-white font-bold text-sm">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Facilities;