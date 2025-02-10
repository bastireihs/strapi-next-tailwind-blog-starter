import { Fira_Code, Open_Sans } from 'next/font/google';

export const firacode = Fira_Code({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fc',
});

export const opensans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-os',
});
