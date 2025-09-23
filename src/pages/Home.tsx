import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Camera, Heart, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-photography.jpg";
import weddingImage from "@/assets/wedding-sample.jpg";
import portraitImage from "@/assets/portrait-sample.jpg";
import eventImage from "@/assets/event-sample.jpg";

const Home = () => {
  const services = [
    {
      id: 1,
      icon: <Camera className="h-10 w-10" />,
      title: "Portraits Professionnels",
      description: "Séances portraits personnalisées pour révéler votre personnalité unique. Que ce soit pour un book professionnel, des photos de famille ou un portrait artistique.",
      image: portraitImage,
      duration: "1-2h",
      price: "À partir de 250€",
      includes: [
        "Consultation préalable",
        "Séance en studio ou extérieur", 
        "20-30 photos retouchées",
        "Galerie en ligne privée"
      ],
      popular: false
    },
    {
      id: 2,
      icon: <Heart className="h-10 w-10" />,
      title: "Mariages & Événements Privés",
      description: "Immortalisez le plus beau jour de votre vie avec des photos authentiques et émotionnelles. Couverture complète de votre mariage ou événement spécial.",
      image: weddingImage,
      duration: "Journée complète",
      price: "À partir de 1200€",
      includes: [
        "Rencontre préparatoire",
        "Couverture 8-12h",
        "200+ photos retouchées",
        "Album photo premium",
        "Galerie en ligne"
      ],
      popular: true
    },
    {
      id: 3,
      icon: <Users className="h-10 w-10" />,
      title: "Événements Corporate",
      description: "Reportage photo professionnel pour vos événements d'entreprise, conférences, inaugurations et soirées corporate.",
      image: eventImage,
      duration: "2-6h",
      price: "À partir de 450€",
      includes: [
        "Briefing événement",
        "Couverture discrète",
        "50-100 photos retouchées",
        "Livraison 48h",
        "Droits commerciaux inclus"
      ],
      popular: false
    }
  ];

  return (

    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section SEO optimisée */}
      <section className="relative h-[70vh] sm:h-screen flex items-center justify-center overflow-hidden animate-fade-in" aria-label="Photographe Perpignan Occitanie Hero">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-2xl sm:max-w-4xl mx-auto px-2 sm:px-4 animate-slide-up">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold mb-4 sm:mb-6 drop-shadow-lg text-gold animate-fade-in">
            Photographe à Perpignan & Occitanie
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4 text-white/90 animate-fade-in">
            Lumière Studio - Portraits, Mariages, Événements
          </h2>
          <div className="bg-gold/10 text-gold text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full inline-block mb-4 sm:mb-6 animate-fade-in">
            Studio photo professionnel à Perpignan, Pyrénées-Orientales, Occitanie
          </div>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 animate-fade-in">
            Immortalisez vos souvenirs avec un photographe passionné, spécialisé dans les portraits, mariages et reportages événementiels en région Occitanie.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 justify-center animate-fade-in">
            <Link to="/portfolio">
              <Button size="lg" variant="default" className="bg-black text-[#ffd700] hover:bg-[#e6c200] hover:text-black shadow-gold">
                Découvrir le portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="default" className="bg-[#ffd700] text-black hover:bg-[#e6c200] hover:text-black border border-[#ffd700]">
                Réserver une séance à Perpignan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-10 sm:py-20 bg-gradient-subtle animate-fade-in">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-16 animate-slide-up">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-2 sm:mb-4 text-gold drop-shadow-lg animate-fade-in">Mes Services</h2>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto animate-fade-in">
              Chaque séance photo est unique et adaptée à vos besoins spécifiques. 
              Découvrez mes spécialités pour immortaliser vos moments précieux.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-gold transition-all duration-300 overflow-hidden animate-fade-in">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-gold mb-2 animate-fade-in">{service.icon}</div>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6 animate-slide-up">
                  <h3 className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2 text-gold drop-shadow-lg animate-fade-in">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground animate-fade-in">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-primary">
                Voir tous mes services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 sm:py-20 bg-primary text-primary-foreground animate-fade-in">
        <div className="container mx-auto px-2 sm:px-4 text-center animate-slide-up">
          <h2 className="text-xl sm:text-4xl font-serif font-bold mb-2 sm:mb-4 text-gold drop-shadow-lg animate-fade-in">Prêt à capturer vos souvenirs ?</h2>
          <p className="text-base sm:text-xl mb-4 sm:mb-8 text-primary-foreground/90 animate-fade-in">
            Contactez-moi dès aujourd'hui pour discuter de votre projet photo
          </p>
          <Link to="/contact">
              <Button size="lg" className="bg-[#ffd700] hover:bg-[#e6c200] text-black border border-[#ffd700] shadow-gold animate-fade-in w-full max-w-xs mx-auto text-base px-4 py-2 sm:max-w-md sm:text-lg">
                Réserver une consultation gratuite
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;