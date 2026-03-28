import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Award, Users, Clock, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import photographerImage from "@/assets/photographer-portrait.jpg";

const About = () => {
  // Animation d'apparition pour les valeurs
  const [showValues, setShowValues] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => setShowValues(true), 400);
    return () => clearTimeout(timer);
  }, []);
  // Animation pour les réalisations (stats)
  const achievements = React.useMemo(() => [
    { icon: <Camera className="h-6 w-6" />, number: "500+", text: "Séances réalisées" },
    { icon: <Heart className="h-6 w-6" />, number: "150+", text: "Mariages immortalisés" },
    { icon: <Users className="h-6 w-6" />, number: "300+", text: "Clients satisfaits" },
    { icon: <Award className="h-6 w-6" />, number: "5+", text: "Années d'expérience" },
  ], []);


  const skills = React.useMemo(() => [
    { name: "Portrait", level: 95 },
    { name: "Mariage", level: 90 },
    { name: "Événementiel", level: 85 },
    { name: "Retouche", level: 88 },
  ], []);

  // Animation pour les réalisations (stats)
  function parseNumber(str) {
    // Ex: "500+" => 500
    return parseInt(str.replace(/\D/g, ""), 10);
  }
  const [counts, setCounts] = React.useState(achievements.map(a => 0));
  React.useEffect(() => {
    achievements.forEach((achievement, i) => {
      const target = parseNumber(achievement.number);
      let current = 0;
      const step = Math.ceil(target / 40);
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCounts(prev => {
          const updated = [...prev];
          updated[i] = current;
          return updated;
        });
      }, 25 + i * 10);
      return () => clearInterval(interval);
    });
  }, [achievements]);

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

  // Animation pour la barre de progression
  const [progress, setProgress] = React.useState(skills.map(() => 0));
  React.useEffect(() => {
    const timers = skills.map((skill, i) =>
      setTimeout(() => {
        setProgress(prev => {
          const updated = [...prev];
          updated[i] = skill.level;
          return updated;
        });
      }, 400 + i * 300)
    );
    return () => timers.forEach(clearTimeout);
  }, [skills]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[calc(4rem+env(safe-area-inset-top))] pb-10 sm:pt-24 sm:pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-2xl sm:max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4 sm:mb-6 text-balance">À Propos</h1>
            <div className="bg-gold/10 text-gold text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full inline-block mb-4 sm:mb-6">
              Site de démonstration
            </div>
            <p className="text-base sm:text-xl text-muted-foreground">
              Découvrez l'histoire et la passion qui m'animent dans l'art de la photographie
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-10 sm:py-20">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <img 
                  src={photographerImage} 
                  alt="Photographe professionnel"
                  className="h-56 w-full object-cover min-[400px]:h-72 sm:h-96 md:h-[480px] lg:h-[560px]"
                />
                <div className="absolute right-3 top-3 sm:right-6 sm:top-6">
                  <Badge className="bg-yellow-400 text-primary text-xs font-bold shadow-lg animate-pulse hover:bg-yellow-400 sm:text-sm">
                    <Star className="mr-1 h-3 w-3 text-yellow-600" />
                    Photographe Freelance
                  </Badge>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 space-y-6 lg:order-2">
              <div>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-2 sm:mb-4">
                  Théo Lumière
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 text-pretty">
                  Photographe freelance basé en Occitanie, j'accompagne particuliers et entreprises dans toute la région : Toulouse, Montpellier, Nîmes, Perpignan, Béziers, Narbonne... Je propose des séances photo sur-mesure pour vos portraits, mariages, événements et reportages professionnels. Passionné par la diversité des paysages occitans, j'apporte une approche locale et personnalisée à chaque projet. Besoin d'un photographe en Occitanie ? Profitez de mon expertise régionale pour des images authentiques et adaptées à votre territoire.
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
                <h3 className="text-base sm:text-xl font-semibold">Mes Spécialités</h3>
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-gold h-2 rounded-full transition-all duration-700"
                        style={{ width: `${progress[index]}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="block w-full sm:inline-block">
                <Button
                  size="lg"
                  className="mt-8 w-full min-h-11 max-w-xs touch-manipulation bg-yellow-400 font-bold text-black shadow-gold hover:bg-yellow-400 sm:max-w-none"
                >
                  Travaillons ensemble
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-8 sm:py-16 bg-gradient-subtle">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-3xl font-serif font-bold mb-2 sm:mb-4">Mes Réalisations</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
              Quelques chiffres qui témoignent de mon expérience et de la confiance 
              que mes clients m'accordent au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full text-gold mb-4">
                  {achievement.icon}
                </div>
                <div className="text-xl sm:text-3xl font-bold font-serif text-gold mb-1 sm:mb-2">
                  {counts[index]}{achievement.number.replace(/\d+/,'')}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{achievement.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 sm:py-20">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-2 sm:mb-4">Mes Valeurs</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-xl sm:max-w-3xl mx-auto">
              Ce qui guide mon travail au quotidien et fait de chaque collaboration 
              une expérience unique et mémorable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`text-center p-4 sm:p-6 transition-all duration-700 transform ${showValues ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.25)]`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-6">
                  <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-4 text-gold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <h2 className="text-xl sm:text-4xl font-serif font-bold mb-2 sm:mb-4">
            Prêt à créer ensemble ?
          </h2>
          <p className="text-base sm:text-xl mb-4 sm:mb-8 text-primary-foreground/90 max-w-xl sm:max-w-2xl mx-auto">
            Discutons de votre projet photo autour d'un café. 
            La première consultation est toujours gratuite et sans engagement.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 px-2">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full min-h-11 touch-manipulation bg-yellow-400 font-bold text-black shadow-gold hover:bg-yellow-400 sm:w-auto"
              >
                Réserver une consultation
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full min-h-11 touch-manipulation bg-yellow-400 font-bold text-black shadow-gold hover:bg-yellow-400 sm:w-auto"
              >
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