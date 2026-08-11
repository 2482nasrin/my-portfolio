import './globals.css';

export const metadata = {
  metadataBase: new URL("https://your-portfolio.vercel.app"), // 👈 এখানে আপনার আসল Vercel Domain টি দিন
  title: "Nasrin | Web Developer Building Modern Web Applications",
  description: "A skilled full-stack developer focused on building modern web applications with PHP, Next.js, and Laravel.",
  icons: {
    icon: "/images/fav-icon.png",
  },
  openGraph: {
    title: "Nasrin | Web Developer Building Modern Web Applications",
    description: "A skilled full-stack developer focused on building modern web applications with PHP, Next.js, and Laravel.",
    url: "https://your-portfolio.vercel.app", // 👈 আপনার Vercel Domain
    siteName: "Nasrin Portfolio",
    images: [
      {
        url: "/images/profile.jpg", // 👈 public/images ফোল্ডারে থাকা আপনার ছবির সঠিক নাম ও পাথ দিন
        width: 1200,
        height: 630,
        alt: "Nasrin Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasrin | Web Developer Building Modern Web Applications",
    description: "A skilled full-stack developer focused on building modern web applications with PHP, Next.js, and Laravel.",
    images: ["/images/profile.jpg"], // 👈 এখানেও একই ছবির পাথ দিন
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