import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import {
  ThemeToggler,
  LanguageToggler,
  Header,
  NavBar,
} from "@/components/shared";
import { BackgroundCover } from "@/components/shared/effetcs";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MendozaDev",
  description:
    "Portfolio web made by David Mendoza for show my works and skills",
  icons: {
    icon: "favicon.ico",
    shortcut: "favicon.ico",
    apple: "favicon.ico",
    other: { rel: "icon", url: "favicon.ico" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <LanguageProvider>
          <BackgroundCover />
          <Header />
          <NavBar />
          <LanguageToggler />
          <ThemeToggler />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
