import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PenBox } from "lucide-react";
import { Handshake } from "lucide-react";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/components/query-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Management Appnovia",
  description: "Project Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen")}>
        <nav className="flex justify-between items-center">
          <Image src="/logo5.webp" alt="logo" width={152} height={56} />
          <div className="flex justify-end">
            <Link href="https://novia-teams.vercel.app">
              <Button className="flex items-center gap-2 border-solid border-2 border-white bg-black text-white hover:text-black ">
                <Handshake size={18} />
                <span className="hidden md:inline">noviaTeams</span>
              </Button>
            </Link>
            <Link href="https://project-mgnt-j-25rf.vercel.app/">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">noviaPlanner</span>
              </Button>
            </Link>
          </div>
        </nav>
        <QueryProvider>
          <Toaster />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
