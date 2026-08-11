import './globals.css';

export const metadata = {
  metadataBase: new URL("https://nasrinakter.vercel.app"), // 👈 এখানে আপনার আসল Vercel Domain URL টি অবশ্যই বসাবেন।
  title: "Nasrin | Web Developer Building Modern Web Applications",
  description: "A skilled full-stack developer focused on building modern web applications with PHP, Next.js, and Laravel.",
  icons: {
    icon: "/images/fav-icon.png",
  },
  
  // Open Graph (OG) metadata for Social Media (যেমন: Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "Nasrin | Web Developer Building Modern Web Applications",
    description: "A skilled full-stack developer focused on building modern web applications with PHP, Next.js, and Laravel.",
    url: "https://nasrinakter.vercel.app", // 👈 আপনার Vercel URL
    siteName: "Nasrin Portfolio",
    images: [
      {
        url: "/images/logo.png", // 👈 public/images ফোল্ডারে থাকা আপনার বড় ছবিটির সঠিক নাম ও পাথ দিন।
        width: 1200,
        height: 630,
        alt: "Nasrin Portfolio Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card metadata for Twitter
  twitter: {
    card: "summary_large_image", // 👈 এটি ব্যবহার করলে ছবিটি বড় কার্ড হিসেবে দেখাবে।
    title: "Nasrin | Web Developer Building Modern Web Applications",
    description: "A skilled full-stack developer focused on building modern web applications with PHP, Next.js, and Laravel.",
    images: ["/images/logo.png"], // 👈 এখানেও একই ছবি দিন
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