import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/navigation/NavBar";
import { AppProvider } from "./context/AppContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Event Management app",
  description: "Dashboard for event management",
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en" className={`${inter.variable} font-sans`}>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
               document.documentElement.classList.add('dark')
               } else {
              document.documentElement.classList.remove('dark')
              }
              `,
            }}
          />
        </head>
        <body className="lg:flex bg-white dark:bg-darkBackground ">
          <NavBar />
          <main className={"px-5 lg:px-14 pt-0 lg:pt-10 h-full w-full"}>
            {children}
          </main>
        </body>
      </html>
    </AppProvider>
  );
}
