import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Discover Our Products | mettā muse",
  description: "Shop our curated collection of handcrafted products. Find unique items for men, women and kids at mettā muse.",
  keywords: "handcrafted products, sustainable fashion, metta muse, shop online",
  openGraph: {
    title: "Discover Our Products | mettā muse",
    description: "Shop our curated collection of handcrafted products.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className} style={{margin:0, padding:0}}>{children}</body>
    </html>
  );
}

export { inter };
