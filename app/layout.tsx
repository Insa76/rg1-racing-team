import "./globals.css";

import Layout from "@/components/layout/Layout";
import localFont from "next/font/local";
import type { Metadata } from "next";

const anton = localFont({
  src: "../fonts/Anton-Regular.ttf",
  variable: "--font-anton",
});

const inter = localFont({
  src: [
    {
      path: "../fonts/Gruppo-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Inter-Italic-VariableFont_opsz,wght.ttf",
      weight: "500",
    },
    {
      path: "../fonts/Inter-VariableFont_opsz,wght.ttf",
      weight: "600",
    },
  ],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://rg1racingteam.com"),

  title: {
    default: "RG1 Racing Team | Performance & Motorsport",
    template: "%s | RG1 Racing Team",
  },

  description:
    "RG1 Racing Team integra competición, performance, contenido y alianzas estratégicas dentro del mundo del motociclismo.",

  keywords: [
    "RG1 Racing Team",
    "RG1",
    "motociclismo",
    "motorsport",
    "superbike",
    "racing",
    "performance",
    "motos",
    "repuestos para motos",
    "accesorios para motos",
    "lubricantes",
  ],

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://rg1racingteam.com",

    siteName: "RG1 Racing Team",

    title: "RG1 Racing Team | Performance & Motorsport",

    description:
      "Competición, performance y cultura del motociclismo reunidas en un mismo proyecto.",

    images: [
      {
        url: "/og/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "RG1 Racing Team",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "RG1 Racing Team | Performance & Motorsport",

    description:
      "Competición, performance y cultura del motociclismo reunidas en un mismo proyecto.",

    images: ["/og/og-image.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="es"
  className={`${anton.variable} ${inter.variable}`}
>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}