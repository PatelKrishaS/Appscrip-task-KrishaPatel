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
  title: "Appscrip Task",
  description: "Product Listing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className} style={{margin:0, padding:0}}>{children}</body>
    </html>
  );
}

export { inter };
