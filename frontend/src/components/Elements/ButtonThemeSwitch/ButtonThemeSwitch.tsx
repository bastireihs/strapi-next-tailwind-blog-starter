'use client';

import React from 'react';
import classNames from 'classnames';

import { Theme } from '@/lib/enums';
import { ThemeService } from '@/lib/services';

import { IconMoon, IconSun } from '../Icons/Icons';

const themeService = new ThemeService();

const ButtonThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = themeService.useThemeSwitch();

  return (
    <button
      onClick={toggleTheme}
      className={classNames(
        'w-6 h-6 sm:w-8 sm:h-8 rounded-full hover:scale-110 animation',
        theme === Theme.LIGHT ? 'bg-light text-dark' : 'bg-dark text-light',
      )}
      aria-label="theme-switcher"
    >
      {theme === Theme.LIGHT ? <IconMoon /> : <IconSun />}
    </button>
  );
};

export default ButtonThemeSwitch;
