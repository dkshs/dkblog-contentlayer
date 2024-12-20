import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ThemeProvider } from "next-themes";
import { Merriweather_Sans as MerriweatherSans } from "next/font/google";
import { Header } from "@/components/Header";
import { SITE_BASEURL, SITE_LOCALE, SITE_NAME } from "@/utils/constants";

const merriweatherSans = MerriweatherSans({
  subsets: ["latin"],
  variable: "--font-merriweather-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASEURL),
  title: {
    default: SITE_NAME,
    template: `%s • ${SITE_NAME}`,
  },
  description: "A blog using Next.Js and Contentlayer.",
  alternates: {
    canonical: "/",
  },
  manifest: `${SITE_BASEURL}/manifest.json`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: {
      default: SITE_NAME,
      template: `%s • ${SITE_NAME}`,
    },
    description: "A blog using Next.Js and Contentlayer.",
    siteName: SITE_NAME,
    type: "website",
    url: "/",
    locale: SITE_LOCALE,
  },
  twitter: {
    title: {
      default: SITE_NAME,
      template: `%s • ${SITE_NAME}`,
    },
    description: "A blog using Next.Js and Contentlayer.",
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html lang="en" className={merriweatherSans.variable}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <div className="pt-16 sm:container">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
