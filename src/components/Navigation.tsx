import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Camera } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-serif font-semibold text-xl">
            <Camera className="h-6 w-6 text-gold" />
            <span>Lumière Studio</span>
            <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded">DEMO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isActive(item.path) ? "text-gold" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-primary">
              Réserver une séance
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-elegant">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block text-sm font-medium transition-colors hover:text-gold ${
                    isActive(item.path) ? "text-gold" : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="outline" size="sm" className="w-full border-gold text-gold hover:bg-gold hover:text-primary">
                Réserver une séance
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;