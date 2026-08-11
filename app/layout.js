import './globals.css';

export const metadata = {
  title: "Nasrin | Web Developer Building Modern Web Applications",
  description: "A skilled full-stack developer focused on building modern web applications with PHP, Next.js, and Laravel.",
  icons: {
    icon: "/images/fav-icon.png",
  },
  // Open Graph metadata 
  openGraph: {
    title: "Nasrin | Web Developer Building Modern Web Applications",
    description: "A skilled full-stack developer focused on building modern web applications with PHP, Next.js, and Laravel.",
    url: "https://nasrin.vercel.app",
    siteName: "Nasrin Portfolio",
    images: [
      {
        url: "/images/logo.png", 
        width: 1200,
        height: 630,
        alt: "Nasrin Portfolio Preview",
      },
    ],
    type: "website",
  },
  // Twitter Card Meta Data
  twitter: {
    card: "summary_large_image",
    title: "Nasrin | Web Developer Building Modern Web Applications",
    description: "A skilled full-stack developer focused on building modern web applications with PHP, Next.js, and Laravel.",
    images: ["/images/logo.png"],
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