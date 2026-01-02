import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/router";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <style jsx global>{`
        :root {
          --font-jakarta: ${jakarta.style.fontFamily};
        }
      `}</style>
      <main className={`${jakarta.variable} font-sans`}>
        {router.pathname === "/login" ? (
          <Component {...pageProps} />
        ) : (
          <>
            <Header />
            <div className="flex flex-col min-h-screen">
              <div className="flex-1 p-2 lg:p-4">
                <Component {...pageProps} />
                <Footer />
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
