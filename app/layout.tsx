import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import NavBar from "./components/nav/NavBar";
//import { text } from 'stream/consumers'
import Footer from "./components/footer/Footer";

const google_font = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mechamongus",
  description: "PC Ecommerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${google_font.className} text-slate-700`}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
