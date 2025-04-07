import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';

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
  authors: [{ name: "Rishi Bharadwaj Sai Lella" }],
  keywords:
    "Rishi Bharadwaj Sai, Rishi, Rishi Bharadwaj, Rishi Bharadwaj Lella, Rishi Bharadwaj Sai Lella, Electronics Engineering, Computer Engineering, VIT India, Java, C++, Python, Web Development, Verilog, Git, IEEE, Coding Competitions, Technology",
  robots: "index, follow",
  openGraph: {
    title: "Rishi Bharadwaj Sai - Electronics & Computer Engineering Student",
    description:
      "Electronics and Computer Engineering student at VIT, India. Skilled in Java, Python, web development, and more. Explore my projects and connect with me!",
    url: "https://rishibharadwajsai.vercel.app", // Replace with your actual site URL
    type: "website",
    images: [
      {
        url: "https://rishibharadwajsai.vercel.app/path/to/public/og-image.png", // Use a larger image (e.g., 1200x630) for OG
        width: 1200,
        height: 630,
        alt: "Rishi Bharadwaj Sai Profile",
      },
    ],
    siteName: "Rishi Bharadwaj Sai Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
