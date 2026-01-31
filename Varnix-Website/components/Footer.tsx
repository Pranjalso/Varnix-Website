"use client"; // Required for usePathname
import React from "react";
import Image from "next/image";
import Link from "next/link"; 
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

// Defining an interface for the navigation links for TypeScript
interface NavLink {
  name: string;
  href: string;
}

const Footer = () => {
  const pathname = usePathname();

  // This function checks if the current URL matches the link's destination
  const isActive = (path: string): boolean => pathname === path;

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Works", href: "/our-works" }, 
    { name: "Blogs", href: "/blog" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="bg-pink-50 text-[#232323] flex flex-col md:flex-row justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 sm:py-8 md:py-10 lg:py-12 mt-6 sm:mt-8 md:mt-10 w-full shadow-sm" aria-label="Footer">
      
      <div className="flex flex-col w-full md:w-2/5 lg:w-2/5 items-center md:items-start text-center md:text-left">
        <div className="mb-2 sm:mb-3 flex justify-center md:justify-start w-full">
          <Image 
            src="/VARNIX.png" 
            alt="Varnix Logo" 
            width={200} 
            height={70} 
            className="h-16 sm:h-15 md:h-12 lg:h-14 w-auto mx-auto md:mx-0"
          />
        </div>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 leading-relaxed">
          Great brands aren’t built overnight—they are thoughtfully crafted through intent, a strong sense of identity, and imagination that transforms ideas into lasting brand experiences.
        </p>
        
        <nav aria-label="Footer Navigation">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base lg:text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 ${
                  isActive(link.href) 
                    ? "text-pink-500 font-bold underline decoration-2 underline-offset-4" 
                    : "hover:text-pink-500 text-[#232323]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className="flex flex-col w-full md:w-2/5 lg:w-1/3 items-center md:items-start mt-4 md:mt-0">
        <div className="w-full flex flex-row justify-center md:flex-col md:justify-start gap-6 sm:gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2">Address</h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              Head Office – Noida (U.P.)<br />Corporate Office – Indore (M.P.)
            </p>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2">Contact Info</h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              +91-62006-71009<br />+91-70175-25996
            </p>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 mt-6">
          <a href="#" aria-label="Instagram" className="text-pink-500 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 transition"><FaInstagram /></a>
          <a href="#" aria-label="Facebook" className="text-pink-500 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 transition"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter" className="text-pink-500 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 transition"><FaTwitter /></a>
          <a href="#" aria-label="YouTube" className="text-pink-500 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 transition"><FaYoutube /></a>
          <a href="#" aria-label="WhatsApp" className="text-pink-500 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 transition"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;