import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { NavigationProvider } from "@/components/custom/navigation";
import ClientTransitionWrapper from "@/components/custom/ClientTransitionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio - Chamath Nadeeshan",
  icons:  {
    icon: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationProvider>
        <Header />
        <ClientTransitionWrapper>{children}</ClientTransitionWrapper>
        
        </NavigationProvider>
      </body>
    </html>
  );
}
