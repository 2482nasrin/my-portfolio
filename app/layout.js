import './globals.css';

export const metadata = {
  metadataBase: new URL("https://nasrinakter.vercel.app"),
  title: "Nasrin | Web Developer Building Modern Web Applications",
  description: "A skilled full-stack developer focused on building modern web applications with PHP, Next.js, and Laravel.",
  icons: {
    icon: "/images/fav-icon.png",
  },
  
  // Facebook, WhatsApp & Open Graph Card Settings
  openGraph: {
    title: "Nasrin | Web Developer Building Modern Web Applications",
    description: "A skilled full-stack developer focused on building modern web applications with PHP, Next.js, and Laravel.",
    url: "https://nasrinakter.vercel.app",
    siteName: "Nasrin Portfolio",
    images: [
      {
        url: "https://nasrinakter.vercel.app/images/logo.png", // 👈 public/images-এ থাকা আপনার ছবির সঠিক নাম
        width: 1200,
        height: 630,
        alt: "Nasrin Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter & Social Large Image Card Settings
  twitter: {
    card: "summary_large_image",
    title: "Nasrin | Web Developer Building Modern Web Applications",
    description: "A skilled full-stack developer focused on building modern web applications with PHP, Next.js, and Laravel.",
    images: ["https://nasrinakter.vercel.app/images/logo.png"], // 👈 এখানেও একই ছবির লিঙ্ক
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