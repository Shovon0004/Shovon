import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'Shovon Halder - DevOps & Full-Stack Developer | Portfolio',
  description: 'Shovon Halder is a skilled DevOps Engineer and Full-Stack Web Developer with expertise in Kubernetes, Docker, React.js, Node.js, and Spring Boot. View his professional portfolio, projects, and achievements.',
  keywords: 'Shovon Halder, DevOps Engineer, Full-Stack Developer, Kubernetes, Docker, React, Node.js, Spring Boot, Portfolio, Web Development, Microservices, Cloud Infrastructure, India',
  authors: [{ name: 'Shovon Halder', url: 'https://shovon.tech' }],
  creator: 'Shovon Halder',
  publisher: 'Shovon Halder',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  generator: 'Next.js',
  applicationName: 'Shovon Halder Portfolio',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    url: 'https://shovon.tech',
    title: 'Shovon Halder - DevOps & Full-Stack Developer | Portfolio',
    description: 'Explore the portfolio of Shovon Halder, a talented DevOps Engineer and Full-Stack Web Developer with expertise in modern technologies and enterprise-level development.',
    siteName: 'Shovon Halder Portfolio',
    locale: 'en_US',
    images: [
      {
        url: 'https://shovon.tech/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shovon Halder - DevOps & Full-Stack Developer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shovon Halder - DevOps & Full-Stack Developer',
    description: 'Skilled DevOps Engineer and Full-Stack Developer. Expertise in Kubernetes, Docker, React, Node.js, and Spring Boot.',
    creator: '@ShovonHalder',
    images: ['https://shovon.tech/og-image.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Shovon Halder - Developer',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        
        {/* DNS Prefetch and Performance Optimization */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://shovon.tech" />
        
        {/* Alternate Versions */}
        <link rel="alternate" hrefLang="en" href="https://shovon.tech" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Shovon Halder" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="target" content="all" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shovon.tech" />
        <meta property="og:locale" content="en_US" />
        
        {/* Additional Security Headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" as="style" href="./globals.css" />
        
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <CustomCursor />
        {children}
        
        {/* JSON-LD Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Shovon Halder',
              url: 'https://shovon.tech',
              logo: 'https://shovon.tech/logo.png',
              description: 'Professional portfolio and projects of Shovon Halder, a DevOps Engineer and Full-Stack Web Developer',
              sameAs: [
                'https://github.com/Shovon0004',
                'https://linkedin.com/in/shovon-halder',
              ],
              contact: {
                '@type': 'ContactPoint',
                telephone: '+91-9800567487',
                contactType: 'General Inquiry',
                email: 'shovonhalder04@gmail.com',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kolkata',
                addressRegion: 'West Bengal',
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
