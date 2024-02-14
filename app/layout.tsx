import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import NavBar from "./components/nav/NavBar";
//import { text } from 'stream/consumers'
import Footer from "./components/footer/Footer";
import CartProvider from "@/provider/CartProvider";
import { Toaster } from "react-hot-toast";

const google_font = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Mechamongus",
  description: "PC Ecommerce",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${google_font.className} text-slate-700`}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51,65,85)",
              color: "#fff",
            },
          }}
        />
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
