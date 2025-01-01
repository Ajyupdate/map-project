import SidebarContent from "@/components/Layout.tsx/SideBar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div>
            <SidebarContent>{children}</SidebarContent>
            {/* <Box bg={"white"}>{children}</Box> */}
            {/* <main className="flex-1">
              <Navbar />
              <div className="p-6">{children}</div>
            </main> */}
          </div>
        </Providers>
        <script
          src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"
          async
        ></script>
      </body>
    </html>
  );
}
