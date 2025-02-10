'use client';

import '../styles/globals.css';

import { ReactNode } from 'react';
import classNames from 'classnames';
import Head from 'next/head';

import { siteMetadata } from '@/lib/config';
import { firacode, opensans } from '@/lib/utils';

import { Footer, Header, LayoutContainer } from '@/components/Layout';

const socialLinks = {
  linkedin: siteMetadata.linkedin,
  github: siteMetadata.github,
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const rootClass = classNames(
    'font-fc bg-light dark:bg-dark',
    firacode.variable,
    opensans.variable,
  );

  return (
    <html lang="en">
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={rootClass}>
        <header className="z-30 fixed top-0 left-0 right-0 w-full bg-light dark:bg-dark">
          <LayoutContainer>
            <Header socialLinks={socialLinks} />
          </LayoutContainer>
        </header>
        <main id="main-content">
          <LayoutContainer>
            <div className="mt-[56px] md:mt-[96px] mb-16 md:mb-32 flex flex-col gap-16 md:gap-32">
              {children}
            </div>
          </LayoutContainer>
        </main>
        <footer className="bg-dark dark:bg-light">
          <LayoutContainer>
            <Footer socialLinks={socialLinks} />
          </LayoutContainer>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
