import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  background?: 'white' | 'gray';
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  fullWidth = false,
  background = 'white' 
}) => {
  const bgClass = background === 'gray' ? 'bg-skh-light' : 'bg-white';
  
  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <div className={fullWidth ? 'w-full' : 'max-w-[1200px] mx-auto px-4 md:px-8'}>
        {children}
      </div>
    </section>
  );
};

export default Section;