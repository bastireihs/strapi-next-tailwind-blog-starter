import React from 'react';
import classNames from 'classnames';
import { CardVariant } from '@/lib/enums';

interface CardHeadingProps {
  title: string;
  variant: CardVariant;
}

const CardHeading: React.FC<CardHeadingProps> = ({ title, variant }) => {
  const HeadingTag = variant === CardVariant.COMPACT ? 'h2' : 'h1';
  const headingClass = classNames('font-os font-medium text-light', {
    'text-xl md:text-4xl': variant === CardVariant.COMPACT,
    'text-2xl sm:text-3xl lg:text-7xl': variant === CardVariant.NORMAL,
  });

  return (
    <HeadingTag className={headingClass}>
      <span className="underline decoration-accent decoration-6 underline-offset-1">
        {title}
      </span>
    </HeadingTag>
  );
};

export default CardHeading;
