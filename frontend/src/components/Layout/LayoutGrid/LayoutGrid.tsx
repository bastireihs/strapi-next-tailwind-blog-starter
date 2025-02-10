import React from 'react';
import classNames from 'classnames';

interface LayoutGridProps {
  children: React.ReactNode;
  className?: string;
}

const LayoutGrid: React.FC<LayoutGridProps> = ({ children, className }) => {
  const gridClass = classNames(
    'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-4 xl:gap-16',
    className,
  );

  return <div className={gridClass}>{children}</div>;
};

export default LayoutGrid;
