import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

// ⚠️ Remplacez par votre URL Vercel finale plus tard si besoin
const SITE_URL = 'https://gana-faye.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Gana FAYE — Ingénieur SI, Data & IA · Sécurité SI',
    template: '%s · Gana FAYE',
  },
  description:
    "Portfolio de Gana FAYE — Ingénieur Systèmes d'Information, Data Scientist, IA & Sécurité SI. Master 2 SI à l'UADB Bambey. Projets Web, Mobile, Data/IA, DevOps & Cybersécurité.",
  keywords: [
    'Gana FAYE',
    'Ingénieur SI',
    'Data Scientist',
    'Intelligence Artificielle',
    'Sécurité SI',
    'Sécurité Systèmes Information',
    'DevOps',
    'Data Science',
    'Cybersécurité',
    'UADB',
    'Bambey',
    'Dakar',
    'Sénégal',
    'Flutter',
    'Next.js',
    'Kubernetes',
    'Docker',
    'Spring Boot',
    'Angular',
    'Python',
    'Portfolio',
    'Ingénieur Systèmes Information',
  ],
  authors: [{ name: 'Gana FAYE', url: SITE_URL }],
  creator: 'Gana FAYE',
  publisher: 'Gana FAYE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Gana FAYE · Portfolio',
    title:
      "Gana FAYE — Ingénieur Systèmes d'Information, Data Scientist, IA & Sécurité SI",
    description:
      "Portfolio de Gana FAYE — Ingénieur Systèmes d'Information, Data Scientist, IA & Sécurité SI. Master 2 SI à l'UADB Bambey.",
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: "Gana FAYE — Ingénieur Systèmes d'Information, Data Scientist, IA & Sécurité SI",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gana FAYE — Ingénieur SI, Data Scientist & IA & Sécurité SI",
    description:
      "Portfolio — Ingénieur SI, Data Scientist, IA & Sécurité SI.",
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // ⚠️ Pas de bloc `icons` ici — Next.js détecte automatiquement app/favicon.ico
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf8ff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0f14' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}