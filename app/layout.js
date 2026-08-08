import './globals.css';

export const metadata = {
  title: "Nasr - Portfolio",
  description: "Personal Portfolio Theme built with Next.js",
  icons: {
    icon: "/images/fav-icon.png",
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