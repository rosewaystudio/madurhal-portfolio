/* app/layout.jsx — root layout with Google Fonts and global styles */

import { Playfair_Display, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import "../styles/portfolio.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "Mecca Durhal — Portfolio",
  description:
    "Essays and research at the intersection of identity, media, and how we talk about the things we love.",
  openGraph: {
    title: "Mecca Durhal — Portfolio",
    description:
      "Essays and research at the intersection of identity, media, and how we talk about the things we love.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
