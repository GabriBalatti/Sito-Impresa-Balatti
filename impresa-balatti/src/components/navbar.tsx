import React, { useState, useEffect } from "react";
import { Menu, X, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Chi siamo", href: "#chi-siamo" },
    { name: "Servizi", href: "#servizi" },
    { name: "Lavori", href: "#lavori" },
    { name: "Perché noi", href: "#perche-sceglierci" },
    { name: "Contatti", href: "#contatti" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className={`flex items-center gap-2 font-display text-2xl font-bold tracking-tight ${
              isScrolled ? "text-primary" : "text-white"
            }`}
            data-testid="link-home"
          >
            <HardHat className="w-8 h-8" />
            <span>Impresa Balatti</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
                }`}
                data-testid={`link-${link.name.toLowerCase().replace(" ", "-")}`}
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              variant={isScrolled ? "default" : "secondary"}
              className={isScrolled ? "" : "bg-white text-primary hover:bg-white/90"}
              data-testid="button-nav-contact"
            >
              <a href="#contatti">Richiedi Preventivo</a>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground font-medium py-2 px-4 hover:bg-muted rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full mt-2" onClick={() => setMobileMenuOpen(false)}>
            <a href="#contatti">Richiedi Preventivo</a>
          </Button>
        </div>
      )}
    </header>
  );
}
