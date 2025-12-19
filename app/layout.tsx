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
    { path: "../fonts/Gruppo-Regular.ttf", weight: "400" },
    { path: "../fonts/Inter-Italic-VariableFont_opsz,wght.ttf", weight: "500" },
    { path: "../fonts/Inter-VariableFont_opsz,wght.ttf", weight: "600" },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rg1racingteam.com"),
  title: {
    default: "RG1 Racing Team | BMW 1000cc",
    template: "%s | RG1 Racing Team",
  },
  description:
    "RG1 Racing Team es un proyecto deportivo profesional de motociclismo de velocidad. Múltiple campeón en Brasil, categoría BMW 1000cc.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://rg1racingteam.com",
    title: "RG1 Racing Team | BMW 1000cc",
    description:
      "Velocidad. Precisión. Campeonatos. Proyecto deportivo profesional de motociclismo de velocidad.",
    images: [
      {
        url: "/og/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "RG1 Racing Team – BMW 1000cc",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
