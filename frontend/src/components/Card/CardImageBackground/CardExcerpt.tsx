import { CardVariant } from '@/lib/enums';
import React from 'react';

interface CardExcerptProps {
  excerpt: string;
  variant: CardVariant;
}

const CardExcerpt: React.FC<CardExcerptProps> = ({ excerpt, variant }) => {
  if (variant === CardVariant.NORMAL && excerpt) {
    return (
      <p className="hidden sm:inline-block md:text-lg lg:text-xl text-gray font-medium">
        {excerpt}
      </p>
    );
  }
  return null;
};

export default CardExcerpt;
