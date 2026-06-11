import type { Metadata } from "next";
import "./globals.css";
import { ScrollLinked } from "@/components/ui/scroll-linked-spring-animation";

export const metadata: Metadata = {
  title: "Reac Studio",
  description: "Marketing, desarrollo web y automatizaciones para negocios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body>
        <ScrollLinked />
        {children}
      </body>
    </html>
  );
}
