import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant-beta",
  description: "The best restaurant in New York",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Header/>
      <Footer />
    </html>
  );
}
