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
    canonical: "https://www.tolotra.site/"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tolotra | Multilingual Communication Specialist",
    description:
      "Visionnaire multilingue spécialisé en éducation et communication interculturelle à Madagascar.",
    url: "https://www.tolotra.site/",
    siteName: "Tolotra Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.tolotra.site/cv1.jpeg",
        width: 1200,
        height: 630,
        alt: "Portrait de Tolotra",
        type: "image/jpeg"
      }
    ],
    countryName: "Madagascar",
    emails: ["contact@tolotra.site"],  // Ajoutez votre email
    phoneNumbers: ["+261342254590"]  // Ajoutez votre numéro
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolotra | Communication & Langues",
    description: "Spécialiste multilingue en communication interculturelle et éducation.",
    images: ["https://www.tolotra.site/cv2.jpeg"],
    creator: "@tolotra",
    site: "@tolotra"
  },
  verification: {
    google: "2ZdIsGx9QPYso8t0uM3MoNQz5UjeR71SvjNSavAqXh0",
    other: {
      me: ["contact@tolotra.site", "https://www.linkedin.com/in/eddie-tolotra-alitsiry-766050263/"]
    }
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Ajout des balises favicon explicites */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        
        {/* Reste du head */}
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
              url: "https://www.tolotra.site/",
              sameAs: [
                "https://www.linkedin.com/in/eddie-tolotra-alitsiry-766050263",
                "https://www.facebook.com/nirina.sarah.96"
              ],
              jobTitle: "Communication & Language Specialist",
              description:
                "Visionnaire multilingue spécialisé en communication interculturelle et éducation à Madagascar.",
              nationality: "Madagascar",
              knowsLanguage: ["fr", "en", "es", "ru"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "Madagascar",
                addressLocality: "Antananarivo"
              },
              worksFor: {
                "@type": "Organization",
                name: "Votre organisation"
              },
              image: "https://www.tolotra.site/cv1.jpeg",
              email: "contact@tolotra.site",
              telephone: "+261342254590",
              skills: ["Communication interculturelle", "Langues étrangères", "Éducation"],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Votre établissement"
              }
            }),
          }}
        />
        <meta name="google-site-verification" content="zyScQCWcWe6v5KCYiRgXO_hxvsYtKcg0zPcjfWM3SHA" />
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
