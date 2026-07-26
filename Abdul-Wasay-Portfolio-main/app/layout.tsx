import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdul Wasay | AI Engineer Portfolio",
  description: "Portfolio of Abdul Wasay, a Computer Science undergraduate focused on AI, deep learning, computer vision, OCR, and assistive technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
