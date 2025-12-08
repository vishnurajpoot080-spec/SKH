import React from 'react';

const SectionHeading: React.FC<{ title: string; align?: 'center' | 'left' }> = ({ title, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-black text-skh-dark inline-block border-b-[5px] border-skh-red pb-4">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;