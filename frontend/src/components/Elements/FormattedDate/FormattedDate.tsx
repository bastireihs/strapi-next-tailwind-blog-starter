import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

interface FormattedDateProps {
  date: string;
  format?: string;
  className?: string;
}

const FormattedDate: React.FC<FormattedDateProps> = ({
  date,
  format = 'DD.MM.YYYY',
  className,
}) => {
  const baseStyles = 'font-os font-semibold';
  const overrideableStyles =
    'text-dark/50 dark:text-light/50 text-sm sm:text-base';
  const appliedClassName = classNames(
    baseStyles,
    className || overrideableStyles,
  );

  return (
    <time className={` ${appliedClassName}`}>
      {moment(date).format(format)}
    </time>
  );
};

export default FormattedDate;
