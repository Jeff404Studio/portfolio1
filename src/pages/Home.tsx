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
      icon: <Camera className="h-8 w-8" />,
      title: "Portraits",
      description: "Sessions portraits personnalisées pour capturer votre essence unique.",
      image: portraitImage,
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Mariages", 
      description: "Immortalisez le plus beau jour de votre vie avec élégance et émotion.",
      image: weddingImage,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Événements",
      description: "Couverture photo professionnelle pour tous vos événements spéciaux.",
      image: eventImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Lumière Studio
          </h1>
          <div className="bg-gold/10 text-gold text-sm px-4 py-2 rounded-full inline-block mb-6">
            Site de démonstration
          </div>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            L'art de capturer vos moments précieux avec créativité et élégance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-primary shadow-gold">
              Découvrir mon portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Réserver une séance
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Mes Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chaque séance photo est unique et adaptée à vos besoins spécifiques. 
              Découvrez mes spécialités pour immortaliser vos moments précieux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-gold mb-2">{service.icon}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Prêt à capturer vos souvenirs ?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contactez-moi dès aujourd'hui pour discuter de votre projet photo
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-primary shadow-gold">
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