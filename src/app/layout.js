import "./globals.css";
import SideBar from "@/components/navBar/SideBar";
import { SidebarProvider } from "./context/sidebarContext";
import { Inter } from "next/font/google";

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
    <SidebarProvider>
      <html lang="en" className={`${inter.variable} font-sans`}>
        <body>
          <section className="flex">
            <nav className="fixed z-10 left-0 h-[calc(100vh-100px)]">
              <SideBar />
            </nav>
            <main className={"px-14 pt-10 h-full w-full"}>
              {children}
            </main>
          </section>
        </body>
      </html>
    </SidebarProvider>
  );
}
