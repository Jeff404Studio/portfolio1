import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Award, Users, Clock, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import photographerImage from "@/assets/photographer-portrait.jpg";

const About = () => {
  const skills = [
    { name: "Portrait", level: 95 },
    { name: "Mariage", level: 90 },
    { name: "Événementiel", level: 85 },
    { name: "Retouche", level: 88 },
  ];

  const achievements = [
    { icon: <Camera className="h-6 w-6" />, number: "500+", text: "Séances réalisées" },
    { icon: <Heart className="h-6 w-6" />, number: "150+", text: "Mariages immortalisés" },
    { icon: <Users className="h-6 w-6" />, number: "300+", text: "Clients satisfaits" },
    { icon: <Award className="h-6 w-6" />, number: "5+", text: "Années d'expérience" },
  ];

  const values = [
    {
      title: "Authenticité",
      description: "Je capture l'essence véritable de chaque moment, sans artifice."
    },
    {
      title: "Créativité", 
      description: "Chaque séance est unique, adaptée à votre personnalité et vos envies."
    },
    {
      title: "Professionnalisme",
      description: "Ponctualité, qualité et service client sont mes priorités absolues."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">À Propos</h1>
            <div className="bg-gold/10 text-gold text-sm px-4 py-2 rounded-full inline-block mb-6">
              Site de démonstration
            </div>
            <p className="text-xl text-muted-foreground">
              Découvrez l'histoire et la passion qui m'animent dans l'art de la photographie
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <img 
                  src={photographerImage} 
                  alt="Photographe professionnel"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute top-6 right-6">
                  <Badge className="bg-gold text-primary">
                    <Star className="h-3 w-3 mr-1" />
                    Photographe Freelance
                  </Badge>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-4">
                  Sophie Lumière
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Photographe freelance passionnée depuis plus de 5 ans, 
                  je me spécialise dans l'art de capturer l'émotion authentique 
                  et la beauté naturelle de chaque instant.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Diplômée de l'École Nationale Supérieure de la Photographie d'Arles, 
                  j'ai développé une approche unique mêlant technique rigoureuse et 
                  sensibilité artistique. Mes années d'expérience m'ont permis de 
                  perfectionner mon style, reconnaissable par sa luminosité naturelle 
                  et son approche documentaire élégante.
                </p>
                
                <p className="text-muted-foreground">
                  Chaque séance photo est pour moi une rencontre humaine unique. 
                  J'aime créer une atmosphère détendue et bienveillante qui permet 
                  à mes modèles d'exprimer leur véritable personnalité devant l'objectif.
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Mes Spécialités</h3>
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-gold h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-primary shadow-gold">
                  Travaillons ensemble
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Mes Réalisations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quelques chiffres qui témoignent de mon expérience et de la confiance 
              que mes clients m'accordent au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full text-gold mb-4">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold font-serif text-gold mb-2">
                  {achievement.number}
                </div>
                <p className="text-sm text-muted-foreground">{achievement.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Mes Valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ce qui guide mon travail au quotidien et fait de chaque collaboration 
              une expérience unique et mémorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Prêt à créer ensemble ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Discutons de votre projet photo autour d'un café. 
            La première consultation est toujours gratuite et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-primary shadow-gold">
                Réserver une consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Découvrir mes services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;