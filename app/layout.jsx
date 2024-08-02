import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Poppins } from "next/font/google";
import "./globals.css";
import {NextAuthProvider} from "@/app/Providers"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils";
const poppins = Poppins({ subsets: ["latin"],weight:['400','500','600','700'],variable:'--font-poppins' });

export const metadata = {
  
  title: {default:"KoiKoi-Booking App",
  template:`%s | Koikoi`},
  icons:{icon:'@/app/icon.png'},
  description:"Leading Online Ticketing for Manipur's Famous Places like Kangla fort, Loktak Lake, Khongjom War Memorial",  
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={cn("m-0 p-0 overflow-hidden",poppins.variable)}>
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
