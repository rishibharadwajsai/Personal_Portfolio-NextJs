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
          name="description"
          content="I am an Electronics and Computer Engineering student at Vellore Institute of Technology, India, with a CGPA of 9.32/10.00. Skilled in Java, C/C++, Python, and web development (HTML/CSS, JavaScript, Bootstrap, NodeJs), I also work with Verilog and Git. My projects range from responsive websites to smart dental hygiene devices. As a member of IEEE Computer Society and Technical Team Member at Iothinc, VITC, I stay updated on industry trends and engage in coding competitions like BITWARS. Let's connect and explore technology together!"
        />
        <meta name="author" content="Rishi Bharadwaj Sai Lella" />
        <meta property="og:title" content="Rishi Bharadwaj Sai" />
        <meta
          property="og:image"
          content="https://rishibharadwajsai.pages.dev/path/favicon.ico"
        />
        <meta property="og:url" content="https://rishibharadwajsai.pages.dev" />
        <link rel="icon" type="image" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
