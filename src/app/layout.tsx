import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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

const TopNav = () => {
  return (
    <nav className="flex border-b w-full justify-between p-4">
      <div className="flex gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/mypics"}>My Pics</Link>
        <Link href={"/waittimes"}>Wait times</Link>
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </nav>
  );
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
        <TopNav />
        {children}
      </body>
    </html>
  );
}
