import React from 'react';
import classNames from 'classnames';

interface LayoutContainerProps {
  children: React.ReactNode;
  className?: string;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({
  children,
  className,
}) => {
  const containerClass = classNames(
    'container mx-auto px-4 sm:px-6 lg:px-8',
    className,
  );

  return <div className={containerClass}>{children}</div>;
};

export default LayoutContainer;
