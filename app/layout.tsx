import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Montserrat } from "next/font/google";
import { NavigationProvider } from "./context/NavigationContext";
import { LanguageProvider } from "./context/LanguageContext";
import {
  HeaderComponent,
  LanguageTogglerComponent,
  NavBarComponent,
  ThemeTogglerComponent,
} from "@/components/Layout";
import {
  BackGroundCover,
  BackgroundParticlesCover,
  PageNavigateTransition,
  SpinnerFirstLoadPage,
  TransparentTransitionPages,
} from "@/components/Layout/Effects";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mendozadev.vercel.app"),
  title: "MendozaDev",
  description:
    "Portfolio web made by David Mendoza to showcase my works and skills",
  openGraph: {
    title: "MendozaDev",
    description:
      "Portfolio web made by David Mendoza to showcase my works and skills",
    url: "https://mendozadev.vercel.app",
    siteName: "MendozaDev",
    images: [
      {
        url: "/images/preview.png", // Web Preview Image
        width: 800,
        height: 600,
        alt: "Imagen de vista previa de MendozaDev",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className + " antialiased"}>
        {/* Theme and Language Providers for manage them */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            {/* NavigationProvider For manage agradable transitions between pages before load contents */}
            <NavigationProvider>
              {/* Page Background */}
              <BackgroundParticlesCover />
              <BackGroundCover />

              {/* Layout Components */}
              <HeaderComponent />
              <NavBarComponent />
              <ThemeTogglerComponent />
              <LanguageTogglerComponent />

              {/* Spinner for show in first load page while loading */}
              <SpinnerFirstLoadPage />

              {/* <Main> Use the context useNavigationContext for make agradable transition between pages */}
              <PageNavigateTransition>
                {/* Other little transition animation when components content loads */}
                <TransparentTransitionPages>
                  {/* Main content (routes) */}
                  {children}
                </TransparentTransitionPages>
              </PageNavigateTransition>
            </NavigationProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
