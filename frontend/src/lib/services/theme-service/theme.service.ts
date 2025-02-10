'use client';

import { useState, useEffect } from 'react';

import { Theme } from '@/lib/enums';

class ThemeService {
  public isLocalStorageAvailable = typeof localStorage !== 'undefined';

  private getThemePreference(): Theme {
    if (!this.isLocalStorageAvailable) return Theme.LIGHT;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme as Theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? Theme.DARK
      : Theme.LIGHT;
  }

  private applyTheme(theme: Theme): void {
    if (typeof document === 'undefined') return;
    if (theme === Theme.DARK) {
      document.documentElement.classList.add(Theme.DARK);
    } else {
      document.documentElement.classList.remove(Theme.DARK);
    }
  }

  public useThemeSwitch() {
    const [theme, setTheme] = useState<Theme | undefined>(undefined);

    useEffect(() => {
      const initialTheme = this.getThemePreference();
      setTheme(initialTheme);
      this.applyTheme(initialTheme);
    }, []);

    useEffect(() => {
      if (theme !== undefined) {
        this.applyTheme(theme);
        if (this.isLocalStorageAvailable) {
          localStorage.setItem('theme', theme);
        }
      }
    }, [theme]);

    const toggleTheme = () => {
      setTheme((prevTheme) =>
        prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK,
      );
    };

    return { theme, toggleTheme };
  }
}

export default ThemeService;
