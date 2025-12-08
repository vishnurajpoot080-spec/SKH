import React from 'react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <div className="bg-skh-blue text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase">Contact Our Team</h1>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-skh-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-skh-blue mb-4 flex items-center gap-2">
                    <MapPin /> Headquarters
                </h3>
                <p className="text-gray-700">
                    SKH Automotive Pvt. Ltd.<br />
                    Plot No. 123, Industrial Area<br />
                    Pune, Maharashtra - 411001<br />
                    India
                </p>
            </div>

            <div className="bg-skh-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-skh-blue mb-4 flex items-center gap-2">
                    <Phone /> General Enquiries
                </h3>
                <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Phone:</span> <a href="tel:+911234567890" className="hover:text-skh-red">+91 123 456 7890</a>
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Email:</span> <a href="mailto:info@skhautomotive.in" className="hover:text-skh-red">info@skhautomotive.in</a>
                </p>
            </div>

             <div className="bg-skh-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-skh-blue mb-4 flex items-center gap-2">
                    <Mail /> Sales
                </h3>
                <p className="text-gray-700">
                    <span className="font-semibold">Email:</span> <a href="mailto:sales@skhautomotive.in" className="hover:text-skh-red">sales@skhautomotive.in</a>
                </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
             <div className="bg-white rounded-lg p-0 md:p-4">
                <h3 className="text-2xl font-bold text-skh-dark mb-6">Send us an Enquiry</h3>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                            <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-skh-blue focus:ring-1 focus:ring-skh-blue" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Professional Email</label>
                            <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-skh-blue focus:ring-1 focus:ring-skh-blue" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                        <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-skh-blue focus:ring-1 focus:ring-skh-blue" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                        <textarea id="message" rows={6} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-skh-blue focus:ring-1 focus:ring-skh-blue" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-skh-blue text-white font-bold py-4 rounded hover:bg-skh-dark transition-colors uppercase tracking-wide">
                        Send Enquiry
                    </button>
                </form>
             </div>
          </div>
        </div>
      </Section>
      
      {/* Map Placeholder */}
      <div className="h-96 w-full bg-gray-200 flex items-center justify-center border-t border-gray-300">
          <div className="text-center text-gray-500">
             <MapPin size={48} className="mx-auto mb-2 text-gray-400" />
             <p className="font-bold text-xl">[ Google Map Embed ]</p>
             <p className="text-sm">Location Visualization Placeholder</p>
          </div>
      </div>
    </>
  );
};

export default Contact;