import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import ClientNavbarSwitcher from "./components/Navbar/ClientNavbarSwitcher";
import Footer from "./components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CSE Department | Home",
  description: "Computer Science and Engineering Department Website",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientNavbarSwitcher />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
