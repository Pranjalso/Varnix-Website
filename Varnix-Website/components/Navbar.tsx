

'use client';
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  // Prevent body scroll and preserve scroll position when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
        }`}
        aria-label="Main Navigation"
      >
        {/* CONTAINER FIX */}
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 w-full">
            {/* Logo always left */}
            <Link href="/" className="font-bold text-xl text-black hover:text-pink-500 transition-colors duration-300 shrink-0">
              <Image
                src="/VARNIX.png"
                alt="Varnix Logo"
                width={120}
                height={40}
                className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8">
              {[{ name: "Home", href: "/" },
                { name: "About", href: "/about-us" },
                { name: "Our Services", href: "/our-service" },
                { name: "Our Works", href: "/our-works" },
                { name: "Blogs", href: "/blog" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base lg:text-lg text-black hover:text-pink-500 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop Contact Button */}
            <Link
              href="/contact-us"
              className="hidden md:block bg-pink-500 px-5 py-2 text-white rounded-full text-sm lg:text-base hover:bg-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button always right */}
            <button
              className="md:hidden ml-auto relative w-10 h-10 flex items-center justify-center focus:outline-none z-50"
              onClick={toggleMenu}
              aria-label="Open menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 w-6 h-0.5 bg-black transition-all duration-300 ${open ? 'rotate-45 top-2.5' : 'top-0'}`} />
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-black transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 w-6 h-0.5 bg-black transition-all duration-300 ${open ? '-rotate-45 top-2.5' : 'top-5'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Overlay and Menu (full screen, production quality) */}
        {/* Smooth mobile menu animation */}
        <div
          className={`md:hidden fixed inset-0 z-[100] transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', touchAction: 'none' }}
          onClick={closeMenu}
        />
        <div
          className={`md:hidden fixed inset-0 z-[101] flex transition-all duration-300 ease-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
          style={{ pointerEvents: open ? 'auto' : 'none', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-transform duration-300 ease-out h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between h-14 px-4 border-b border-gray-100 rounded-t-2xl bg-white/90">
                {/* Logo left in menu */}
                <Link href="/" className="shrink-0" onClick={closeMenu}>
                  <Image
                    src="/VARNIX.png"
                    alt="Varnix Logo"
                    width={95}
                    height={32}
                    className="h-7 w-auto"
                    priority
                  />
                </Link>
                {/* Close button right */}
                <button
                  className="w-9 h-9 flex items-center justify-center focus:outline-none relative"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <span className="block w-6 h-0.5 bg-black rotate-45 absolute"></span>
                  <span className="block w-6 h-0.5 bg-black -rotate-45 absolute"></span>
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center space-y-4 px-4 py-4">
                {[{ name: "Home", href: "/" },
                  { name: "About", href: "/about-us" },
                  { name: "Our Services", href: "/our-service" },
                  { name: "Our Works", href: "/our-works" },
                  { name: "Blogs", href: "/blog" },
                ].map((item, idx) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-xl font-semibold text-black hover:text-pink-500 transition-colors duration-300 text-center tracking-wide"
                    style={{ letterSpacing: '0.01em' }}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact-us"
                  onClick={closeMenu}
                  className="block w-full max-w-xs bg-pink-500 text-white text-center py-2.5 rounded-full font-medium hover:bg-pink-600 transition-colors duration-300 mt-2 text-base shadow-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
