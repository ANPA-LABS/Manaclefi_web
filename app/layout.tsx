import type { Metadata } from "next";
import { Geist, Geist_Mono, Stack_Sans_Text } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import { Toaster } from "@/components/ui/sonner";

const bowby_one_sc = Stack_Sans_Text({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Manacle",
  description: "Auto-pilot onchain fidelity for you family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="en"
        className={`${bowby_one_sc.className} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}
          <Toaster />
        </body>
      </html>
      <Footer />
    </>
  );
}
