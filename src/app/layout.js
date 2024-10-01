import "./globals.css";
import SideBar from "@/components/navigation/SideBar";
import { SidebarProvider } from "./context/sidebarContext";
import { Inter } from "next/font/google";
import NavBar from "@/components/navigation/NavBar";

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
        <body className="lg:flex">
            <NavBar />
          <main className={"px-5 lg:px-14 pt-0 lg:pt-10 h-full w-full"}>
            {children}
          </main>
        </body>
      </html>
    </SidebarProvider>
  );
}
