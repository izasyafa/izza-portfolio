"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "service", label: "Service" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Portfolio" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Deteksi section yang sedang aktif
      const sections = navigationItems.map(item => document.getElementById(item.id));
      let currentSection = "home";
      
      sections.forEach(section => {
        if (!section) return;
        
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk menangani klik pada item navigasi
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Navbar dengan efek scroll */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "py-0 bg-gray-900/95 backdrop-blur-md" 
          : "py-2 bg-gray-900"
      }`}>
        <div className={`mx-auto transition-all duration-500 ease-out ${
          isScrolled 
            ? "max-w-[1200px]" 
            : "max-w-[992px] w-[calc(100%-2rem)]"
        }`}>
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-16"
          } px-4 border-none backdrop-blur-[10px]`}>
            
            {/* Desktop Menu (left) */}
            <div className="hidden md:flex items-center gap-2">
              {navigationItems.slice(0, 2).map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavClick(item.id)}
                  className={`inline-flex items-center justify-center gap-2.5 px-6 py-2 h-auto rounded-[60px] transition-colors ${
                    activeSection === item.id
                      ? "bg-orange-400 text-white"
                      : "text-white hover:bg-white/10"
                  } ${isScrolled ? "scale-95" : ""}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Logo */}
            <div className="
              flex items-center gap-2.5
              md:absolute md:left-1/2 md:-translate-x-1/2
            ">
              <span className="text-3xl md:text-4xl font-semibold">Izza</span>
            </div>

            {/* Desktop Menu (right) */}
            <div className="hidden lg:flex items-center gap-2">
              {navigationItems.slice(2).map((item) => (
                <Button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  variant="ghost"
                  className={`inline-flex items-center justify-center gap-2.5 px-6 py-2 h-auto rounded-[60px] transition-colors ${
                    activeSection === item.id
                      ? "bg-orange-400 text-white"
                      : "text-white hover:bg-white/10"
                  } ${isScrolled ? "scale-95" : ""}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white ml-auto transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900 mx-4 mt-2 rounded-2xl shadow-lg flex flex-col items-center gap-4 py-6 z-50">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavClick(item.id)}
                className={`w-4/5 justify-center rounded-full py-3 ${
                  activeSection === item.id
                    ? "bg-orange-400 text-white"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;