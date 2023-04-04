"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { Session } from "inspector";
interface IProps {
  children: ReactNode;
  session: any
}
export default function RootLayout({ children, session }: IProps) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session= {session}>
          <Navbar />
          <div className={"  h-screen "}>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}