import './globals.css';

export const metadata = {
  metadataBase: new URL("https://nasrinakter.vercel.app"),
  title: "Nasrin | Web Developer Building Modern Web Applications",
  description: "A skilled full-stack developer focused on building modern web applications with PHP, Next.js, and Laravel.",
  icons: {
    icon: "/images/fav-icon.png",
  },
  openGraph: {
    title: "Nasrin | Web Developer Building Modern Web Applications",
    description: "A skilled full-stack developer focused on building modern web applications with PHP, Next.js, and Laravel.",
    url: "https://nasrinakter.vercel.app",
    siteName: "Nasrin Portfolio",
    images: [
      {
        url: "https://nasrinakter.vercel.app/images/profile.jpg", // অবশ্যই Full/Absolute Link ব্যবহার করুন
        width: 1200,
        height: 630,
        alt: "Nasrin Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#ff014f] selection:text-white">
        {children}
      </body>
    </html>
  );
}