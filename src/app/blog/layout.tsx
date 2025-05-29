import type { Metadata } from "next";
import "../ui/styles/globals.css";
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
    <>
      <SideNav />
      <hr />
      {children}
    </>
  );
}
