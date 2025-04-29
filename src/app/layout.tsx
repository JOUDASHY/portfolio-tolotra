// app/layout.tsx
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Tolotra | Multilingual Communication Specialist",
  description:
    "Tolotra – Visionnaire multilingue et spécialiste en communication : éducation, collaboration globale et inter-culturalité.",
  keywords: [
    "Tolotra", 
    "Multilingual", 
    "Communication", 
    "Madagascar", 
    "Éducation",
    "Langues",
    "Cross-cultural"
  ],
  authors: [{ name: "Tolotra" }],
  alternates: {
    canonical: "https://portfolio-tolotra.onrender.com/"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tolotra | Multilingual Communication Specialist",
    description:
      "Visionnaire multilingue spécialisé en éducation et communication interculturelle à Madagascar.",
    url: "https://portfolio-tolotra.onrender.com/",
    siteName: "Tolotra Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://portfolio-tolotra.onrender.com/cv1.jpeg",
        width: 1200,
        height: 630,
        alt: "Portrait de Tolotra"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolotra | Communication & Langues",
    description:
      "Spécialiste multilingue en communication interculturelle et éducation.",
    images: ["https://portfolio-tolotra.onrender.com/cv2.jpeg"],
    creator: "@votre_handle"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* charset & viewport */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        {/* Google Fonts préconnect + CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400&family=Geist+Mono:wght@400&display=swap"
          rel="stylesheet"
        />

        {/* Tailwind via CDN + config inline */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: {
                      geist: ['Geist', 'sans-serif'],
                      'geist-mono': ['Geist Mono', 'monospace'],
                    },
                  }
                }
              }
            `,
          }}
        />

        {/* JSON‑LD pour schema.org/Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tolotra",
              birthDate: "2003-12-01",
              url: "https://portfolio-tolotra.onrender.com/",
              sameAs: [
                "https://www.linkedin.com/in/eddie-tolotra-alitsiry-766050263",
                "https://www.facebook.com/nirina.sarah.96"
              ],
              jobTitle: "Communication & Language Specialist",
              description:
                "Visionnaire multilingue spécialisé en communication interculturelle et éducation à Madagascar.",
              nationality: "Madagascar",
              knowsLanguage: ["fr", "en", "es", "ru"]
            }),
          }}
        />
        <meta name="google-site-verification" content="2ZdIsGx9QPYso8t0uM3MoNQz5UjeR71SvjNSavAqXh0" />
      </head>
      <body className="antialiased font-geist">
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
