import { headers } from 'next/headers';
import { DM_Sans, Instrument_Serif } from "next/font/google";
import Analytics from '@components/analytics';
import GTM from "@components/common/GTM";
import SiteFooter from "@components/layout/SiteFooter";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hdrs = await headers();
  const nonce = hdrs.get('x-nonce') || '';

  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <GTM nonce={nonce} />
      </head>
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable} bg-linen text-obsidian group/site flex min-h-dvh flex-col font-sans text-base antialiased`}
      >
        {children}
        <SiteFooter />
      </body>
      <Analytics />
    </html>
  );
}
