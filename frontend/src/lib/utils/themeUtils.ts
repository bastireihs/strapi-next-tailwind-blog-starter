export const isLocalStorageAvailable = typeof localStorage !== 'undefined';

export const getThemePreference = () => {
  if (!isLocalStorageAvailable) return null;
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) return storedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const applyTheme = (theme: string | null) => {
  if (typeof document === 'undefined') return;
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
