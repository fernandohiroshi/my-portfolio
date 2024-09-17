import type { Metadata } from "next";

import "./globals.css";
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Fernando Hiroshi Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
