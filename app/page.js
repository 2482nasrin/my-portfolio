"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("HOME");
  const [activeTab, setActiveTab] = useState("education");

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "PORTFOLIO", href: "#portfolio" },
    { name: "RESUME", href: "#resume" },
    { name: "TESTIMONIAL", href: "#testimonial" },
    { name: "CLIENTS", href: "#clients" },
    { name: "PRICING", href: "#pricing" },
    { name: "BLOG", href: "#blog" },
    { name: "CONTACTS", href: "#contacts" },
  ];

  // Portfolio items
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      category: "STANDARD",
      likes: 1922,
      isLiked: false,
      title: "Ecommerce Dashboard Application Development.",
      image: "/images/portfolio/portfolio-1.png",
    },
    {
      id: 2,
      category: "IMAGE",
      likes: 600,
      isLiked: false,
      title: "Online Food Design And Development.",
      image: "/images/portfolio/portfolio-2.png",
    },
    {
      id: 3,
      category: "EXTERNAL LINK",
      likes: 907,
      isLiked: false,
      title: "Travel Website Design And Development.",
      image: "/images/portfolio/portfolio-travel-03.jpg",
    },
    {
      id: 4,
      category: "GALLERY",
      likes: 1102,
      isLiked: false,
      title: "Workout Website Design And Development.",
      image: "/images/portfolio/portfolio-4.png",
    },
    {
      id: 5,
      category: "IMAGE",
      likes: 1013,
      isLiked: false,
      title: "Web Application Landing Page Design.",
      image: "/images/portfolio/portfolio-5.png",
    },
    {
      id: 6,
      category: "STANDARD",
      likes: 450,
      isLiked: false,
      title: "Restaurant Website Design & Development.",
      image: "/images/portfolio/portfolio-6.png",
    },
  ]);

  // Skills for Professional Skills tab
  const leftSkills = [
    { name: "HTML", percent: 100 },
    { name: "CSS", percent: 95 },
    { name: "JAVASCRIPT", percent: 85 },
    { name: "PHP", percent: 80 },
  ];

  const rightSkills = [
    { name: "BOOTSTRAP", percent: 95 },
    { name: "NEXT.JS", percent: 75 },
    { name: "LARAVEL", percent: 65 },
    { name: "MYSQL", percent: 70 },
  ];

  const handleLikeToggle = (id) => {
    setPortfolioItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            likes: item.isLiked ? item.likes - 1 : item.likes + 1,
            isLiked: !item.isLiked,
          };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-[#212428] text-[#878e99] relative scroll-smooth flex flex-col justify-between">
      <div>
        {/* ================= HEADER SECTION ================= */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 lg:px-12 ${
            isScrolled
              ? "py-4 bg-[#212428]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              : "py-6 bg-[#212428]"
          }`}
        >
          <div className="max-w-[1300px] mx-auto flex justify-between items-center">
            {/* Header Image + Logo link to HOME */}
            <Link
              href="#home"
              onClick={() => setActiveSection("HOME")}
              className="flex items-center gap-3 group outline-none focus:outline-none"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#262a2e] shadow-shadow1 transition-colors duration-300">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={44}
                  height={44}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-white font-bold tracking-widest text-xl transition-colors duration-300">
                NASR
              </span>
            </Link>

            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveSection(link.name)}
                    className={`text-xs font-semibold tracking-wider transition-colors duration-300 py-2 outline-none focus:outline-none ${
                      isActive
                        ? "text-white"
                        : "text-[#c4cfde] hover:text-[#ff014f]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden xl:flex items-center gap-4">
              <Link
                href="#contacts"
                className="px-6 py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-[#ff014f] text-xs font-semibold uppercase tracking-wider rounded-md shadow-shadow1 hover:-translate-y-1 transition-all duration-300 border border-[#262a2e] outline-none focus:outline-none">
                HIRE ME
              </Link>
            </div>

            <div className="flex xl:hidden items-center gap-3">
              <Link
                href="#contacts"
                className="px-4 py-2 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-[#ff014f] text-xs font-semibold uppercase tracking-wider rounded-md shadow-shadow1 border border-[#262a2e] outline-none focus:outline-none">
                HIRE ME
              </Link>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-3 bg-[#1e2024] text-[#ff014f] rounded-full shadow-shadow1 border border-[#262a2e] outline-none focus:outline-none"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* ================= MOBILE SIDEBAR ================= */}
        <div
          className={`fixed inset-0 bg-black/70 z-50 transition-opacity duration-300 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          className={`fixed top-0 left-0 bottom-0 w-[80%] max-w-[360px] bg-[#191b1e] z-50 p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center pb-6 border-b border-[#212428]">
            <Link
              href="#home"
              onClick={() => {
                setActiveSection("HOME");
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-3 outline-none focus:outline-none group"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#1e2024] group-hover:border-[#ff014f] transition-colors duration-300">
                <Image
                  src="/images/my-profile.jpg"
                  alt="Profile"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-3 bg-[#1e2024] text-[#ff014f] rounded-full shadow-shadow1 border border-[#262a2e] outline-none focus:outline-none"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <p className="text-sm text-[#878e99] my-6 leading-relaxed">
            Continuously exploring technology, improving coding skills, and building reliable web experiences for clients.
          </p>

          <nav className="flex flex-col gap-4 border-b border-[#212428] pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setIsMenuOpen(false);
                }}
                className={`text-sm font-semibold transition-colors tracking-wider uppercase outline-none focus:outline-none ${
                  activeSection === link.name
                    ? "text-[#ff014f]"
                    : "text-[#c4cfde] hover:text-[#ff014f]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-6">
            <span className="text-xs font-bold text-[#c4cfde] uppercase tracking-widest block mb-4">
              FIND WITH ME
            </span>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 border border-[#262a2e] text-[#c4cfde] hover:text-[#ff014f] transition-all outline-none focus:outline-none"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 border border-[#262a2e] text-[#c4cfde] hover:text-[#ff014f] transition-all outline-none focus:outline-none"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 border border-[#262a2e] text-[#c4cfde] hover:text-[#ff014f] transition-all outline-none focus:outline-none"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 border border-[#262a2e] text-[#c4cfde] hover:text-[#ff014f] transition-all outline-none focus:outline-none"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </aside>

        {/* ================= HERO SECTION ================= */}
        <section
          id="home"
          className="px-4 lg:px-12 pt-28 lg:pt-36 pb-12 lg:pb-20 max-w-[1300px] mx-auto scroll-mt-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
              <span className="text-xs sm:text-sm font-medium tracking-[3px] text-[#c4cfde] uppercase mb-4">
                WELCOME TO MY WORLD
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Hi, I’m <span className="text-[#ff014f]">Nasrin Akter</span>
                <br />
                <span className="text-white">a Professional Coder.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#878e99] leading-relaxed mb-10 max-w-[600px]">
                I love exploring new technologies and continuously expanding my knowledge. I'm dedicated to writing clean, efficient code and creating web applications that provide a great user experience. Quality and client satisfaction are always my priorities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#121415]">
                <div>
                  <span className="text-xs font-semibold text-[#c4cfde] uppercase tracking-widest block mb-5">
                    FIND WITH ME
                  </span>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-14 h-14 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 hover:-translate-y-1 transition-all border border-[#262a2e] text-[#c4cfde] outline-none focus:outline-none"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-14 h-14 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 hover:-translate-y-1 transition-all border border-[#262a2e] text-[#c4cfde] outline-none focus:outline-none"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-14 h-14 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 hover:-translate-y-1 transition-all border border-[#262a2e] text-[#c4cfde] outline-none focus:outline-none"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 hover:-translate-y-1 transition-all border border-[#262a2e] text-[#c4cfde] outline-none focus:outline-none"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-[#c4cfde] uppercase tracking-widest block mb-5">
                    BEST SKILL ON
                  </span>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-14 h-14 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 hover:-translate-y-1 transition-all border border-[#262a2e] p-3.5 group outline-none focus:outline-none"
                      title="Next.js"
                    >
                      <img
                        src="https://cdn.simpleicons.org/nextdotjs/white"
                        alt="Next.js"
                        className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-14 h-14 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 hover:-translate-y-1 transition-all border border-[#262a2e] p-3.5 group outline-none focus:outline-none"
                      title="Laravel"
                    >
                      <img
                        src="https://cdn.simpleicons.org/laravel/FF2D20"
                        alt="Laravel"
                        className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-14 h-14 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 hover:-translate-y-1 transition-all border border-[#262a2e] p-3 group outline-none focus:outline-none"
                      title="PHP"
                    >
                      <img
                        src="https://cdn.simpleicons.org/php/777BB4"
                        alt="PHP"
                        className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FIXED IMAGE SECTION HERE */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-[450px] bg-gradient-to-b from-[#1e2024] to-[#17191c] rounded-xl shadow-shadow1 p-4 border border-[#262a2e]">
                <div className="relative w-full rounded-lg overflow-hidden bg-[#1c1d20] aspect-[4/5]">
                  <Image
                    src="/images/my-profile.jpg"
                    alt="Profile"
                    width={450}
                    height={562}
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ME SECTION ================= */}
        <section
          id="about"
          className="px-4 lg:px-12 py-16 lg:py-24 max-w-[1300px] mx-auto border-t border-[#121415] scroll-mt-28"
        >
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#ff014f] uppercase block mb-3">
              GET TO KNOW ME
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#c4cfde] tracking-tight">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-[#1e2024] to-[#23272b] border border-[#262a2e] p-8 rounded-xl shadow-shadow1 text-center flex flex-col justify-center items-center hover:-translate-y-1 transition-all duration-300 min-h-[140px]">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#ff014f] mb-3">
                  2+
                </span>
                <p className="text-xs sm:text-sm font-medium text-[#c4cfde]">
                  Years of Experience
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#1e2024] to-[#23272b] border border-[#262a2e] p-8 rounded-xl shadow-shadow1 text-center flex flex-col justify-center items-center hover:-translate-y-1 transition-all duration-300 min-h-[140px]">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#ff014f] mb-3">
                  1+
                </span>
                <p className="text-xs sm:text-sm font-medium text-[#c4cfde]">
                  Laravel project done
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#1e2024] to-[#23272b] border border-[#262a2e] p-8 rounded-xl shadow-shadow1 text-center flex flex-col justify-center items-center hover:-translate-y-1 transition-all duration-300 min-h-[140px]">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#ff014f] mb-3">
                  5+
                </span>
                <p className="text-xs sm:text-sm font-medium text-[#c4cfde]">
                  Custom project
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#1e2024] to-[#23272b] border border-[#262a2e] p-8 rounded-xl shadow-shadow1 text-center flex flex-col justify-center items-center hover:-translate-y-1 transition-all duration-300 min-h-[140px]">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#ff014f] mb-3">
                  12+
                </span>
                <p className="text-xs sm:text-sm font-medium text-[#c4cfde]">
                  Others project done
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center items-start lg:pl-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Enthusiastic about <br className="hidden sm:inline" />
                <span className="text-white">innovative web technologies.</span>
              </h3>

              <p className="text-sm sm:text-base text-[#878e99] leading-relaxed mb-8 max-w-[550px]">
                I’m Nasrin Akter, a Junior Web Developer with 2+ years of hands-on experience. I’m passionate about building modern, responsive, and user-friendly websites while exploring new technologies.
Currently, I focus on creating engaging AI-powered experiences and efficient web solutions.
              </p>

              <a
                href="/pdf/nasrin_cv.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-[#ff014f] text-xs font-bold uppercase tracking-wider rounded-md shadow-shadow1 hover:-translate-y-1 transition-all border border-[#262a2e] outline-none focus:outline-none"  target="_blank" 
  rel="noopener noreferrer"
              >
                DOWNLOAD CV
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ================= PORTFOLIO SECTION ================= */}
        <section
          id="portfolio"
          className="px-4 lg:px-12 py-16 lg:py-24 max-w-[1300px] mx-auto border-t border-[#121415] scroll-mt-28"
        >
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#ff014f] uppercase block mb-3">
              VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#c4cfde] tracking-tight">
              My Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-2xl border border-[#262a2e] shadow-shadow1 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Link */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#121415] mb-5">
                    <Link href={item.link || `#portfolio-${item.id}`} className="block w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                        </svg>
                      </div>
                    </Link>
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] font-semibold text-[#ff014f] uppercase tracking-wider">
                      {item.category}
                    </span>

                    <button
                      onClick={() => handleLikeToggle(item.id)}
                      className={`flex items-center gap-1.5 text-xs font-medium transition-all duration-300 p-1 rounded-md outline-none focus:outline-none ${
                        item.isLiked
                          ? "text-[#ff014f] scale-105"
                          : "text-[#878e99] hover:text-[#ff014f]"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          item.isLiked ? "fill-[#ff014f] scale-110" : "fill-current"
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span>{item.likes}</span>
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-[#c4cfde] group-hover:text-[#ff014f] transition-colors duration-300 leading-snug">
                    <Link href={item.link || `#portfolio-${item.id}`} className="flex items-center justify-between outline-none focus:outline-none">
                      <span>{item.title}</span>
                      <span className="text-[#ff014f] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        ↗
                      </span>
                    </Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= RESUME SECTION WITH TAB SYSTEM ================= */}
        <section
          id="resume"
          className="px-4 lg:px-12 py-16 lg:py-24 max-w-[1300px] mx-auto border-t border-[#121415] scroll-mt-28"
        >
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#ff014f] uppercase block mb-3">
              2+ YEARS OF EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#c4cfde] tracking-tight">
              My Resume
            </h2>
          </div>

          <div className="bg-[#1e2024] p-2 rounded-xl border border-[#262a2e] shadow-shadow1 mb-16 max-w-[700px] mx-auto">
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "education", label: "Education" },
                { id: "skills", label: "Professional Skills" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 uppercase tracking-wider text-center outline-none focus:outline-none focus:ring-0 select-none ${
                    activeTab === tab.id
                      ? "bg-[#212428] text-[#ff014f] shadow-shadow1 border border-[#262a2e]"
                      : "text-[#c4cfde] hover:text-[#ff014f]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "education" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  {/* <span className="text-xs font-semibold text-[#ff014f] tracking-widest uppercase">
                    1998 - 2010
                  </span> */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    Education Quality
                  </h3>
                </div>

                <div className="relative pl-6 border-l-2 border-[#121415] flex flex-col gap-8">
                  <div className="relative group bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-xl border border-[#262a2e] shadow-shadow1 hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute -left-[31px] top-10 w-4 h-4 bg-[#212428] border-2 border-[#121415] rounded-full group-hover:bg-[#ff014f] transition-colors" />
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          BSc in Computer Science
                        </h4>
                        <p className="text-xs text-[#878e99]">
                          Sonargoan University (2023 - 2024)
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-[#212428] text-[#ff014f] text-xs font-bold rounded-md border border-[#262a2e] shadow-shadow1">
                        3.41/4
                      </span>
                    </div>
                    <p className="text-sm text-[#878e99] leading-relaxed">
                      Completed a Bachelor’s degree in Computer Science at Sonargaon University, gaining strong technical knowledge and practical skills for professional success.
                    </p>
                  </div>

                  <div className="relative group bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-xl border border-[#262a2e] shadow-shadow1 hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute -left-[31px] top-10 w-4 h-4 bg-[#212428] border-2 border-[#121415] rounded-full group-hover:bg-[#ff014f] transition-colors" />
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          Diploma in Engineering
                        </h4>
                        <p className="text-xs text-[#878e99]">
                          Dhaka Mohila Polytechnic Institute (2015 - 2016)
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-[#212428] text-[#ff014f] text-xs font-bold rounded-md border border-[#262a2e] shadow-shadow1">
                        3.34/4
                      </span>
                    </div>
                    <p className="text-sm text-[#878e99] leading-relaxed">
                      Studied Engineering at Dhaka Mohila Polytechnic Institute, gaining valuable technical knowledge, practical experience, problem-solving abilities, and skills for future professional opportunities.
                    </p>
                  </div>

                  <div className="relative group bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-xl border border-[#262a2e] shadow-shadow1 hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute -left-[31px] top-10 w-4 h-4 bg-[#212428] border-2 border-[#121415] rounded-full group-hover:bg-[#ff014f] transition-colors" />
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          Secondary School Certificate (S.S.C)
                        </h4>
                        <p className="text-xs text-[#878e99]">
                          Bajitpur Razzakunnesa Pilot Girls' High School
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-[#212428] text-[#ff014f] text-xs font-bold rounded-md border border-[#262a2e] shadow-shadow1">
                        5.00/5
                      </span>
                    </div>
                    <p className="text-sm text-[#878e99] leading-relaxed">
                      Completed secondary school education at Bajitpur Razzakunnesa Pilot Girls' High School, building a strong academic foundation and essential skills for future studies success.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  {/* <span className="text-xs font-semibold text-[#ff014f] tracking-widest uppercase">
                    2010 - 2022
                  </span> */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    Job Experience
                  </h3>
                </div>

                <div className="relative pl-6 border-l-2 border-[#121415] flex flex-col gap-8">
                  <div className="relative group bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-xl border border-[#262a2e] shadow-shadow1 hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute -left-[31px] top-10 w-4 h-4 bg-[#212428] border-2 border-[#121415] rounded-full group-hover:bg-[#ff014f] transition-colors" />
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          Jr. Software Engineer
                        </h4>
                        <p className="text-xs text-[#878e99]">
                          Againsoft Way of Innovation - (2023 - Present)
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-[#212428] text-[#ff014f] text-xs font-bold rounded-md border border-[#262a2e] shadow-shadow1">
                        DHAKA
                      </span>
                    </div>
                    <p className="text-sm text-[#878e99] leading-relaxed">
                      Againsoft’s hiring process focuses on finding passionate people, supporting their growth, and creating a workplace where every team member truly matters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
              <div>
                <span className="text-xs font-semibold text-[#ff014f] tracking-widest uppercase block mb-2">
                  Features
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                  Development Skill
                </h3>

                <div className="flex flex-col gap-8">
                  {leftSkills.map((skill, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      <div className="flex justify-between items-center text-xs sm:text-sm font-semibold tracking-wider text-[#c4cfde] uppercase">
                        <span>{skill.name}</span>
                        <span>{skill.percent}%</span>
                      </div>
                      <div className="w-full h-3 bg-[#121415] rounded-full overflow-hidden p-0.5 shadow-inner border border-[#262a2e]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#6b11ff] via-[#d000ff] to-[#ff014f] transition-all duration-1000 ease-out"
                          style={{ width: `${skill.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#ff014f] tracking-widest uppercase block mb-2">
                  Features
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                  Framework & Database
                </h3>

                <div className="flex flex-col gap-8">
                  {rightSkills.map((skill, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      <div className="flex justify-between items-center text-xs sm:text-sm font-semibold tracking-wider text-[#c4cfde] uppercase">
                        <span>{skill.name}</span>
                        <span>{skill.percent}%</span>
                      </div>
                      <div className="w-full h-3 bg-[#121415] rounded-full overflow-hidden p-0.5 shadow-inner border border-[#262a2e]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#6b11ff] via-[#d000ff] to-[#ff014f] transition-all duration-1000 ease-out"
                          style={{ width: `${skill.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ================= CONTACTS SECTION ================= */}
        <section
          id="contacts"
          className="px-4 lg:px-12 py-16 lg:py-24 max-w-[1300px] mx-auto border-t border-[#121415] scroll-mt-28"
        >
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#ff014f] uppercase block mb-3">
              CONTACT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#c4cfde] tracking-tight">
              Contact With Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Side: Personal Info Card */}
            <div className="lg:col-span-5 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 sm:p-8 rounded-2xl border border-[#262a2e] shadow-shadow1 flex flex-col justify-between h-full">
              <div>
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6 border border-[#262a2e]">
                  <Image
                    src="/images/contact-profile.jpg"
                    alt="Nasrin Akter"
                    width={500}
                    height={280}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Nasrin Akter
                </h3>
                <p className="text-sm font-medium text-[#878e99] mb-5">
                  Jr. Software Developer
                </p>

                <p className="text-sm text-[#878e99] leading-relaxed mb-6">
                  I am available for freelance work. Connect with me via and call in to my account.
                </p>

                <div className="flex flex-col gap-2 text-sm text-[#878e99] mb-6">
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+8801966308612"
                      className="text-[#c4cfde] hover:text-[#ff014f] transition-colors"
                    >
                      +88019 663 086 12
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:nasrin2482@gmail.com"
                      className="text-[#c4cfde] hover:text-[#ff014f] transition-colors"
                    >
                      nasrin2482@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-semibold text-[#c4cfde] uppercase tracking-widest block mb-4">
                  FIND WITH ME
                </span>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 hover:-translate-y-1 transition-all border border-[#262a2e] text-[#c4cfde] hover:text-[#ff014f] outline-none focus:outline-none"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 hover:-translate-y-1 transition-all border border-[#262a2e] text-[#c4cfde] hover:text-[#ff014f] outline-none focus:outline-none"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 hover:-translate-y-1 transition-all border border-[#262a2e] text-[#c4cfde] hover:text-[#ff014f] outline-none focus:outline-none"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-.2063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-md flex items-center justify-center shadow-shadow1 hover:-translate-y-1 transition-all border border-[#262a2e] text-[#c4cfde] hover:text-[#ff014f] outline-none focus:outline-none"
                    title="GitHub"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:col-span-7 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 sm:p-10 rounded-2xl border border-[#262a2e] shadow-shadow1 h-full flex flex-col justify-between">
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 h-full justify-between">
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-semibold text-[#c4cfde] uppercase tracking-wider">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className="w-full bg-[#191b1e] border border-[#262a2e] rounded-lg px-5 py-4 text-sm text-[#c4cfde] focus:outline-none focus:border-[#ff014f] transition-colors shadow-inner"
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-semibold text-[#c4cfde] uppercase tracking-wider">
                        PHONE NUMBER
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full bg-[#191b1e] border border-[#262a2e] rounded-lg px-5 py-4 text-sm text-[#c4cfde] focus:outline-none focus:border-[#ff014f] transition-colors shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-semibold text-[#c4cfde] uppercase tracking-wider">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full bg-[#191b1e] border border-[#262a2e] rounded-lg px-5 py-4 text-sm text-[#c4cfde] focus:outline-none focus:border-[#ff014f] transition-colors shadow-inner"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-semibold text-[#c4cfde] uppercase tracking-wider">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      className="w-full bg-[#191b1e] border border-[#262a2e] rounded-lg px-5 py-4 text-sm text-[#c4cfde] focus:outline-none focus:border-[#ff014f] transition-colors shadow-inner"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-semibold text-[#c4cfde] uppercase tracking-wider">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      className="w-full bg-[#191b1e] border border-[#262a2e] rounded-lg p-5 text-sm text-[#c4cfde] focus:outline-none focus:border-[#ff014f] transition-colors shadow-inner resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-[#c4cfde] hover:text-[#ff014f] text-xs font-bold uppercase tracking-widest rounded-lg border border-[#262a2e] shadow-shadow1 hover:-translate-y-1 transition-all duration-300 mt-4 outline-none focus:outline-none"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* ================= FOOTER SECTION ================= */}
      <footer className="w-full py-8 px-4">
        <div className="max-w-[1300px] mx-auto border-t border-[#121415] pt-8 text-center">
          <p className="text-sm font-medium text-[#878e99]">
            © 2026. All rights reserved by{" "}
            <a
              href="#"
              className="text-[#c4cfde] hover:text-[#ff014f] transition-colors duration-300"
            >
              Nasrin
            </a>
          </p>
        </div>
      </footer>

      {/* ================= SCROLL TO TOP BUTTON ================= */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 w-12 h-12 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-[#ff014f] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#262a2e] hover:-translate-y-1 transition-all duration-300 outline-none focus:outline-none group"
          title="Scroll to Top"
        >
          <svg
            className="w-5 h-5 fill-current transition-transform duration-300 group-hover:-translate-y-0.5"
            viewBox="0 0 24 24"
          >
            <path d="M12 4l-8 8h5v8h6v-8h5z" />
          </svg>
        </button>
      )}
    </main>
  );
}