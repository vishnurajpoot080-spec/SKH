import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import { Settings, Cog, Zap, Ruler, CheckCircle, Clock, Lightbulb, Handshake } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center bg-black overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-60 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://picsum.photos/id/1053/1600/900")' }} // Industrial / Concrete
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20 max-w-[1200px] mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg leading-tight">
              ENGINEERING THE <br/> FUTURE OF MOBILITY
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-medium">
              Global leaders in high-precision automotive component manufacturing, dedicated to quality, innovation, and performance.
            </p>
            <div className="flex gap-4">
              <Link to="/products" className="bg-skh-blue border-2 border-skh-blue text-white font-bold py-3 px-8 uppercase hover:bg-white hover:text-skh-blue transition-colors duration-300 rounded">
                Explore Products
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 uppercase hover:bg-skh-red hover:border-skh-red transition-colors duration-300 rounded">
                Connect with Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <Section background="gray">
        <SectionHeading title="DRIVING GLOBAL STANDARDS" />
        <div className="max-w-3xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
          <p>
            SKH Automotive is a trusted partner to the world's leading automotive OEMs. With a foundation built on industrial strength, technological excellence, and a relentless pursuit of perfection, we deliver solutions that meet the demanding specifications of the modern vehicle.
          </p>
        </div>
      </Section>

      {/* Core Services */}
      <Section>
        <SectionHeading title="OUR CORE EXPERTISE" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Settings size={48} />, title: 'Stamping & Fabrication', desc: 'High-volume, high-precision stamping and fabrication for critical vehicle structures.' },
            { icon: <Cog size={48} />, title: 'Robotic Assembly', desc: 'Advanced robotic lines ensure consistent, world-class welding and assembly quality.' },
            { icon: <Zap size={48} />, title: 'EV Components', desc: 'Specialized solutions for the future of mobility, including battery enclosures.' },
            { icon: <Ruler size={48} />, title: 'Tool & Die Design', desc: 'In-house capability for designing and building robust, efficient production tooling.' },
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 border border-gray-100 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300 text-center group">
              <div className="text-skh-blue mb-4 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-skh-dark">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="white">
        <SectionHeading title="WHY CHOOSE SKH?" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: <CheckCircle size={32} />, title: 'ZERO-DEFECT QUALITY', desc: 'Adherence to global standards like IATF 16949 ensures perfection.' },
            { icon: <Clock size={32} />, title: 'GLOBAL SCALE, LOCAL SPEED', desc: 'Strategically located facilities for fast, efficient JIT delivery worldwide.' },
            { icon: <Lightbulb size={32} />, title: 'ADVANCED R&D', desc: 'Continuous investment in technology and lightweighting solutions.' },
            { icon: <Handshake size={32} />, title: 'OEM PARTNERSHIP', desc: 'Decades of trust built with the worlds leading automotive manufacturers.' },
          ].map((item, index) => (
            <div key={index} className="flex items-start p-6 bg-skh-light border-l-4 border-skh-blue rounded hover:shadow-md transition-shadow">
              <div className="text-skh-red mr-4 mt-1">{item.icon}</div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-skh-dark">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;