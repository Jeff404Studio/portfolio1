import { Camera, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-serif font-semibold text-xl">
              <Camera className="h-6 w-6 text-gold" />
              <span>Lumière Studio</span>
            </div>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              Photographe freelance spécialisé dans l'art de capturer vos moments précieux 
              avec créativité et élégance.
            </p>
            <div className="bg-gold/10 text-gold text-xs px-3 py-1 rounded inline-block">
            Site de démonstration by <a href="https://genefty.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-light">Genefty</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-gold transition-colors">Accueil</a></li>
              <li><a href="/services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-gold transition-colors">À propos</a></li>
              <li><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
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
            <div className="flex space-x-4 mt-4">
              <Instagram className="h-5 w-5 text-gold hover:text-gold-light cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gold hover:text-gold-light cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Lumière Studio. Tous droits réservés. | Site de démonstration by <a href="https://genefty.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-light">Genefty</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;