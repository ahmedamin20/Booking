import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_compnent/NavBar/NavBar";
import Footer from "./_compnent/Footer/Footer";
import Card from "./_compnent/Card/Card";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {/* <div className="m-5"></div> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
