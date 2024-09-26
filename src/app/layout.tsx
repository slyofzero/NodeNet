import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Providers } from "@/components/blockchain";

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nimbus Dashboard",
  description: "Nimbus Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} `}>
        <Providers>
          <DefaultLayout>{children}</DefaultLayout>
        </Providers>
      </body>
    </html>
  );
}
