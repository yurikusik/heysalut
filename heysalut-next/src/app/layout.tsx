import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoConnect",
  description: "Connect with car sales professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Plus+Jakarta+Sans:wght@400;500;700;800"
        />
        <title>AutoConnect</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
      </head>
      <body style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
