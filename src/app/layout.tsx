import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./classless.css";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const poppins = Poppins({
  weight: "400",
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "SizeByte",
  description: "Beautiful Websites Made Simple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased dark:bg-slate-950`}>
        <div className="flex flex-col h-screen">
          <Header/>
          <main className="flex-grow pt-8">
            <Container>
              {children}
            </Container>
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
