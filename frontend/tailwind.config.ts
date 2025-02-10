import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#2c2c2d',
        dimmedDark: '#2a2b28',
        light: '#eceeea',
        accent: '#fe2833',
        gray: '#D3D3D3',
        black: '#000',
      },
      fontFamily: {
        fc: ['var(--font-fc)'],
        os: ['var(--font-os)'],
      },
      keyframes: {
        roll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundSize: {
        '0-6': '0px 6px',
        '100-6': '100% 6px',
      },
      transitionProperty: {
        bg: 'background-size',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
