import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "./Sidebar";
import NavItemMobile from "./NavItemMobile";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Only admin can access this dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F9FAFB]">
        <div
          className="lg:flex flex-row w-full"
          style={{ height: `calc(100vh - 55px)` }}
        >
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          <div className="block lg:hidden">
            <NavItemMobile />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
