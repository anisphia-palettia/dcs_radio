import type { Metadata } from "next";
import "../globals.css";
import ToastContainer from "@/components/ui/ToastContainer";

export const metadata: Metadata = {
  title: "Sahabat Setia Anda - DCS 1005.50 FM",
  description: "Radio DCS 1005.50 FM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
