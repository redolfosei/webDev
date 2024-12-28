import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";

const poppins = Poppins({
  weight: ["400","500","600","700","800"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "projectFam",
  description: "Your next last line to skyrocket your project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ResponsiveNav/>
        {children}</body>
    </html>
  );
}
