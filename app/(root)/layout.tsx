import Footer from "@/components/footer";
import Header from "@/components/header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex h-screen flex-col">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
  }