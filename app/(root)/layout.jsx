import Footer from "@/components/footer";
import Header from "@/components/header";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({ subsets: ["latin"], weight: ["600"] })

export const metadata = {
  verification: {
    google: 'aj5qNCtT8ncF31VlPFzzMtJ7fpd8lPDsv9yOqAU8tyE'
  }
}
export default function RootLayout({
  children,
}) {
  return (
    <div className={cn("flex h-screen flex-col",font.className)}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}