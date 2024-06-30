import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {NextAuthProvider} from "@/app/Providers"

const poppins = Poppins({ subsets: ["latin"],weight:['400','500','600','700'],variable:'--font-poppins' });

export const metadata: Metadata = {
  title: "KoiKoi",
  description: "Online Ticketing for Manipur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <NextAuthProvider>
        {children}
        </NextAuthProvider>
        </body>
    </html>
  );
}
