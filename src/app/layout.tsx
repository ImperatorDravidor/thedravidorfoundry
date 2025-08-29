import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Dravidor Foundry - Engineering Tomorrow's Paradigms",
  description: "The Dravidor Foundry bridges the gap between advanced research and real-world business needs, transforming frontier innovation into scalable solutions.",
  keywords: "technology commercialization, AI implementation, startup leadership, venture capital, innovation lab, research institution",
  authors: [{ name: "The Dravidor Foundry" }],
  openGraph: {
    title: "The Dravidor Foundry",
    description: "Engineering tomorrow's paradigms at the intersection of frontier research and commercial reality",
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
      <body className="bg-black text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}