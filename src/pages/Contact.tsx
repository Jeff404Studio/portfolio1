import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre demande. Je vous recontacterai dans les plus brefs délais.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      description: "Lun-Ven 9h-18h"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "contact@lumiere-studio.fr", 
      description: "Réponse sous 24h"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Localisation",
      value: "Paris & Île-de-France",
      description: "Déplacements possibles"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Horaires",
      value: "Du lundi au samedi",
      description: "9h00 - 19h00"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">Contact</h1>
            <div className="bg-gold/10 text-gold text-sm px-4 py-2 rounded-full inline-block mb-6">
              Site de démonstration
            </div>
            <p className="text-xl text-muted-foreground">
              Discutons ensemble de votre projet photo. 
              Je serais ravie de donner vie à vos idées !
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Demande de devis</CardTitle>
                  <p className="text-muted-foreground">
                    Remplissez le formulaire ci-dessous et je vous recontacterai 
                    rapidement pour discuter de votre projet.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          placeholder="Votre nom"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                          placeholder="votre@email.fr"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Type de service *</Label>
                        <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisir un service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="portrait">Portraits</SelectItem>
                            <SelectItem value="wedding">Mariage</SelectItem>
                            <SelectItem value="event">Événement</SelectItem>
                            <SelectItem value="corporate">Corporate</SelectItem>
                            <SelectItem value="other">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Date souhaitée</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        placeholder="Décrivez votre projet, vos attentes, le lieu de la séance..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold-dark text-primary shadow-gold">
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer ma demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Informations de contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{info.title}</h4>
                        <p className="text-foreground font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Suivez-moi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Instagram className="mr-2 h-4 w-4" />
                      Instagram
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Facebook className="mr-2 h-4 w-4" />
                      Facebook
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Découvrez mes dernières réalisations et suivez l'actualité du studio !
                  </p>
                </CardContent>
              </Card>

              {/* Availability Badge */}
              <div className="p-4 bg-gold/5 border border-gold/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <Badge variant="outline" className="border-green-500 text-green-700">
                    Disponible
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Créneaux disponibles pour les prochaines semaines. 
                  Réservation recommandée à l'avance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Questions Fréquentes
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "Combien de temps à l'avance dois-je réserver ?",
                  answer: "Je recommande de réserver au moins 2-3 semaines à l'avance, surtout pour les weekends et la saison des mariages."
                },
                {
                  question: "Proposez-vous des séances à domicile ?",
                  answer: "Absolument ! Je me déplace dans toute l'Île-de-France pour vos séances à domicile ou en extérieur."
                },
                {
                  question: "Quand recevrai-je mes photos ?",
                  answer: "Les photos retouchées sont généralement livrées sous 1-2 semaines après la séance via une galerie en ligne privée."
                },
                {
                  question: "Que se passe-t-il en cas de mauvais temps ?",
                  answer: "Pour les séances extérieures, nous pouvons reporter la date ou nous replier en studio selon vos préférences."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;