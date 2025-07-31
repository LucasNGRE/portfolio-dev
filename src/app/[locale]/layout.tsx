import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers";

const inter = Inter ({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga ({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"] });

export const metadata: Metadata = {
  title: "Lucas NEGRE | Portfolio",
  description: "Lucas NEGRE Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string;  };
}>) {
  return (
    <html lang="en">
      <body 
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}>
          <Providers locale={params.locale}>
            {children}
          </Providers>
          <Toaster  richColors />
      </body>
    </html>
  );
}
