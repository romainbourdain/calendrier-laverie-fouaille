import Topbar from "@/components/Topbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laverie - TPS",
  description: "Application pour la gestion de la laverie de TPS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
