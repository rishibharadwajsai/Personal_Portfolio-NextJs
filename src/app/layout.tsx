import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishi Bharadwaj Sai",
  description:
    "I am an Electronics and Computer Engineering student at Vellore Institute of Technology, India, with a CGPA of 9.32/10.00. Skilled in Java, C/C++, Python, and web development (HTML/CSS, JavaScript, Bootstrap, NodeJs), I also work with Verilog and Git. My projects range from responsive websites to smart dental hygiene devices. As a member of IEEE Computer Society and Technical Team Member at Iothinc, VITC, I stay updated on industry trends and engage in coding competitions like BITWARS. Let's connect and explore technology together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="sCsdhNdhfDLfKTvCn4fBCjg-JJdFWGSUwgFToUnsEV0"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "aed9c09e780a4be69877fb461ae92ebb"}'
        ></script>
      </body>
    </html>
  );
}
