import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "GenFace | AI-Powered Profile Photos",
  description:
    "Generate AI-powered profile photos for Instagram, LinkedIn, Facebook, X, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
