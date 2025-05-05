import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fjr | Frontend Web Developer & Designer",
  description: "I'm Fajar Fathurrahman Ramdahani, a passionate frontend web developer specializing in modern, responsive, and visually appealing web designs. Explore my portfolio and see how I bring ideas to life through code and creativity.",
  keywords: [ "Fajar Fathurrahman Ramdahani", "Frontend Developer", "Web Developer", "UI Designer", "Junior Web Developer", "Portfolio Web Developer Indonesia", "React Developer", "Next.js Portfolio", "SMK RPL", "Fresh Graduate Developer" ],
  authors: [{ name: "Fajar Fathurrahman Ramdahani" }],
  creator: "Fajar Fathurrahman Ramdahani",
  robots: "index, follow",
  openGraph: {
    title: "Fajar Fathurrahman Ramdahani – Frontend Web Developer",
    description: "Creative and detail-oriented frontend web developer with a focus on building clean and engaging interfaces. View my work and connect with me!",
    url: "https://your-portfolio-domain.com",
    siteName: "Fajar Fathurrahman Ramdahani Portfolio",
    images: [
      {
        url: "https://your-portfolio-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fajar Fathurrahman Ramdahani Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
