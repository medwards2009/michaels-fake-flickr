import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopNav from "./_components/TopNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Michaels fake flickr",
  description: "fake flickr for learnin'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
      >
        <TopNav />
        <div className="h-auto">{children}</div>
      </body>
    </html>
  );
}
