import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./favicon.ico"

// Import and configure the fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the page
export const metadata: Metadata = {
  title: "SDG Classroom",
  description: "Generated by create next app",
  icons: {
    icon: "./favicon.ico ",
  },
  openGraph: {
    title: 'SDG Classroom', // Open Graph title
    description: 'Classroom for SDG', // OG description
    url: '', // Your app URL
    images: [
      {
        url: '/favicon.ico', // Image for social link previews
        width: 32,
        height: 32,
        alt: 'My App Logo',
      },
    ],
  },
};

// RootLayout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-black text-white min-h-screen">
        {/* Header */}
        <header className="flex justify-end items-center p-4">
          <nav>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Sign In
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}