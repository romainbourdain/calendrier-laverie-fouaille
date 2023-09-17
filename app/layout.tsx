import Topbar from "@/components/Topbar";
import Provider from "@/contexts/Provider";
import "@/styles/index.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      <Provider>
        <body className={`${inter.className}`}>
          <Topbar />
          {children}
        </body>
      </Provider>
    </html>
  );
}
