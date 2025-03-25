import "@/app/_styles/globals.css";
import { Coming_Soon, Manrope } from "next/font/google";
import { RangeProvider } from "./context/range";
export const metadata = {
  title: {
    template: "%s / The Advise Generator",
    default: "welcome/The Advise Generator",
  },
  description:
    "Advise generator is an app that can give you different advices on one click. it have over 10 million advice",
};

const Josefin = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Josefin.className} bg-accent-80 text-primary-100 flex flex-col min-h-screen antialiased relative`}
      >
        <div className="flex-1 px-8 py-12">
          <main className=" mx-auto overflow-hidden">
            <RangeProvider>{children}</RangeProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
