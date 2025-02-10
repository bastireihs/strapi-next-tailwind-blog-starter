'use client';

import classNames from 'classnames';

const BurgerLine: React.FC<{ className: string }> = ({ className }) => (
  <span
    role="presentation"
    className={classNames(
      'absolute inline-block w-full h-0.5 bg-dark dark:bg-light rounded animation',
      className,
    )}
  >
    &nbsp;
  </span>
);

interface ButtonBurgerMenuProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const ButtonBurgerMenu: React.FC<ButtonBurgerMenuProps> = ({
  isOpen,
  toggleOpen,
}) => {
  return (
    <button
      className="sm:hidden absolute right-4 top-5 z-50"
      onClick={toggleOpen}
      aria-label="Hamburger Menu"
    >
      <div className="relative flex flex-col gap-2 w-8 h-8 cursor-pointer">
        <BurgerLine
          className={classNames('top-0', {
            'transform rotate-45 translate-y-2': isOpen,
            'transform rotate-0 translate-y-0': !isOpen,
          })}
        />
        <BurgerLine
          className={classNames('top-2', {
            'opacity-0': isOpen,
            'opacity-100': !isOpen,
          })}
        />
        <BurgerLine
          className={classNames('top-4', {
            'transform -rotate-45 -translate-y-2': isOpen,
            'transform rotate-0 translate-y-0': !isOpen,
          })}
        />
      </div>
    </button>
  );
};

export default ButtonBurgerMenu;
