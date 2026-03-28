import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Heart, Users, Briefcase, Clock, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portraitImage from "@/assets/portrait-sample.jpg";
import weddingImage from "@/assets/wedding-sample.jpg";
import eventImage from "@/assets/event-sample.jpg";

const Services = () => {
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

  const additionalServices = [
    { name: "Retouche supplémentaire", price: "15€/photo" },
    { name: "Tirage papier grand format", price: "À partir de 25€" },
    { name: "Album photo personnalisé", price: "À partir de 180€" },
    { name: "Séance photo additionnelle", price: "150€" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-[calc(4rem+env(safe-area-inset-top))] pb-10 sm:pt-24 sm:pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4 sm:mb-6 text-balance">Mes Services</h1>
            <div className="bg-gold/10 text-gold text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full inline-block mb-4 sm:mb-6">
              Site de démonstration
            </div>
            <p className="text-base sm:text-xl text-muted-foreground text-pretty">
              Des prestations photo sur mesure pour tous vos projets, 
              alliant créativité artistique et professionnalisme.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-10 sm:py-20">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-elegant transition-all duration-300 relative overflow-hidden">
                {service.popular && (
                  <Badge className="absolute top-4 right-4 z-10 bg-gold text-primary">
                    <Star className="h-3 w-3 mr-1" />
                    Populaire
                  </Badge>
                )}
                
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-gold mb-2">{service.icon}</div>
                  </div>
                </div>

                <CardHeader className="space-y-3">
                  <CardTitle className="text-lg sm:text-xl text-balance">{service.title}</CardTitle>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 shrink-0" />
                      {service.duration}
                    </div>
                    <div className="font-semibold text-gold">{service.price}</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Inclus dans le forfait :</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {service.includes.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="h-1.5 w-1.5 bg-gold rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                    <Link to="/contact">
                      <Button className="w-full min-h-11 touch-manipulation bg-gold hover:bg-gold-dark text-primary">
                        Réserver ce service
                      </Button>
                    </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-8 sm:py-16 bg-gradient-subtle">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-2xl sm:max-w-4xl mx-auto">
            <h2 className="text-lg sm:text-3xl font-serif font-bold text-center mb-6 sm:mb-12">Services Additionnels</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-2 sm:p-4 bg-background rounded-lg border">
                  <span className="font-medium text-xs sm:text-base">{service.name}</span>
                  <span className="text-gold font-semibold text-xs sm:text-base">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <h2 className="text-xl sm:text-4xl font-serif font-bold mb-2 sm:mb-4">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-base sm:text-xl mb-4 sm:mb-8 text-primary-foreground/90 max-w-xl sm:max-w-2xl mx-auto">
            Chaque projet est unique. Discutons ensemble de vos besoins 
            pour créer un forfait adapté à vos attentes et votre budget.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 px-2">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="default"
                className="w-full min-h-11 touch-manipulation sm:w-auto bg-[#ffd700] text-black hover:bg-[#e6c200] hover:text-black border border-[#ffd700] shadow-gold"
              >
                Demander un devis
              </Button>
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="default"
                className="w-full min-h-11 touch-manipulation sm:w-auto bg-black text-[#ffd700] hover:bg-[#e6c200] hover:text-black shadow-gold"
              >
                Voir mon portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;