import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Poppins } from "next/font/google";
import "./globals.css";
import {NextAuthProvider} from "@/app/Providers"
import { Toaster } from "@/components/ui/sonner"
const poppins = Poppins({ subsets: ["latin"],weight:['400','500','600','700'],variable:'--font-poppins' });

export const metadata = {
  title: {default:"KoiKoi-Booking App",
  template:`%s | Koikoi`},
  openGraph:{
    description: "Leading Online Ticketing for Manipur's Famous Places",
  },
  description:"Leading Online Ticketing for Manipur's Famous Places",
  
  keywords:["Koikoi","Booking Manipur","Manipur Booking","Manipur ticket booking","Manipur Tourism ","Koikoi Booking","Koikoi Booking App","Koikoi Kangla","Koikoi Manipur",]
  
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <NextAuthProvider>
        {children}
        <Analytics/>
        <SpeedInsights/>
        <Toaster/>
        </NextAuthProvider>
        </body>
    </html>
  );
}
