import type { Metadata } from "next";
import "@/app/ui/styles/globals.css";
import { ReactNode } from "react";
import SideNav from "@/app/ui/components/sidenav";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog for stuff",
};

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
