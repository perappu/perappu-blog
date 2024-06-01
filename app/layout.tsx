import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cover from "../public/cover.png";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "perappu",
  description: "perappu's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-800 font-sans leading-normal tracking-normal text-white">
      <div className="w-full m-0 p-0 bg-cover bg-bottom border-b-2 border-slate-200" style={{ ['backgroundImage' as any]: `url(${cover.src})`, ['backgroundPosition' as any]: 'center' }}>
      <div className="container max-w-4xl mx-auto pt-10 text-center break-normal" style={{ ['height' as any]: '20vh', ['maxHeight' as any]: '460px' }}>
        <div className="bg-slate-700/90 w-2/4 inline-block pb-5 rounded-lg ring ring-slate-200 shadow-lg shadow-slate-800 mb-5">
          <p className="text-white font-extrabold text-3xl md:text-5xl text-shadow shadow-slate-800 mb-2">
            <a href="/">perappu</a></p>
          <p className="text-xl md:text-2xl text-white text-shadow">welcome 2 me blog</p>
        </div>
      </div>
    </div>
    <NavBar />
    <div className="container px-4 md:px-0 max-w-6xl mx-auto bg-slate-700 py-5 px-5 shadow-lg shadow-slate-800">
      <div className="mx-0 sm:mx-6">
      {children}
      </div>
    </div>
    <Footer />
      </body>
    </html>
  );
}
