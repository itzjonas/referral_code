// components/GoogleAnalytics.tsx
'use client';

import { GTM_ID, pageview } from './gtm';
import { usePathname, useSearchParams } from 'next/navigation';

import Script from 'next/script';
import { useEffect } from 'react';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();

    pageview(url, GTM_ID);
  }, [pathname, searchParams]);
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GTM_ID}');
          `,
        }}
      />
    </>
  );
}
