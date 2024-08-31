import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextAuthProvider } from "@/app/Providers"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils";
// import  openGraphImage from '@/app/api/og'
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });

export const metadata = {
  title: {
    default: "KoiKoi-Booking App",
    template: `%s | Koikoi`
  },
  openGraph: {
    image:'https://koikoi.vercel.app/icon.png',
    title:"Koikoi-Booking App",
    description:"Leading Online Ticketing for Manipur's Famous Places like Kangla fort, Loktak Lake, Khongjom War Memorial",
  },
  image:'https://koikoi.vercel.app/icon.png',
  icons: { icon: '@/app/icon.png' },
  description: "Leading Online Ticketing for Manipur's Famous Places like Kangla fort, Loktak Lake, Khongjom War Memorial",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={cn("m-0 p-0",poppins.variable)}>
        <NextAuthProvider>
          {children}
          <Analytics />
          <SpeedInsights />
          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  );
}
