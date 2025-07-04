import type { Metadata } from "next";
import "./globals.css";
import Nav from "./Nav";
import StoreProvider from "./StoreProvide";

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
    <html lang="en">
      <StoreProvider>
        <body className="bg-[#F9FAFB]">
          <div className="h-screen">
            <Nav />
            {children}
          </div>
        </body>
      </StoreProvider>
    </html>
  );
}
