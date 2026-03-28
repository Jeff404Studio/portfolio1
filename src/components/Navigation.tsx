import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Camera } from "lucide-react";
import "../nav-link.css";
import "../genefty-link.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center min-h-14 sm:min-h-16 py-1.5 sm:py-0 gap-2">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-wrap items-center gap-x-2 gap-y-1 font-serif font-semibold text-base sm:text-lg md:text-xl min-w-0 flex-1 md:flex-none"
          >
            <Camera className="h-5 w-5 sm:h-6 sm:w-6 text-gold shrink-0" aria-hidden />
            <span className="truncate">Lumière Studio</span>
            <span className="hidden min-[400px]:inline-flex text-xs bg-gold/10 text-gold px-2 py-1 rounded shrink-0">
              DEMO
            </span>
            <a
              href="https://jf.genefty.com"
              target="_blank"
              rel="noopener noreferrer"
              className="genefty-link hidden min-[520px]:inline-flex text-xs bg-gold/10 text-gold px-2 py-1 rounded shrink-0"
            >
              <span className="relative z-10">by JF | Genefty</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8 shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-sm font-medium ${
                  isActive(item.path) ? "text-gold" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gold text-gold hover:bg-gold hover:text-primary whitespace-nowrap"
                >
                  Réserver une séance
                </Button>
              </Link>
          </div>

          {/* Mobile / tablette : menu */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden min-h-11 min-w-11 shrink-0 touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-nav-menu"
            className="lg:hidden absolute left-0 right-0 top-full max-h-[min(70vh,calc(100dvh-3.5rem))] overflow-y-auto overscroll-contain bg-background border-b border-border shadow-elegant"
          >
            <div className="px-4 py-3 space-y-1 pb-[max(1rem,env(safe-area-inset-bottom))]">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex min-h-11 items-center rounded-md px-2 text-base font-medium transition-colors hover:bg-muted hover:text-gold active:bg-muted ${
                    isActive(item.path) ? "text-gold bg-muted/50" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" className="block pt-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full min-h-11 border-gold text-gold hover:bg-gold hover:text-primary touch-manipulation"
                >
                  Réserver une séance
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;