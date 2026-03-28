import { Link } from "react-router-dom";
import { Camera, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-3 sm:px-4 py-10 sm:py-12 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-serif font-semibold text-xl">
              <Camera className="h-6 w-6 text-gold" />
              <span>Lumière Studio</span>
            </div>
            <p className="text-sm text-primary-foreground/80 max-w-md text-pretty">
              Photographe freelance spécialisé dans l'art de capturer vos moments précieux 
              avec créativité et élégance.
            </p>
            <div className="bg-gold/10 text-gold text-xs px-3 py-1 rounded inline-block">
            Site de démonstration by <a href="https://jf.genefty.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-light">JF | Genefty</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="inline-flex min-h-9 items-center hover:text-gold transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="inline-flex min-h-9 items-center hover:text-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="inline-flex min-h-9 items-center hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-flex min-h-9 items-center hover:text-gold transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-flex min-h-9 items-center hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-primary-foreground/80">Portraits</span></li>
              <li><span className="text-primary-foreground/80">Mariages</span></li>
              <li><span className="text-primary-foreground/80">Événements</span></li>
              <li><span className="text-primary-foreground/80">Corporate</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold" />
                <span>+33 X XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold" />
                <span>xxx@xxx.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gold" />
                <span>Perpignan, France</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-2 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-gold hover:text-gold-light hover:bg-primary-foreground/10 transition-colors touch-manipulation"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-gold hover:text-gold-light hover:bg-primary-foreground/10 transition-colors touch-manipulation"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-xs sm:text-sm text-primary-foreground/60 px-1">
          <p className="text-pretty max-w-3xl mx-auto">
            &copy; {new Date().getFullYear()} Lumière Studio. Tous droits réservés. | Site de démonstration by{" "}
            <a href="https://jf.genefty.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-light">
              JF | Genefty
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;