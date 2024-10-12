import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localfont from "next/font/local";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "../_components/theme-provider";


const fontSans = FontSans({ 
  subsets: ["latin"],
  variable: "--font-sans", 
});

const fontHeading = localfont({
  src: "../assets/fonts/CalSans-Semibold.woff2",
  variable: "--font-heading",  
});


export const metadata: Metadata = {
  title: "Jorge Wendell | Web Designer",
  description: "Portifolio",
  keywords: ['nextjs, jorge wendell, portifolio, web designer, web developer'], 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontHeading.variable,
          fontSans.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
