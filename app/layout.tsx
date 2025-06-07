import type { Metadata } from "next";
import { Source_Code_Pro as FontSans } from "next/font/google";
import "./globals.css";

const fontSans=FontSans({
   variable:'--font-sans',
   subsets:['latin'],
   weight:['200','300','400','500','600','700','800','900'],
})

export const metadata: Metadata = {
  title: "AI-Powered PDF Summarization",
  description: "Summarize your PDF documents instantly using advanced AI technology. Fast, accurate, and easy to use.",
};  


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
