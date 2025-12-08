import React from 'react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';

const products = [
  { title: 'BODY-IN-WHITE (BIW)', desc: 'Critical structural components for vehicle safety and integrity.' },
  { title: 'CHASSIS & SUSPENSION', desc: 'Precision-engineered parts that ensure optimal ride comfort and handling.' },
  { title: 'FUEL TANKS & SYSTEMS', desc: 'Innovative and compliant solutions for fuel storage and delivery.' },
  { title: 'SEATING STRUCTURES', desc: 'High-strength, lightweight frames for modern automotive seating systems.' },
  { title: 'PEDAL BOX ASSEMBLIES', desc: 'Complete assemblies manufactured to the highest safety standards.' },
  { title: 'BATTERY ENCLOSURES (EV)', desc: 'Robust and thermal-managed enclosures for next-generation electric vehicles.' },
];

const Products: React.FC = () => {
  return (
    <>
       <div className="bg-skh-blue text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase">Products & Solutions</h1>
      </div>

      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="h-48 bg-gray-300">
                <img src={`https://picsum.photos/id/${index + 150}/600/400`} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-center text-center">
                <h3 className="text-xl font-black text-skh-dark mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
         <div className="bg-skh-blue p-12 rounded-xl text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="mb-8 max-w-2xl mx-auto">Our engineering team specializes in custom tooling and prototype development for OEMs.</p>
            <a href="/contact" className="inline-block bg-white text-skh-blue font-bold py-3 px-8 rounded hover:bg-skh-red hover:text-white transition-colors">
              Contact Engineering
            </a>
         </div>
      </Section>
    </>
  );
};

export default Products;