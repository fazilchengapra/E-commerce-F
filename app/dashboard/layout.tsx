import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "./Sidebar";

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
        <div className="flex flex-row w-full"style={{ height: `calc(100vh - 55px)` }}>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
