import React from 'react';

interface SectionHeaderProps {
  heading: string;
  children?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ children, heading }) => {
  return (
    <header className="flex justify-between">
      <h2 className="font-os tracking-wider font-medium text-2xl md:text-5xl text-dark dark:text-light">
        {heading}
      </h2>
      {children}
    </header>
  );
};

export default SectionHeader;
