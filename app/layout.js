'use client'
import "./globals.css";
import { Roboto } from "next/font/google"; 
import Header from "@/components/Header";


// ✅ Define the Roboto font before using it
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"], 
  variable: "--font-roboto", 
});

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
