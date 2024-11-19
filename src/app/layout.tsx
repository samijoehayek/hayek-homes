import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interLight = localFont({
  src: "./fonts/Inter-Light.ttf",
  variable: "--font-inter-light",
  weight: "100 900",
});
const interRegular = localFont({
  src: "./fonts/Inter-Regular.ttf",
  variable: "--font-inter-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hayek Homes",
  description: "Get your dream home today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interLight.variable} ${interRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
