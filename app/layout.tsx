import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { fontSans } from '@/config/fonts';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Providers } from './providers';
import { siteConfig } from '@/config/site';
import { Suspense } from 'react';
import clsx from 'clsx';
import GoogleAnalytics from '@/utils/googleTracking';

export const metadata: Metadata = {
  description: siteConfig.description,
  icons: {
    apple: '/apple-touch-icon.png',
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Analytics />
        {/* GTM */}
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
            {/* <footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
								title="nextui.org homepage"
							>
								<span className="text-default-600">Powered by</span>
								<p className="text-primary">NextUI</p>
							</Link>
						</footer> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
