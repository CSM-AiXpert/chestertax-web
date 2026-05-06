import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./mobile.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Chester CPA, PC | Executive Tax Services for Businesses & Individuals",
  description: "Patrick Chester, CPA — specializing in complex income tax services, business tax returns, QuickBooks clean-up, financial statements, and peer reviews for CPA firms in the Bluffton, Okatie, and Hilton Head area.",
  keywords: "CPA, tax services, Bluffton SC, Okatie SC, Hilton Head, business tax, individual tax, QuickBooks, audit, peer review",
  openGraph: {
    title: "Chester CPA, PC | Executive Tax Services",
    description: "Expert tax services for complex situations — rental properties, multi-state filings, self-employment, business partnerships. Serving Bluffton, Okatie, and Hilton Head.",
    url: "https://www.chestertax.com",
    siteName: "Chester CPA, PC",
    type: "website",
    images: [{
      url: "https://images.squarespace-cdn.com/content/v1/64bda1339869bc334d2072ef/294d1f0b-d05c-4361-8bb3-101ca5f109a9/pexels-anastasia-shuraeva-4406813.jpg",
      width: 1200,
      height: 630,
      alt: "Chester CPA, PC"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chester CPA, PC | Executive Tax Services",
    description: "Expert tax services for complex situations in Bluffton, Okatie, and Hilton Head."
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}