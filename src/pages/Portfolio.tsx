import Autoplay from "embla-carousel-autoplay";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portraitImage from "@/assets/portrait-sample.jpg";
import photographerPortrait from "@/assets/photographer-portrait.jpg";
import weddingImage from "@/assets/wedding-sample.jpg";
import eventImage from "@/assets/event-sample.jpg";
import heroPhotography from "@/assets/hero-photography.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const eventImages = {
  portrait: [portraitImage, photographerPortrait],
  wedding: [weddingImage, heroPhotography],
  event: [eventImage, heroPhotography],
};

const Portfolio = () => {
  const [filter, setFilter] = React.useState("all");

  const sections = [
    {
      key: "portrait",
      title: "Portraits",
      images: eventImages.portrait,
    },
    {
      key: "wedding",
      title: "Mariages",
      images: eventImages.wedding,
    },
    {
      key: "event",
      title: "Événementiel",
      images: eventImages.event,
    },
  ];

  const filteredSections = filter === "all" ? sections : sections.filter(s => s.key === filter);


  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxImg, setLightboxImg] = React.useState<string | null>(null);

  // Fonction pour ouvrir la lightbox
  const openLightbox = (img: string) => {
    setLightboxImg(img);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImg(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-10 sm:py-20 bg-gradient-subtle animate-fade-in">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <h1 className="text-2xl sm:text-5xl font-serif font-bold mb-4 sm:mb-6 text-gold drop-shadow-lg animate-fade-in">Portfolio</h1>
          <p className="text-base sm:text-xl text-muted-foreground mb-4 sm:mb-8 animate-fade-in">
            Découvrez une sélection de mes réalisations en portraits, mariages et événements à Perpignan et en Occitanie.
          </p>
          {/* Menu déroulant pour filtrer les événements */}
          <div className="mb-4 sm:mb-8 flex justify-center">
            <select
              className="border rounded px-2 py-2 text-sm sm:text-lg w-full max-w-xs"
              id="eventFilter"
              value={filter}
              onChange={e => setFilter(e.target.value)}
            >
              <option value="all">Tous les événements</option>
              <option value="portrait">Portraits</option>
              <option value="wedding">Mariages</option>
              <option value="event">Événementiel</option>
            </select>
          </div>

          {/* Sections d'événements avec carrousel */}
          <div className="space-y-8 sm:space-y-16">
            {filteredSections.map(section => {
              const autoplayPlugin = Autoplay({ delay: 10000, stopOnInteraction: false });
              return (
                <div key={section.key}>
                  <h2 className="text-lg sm:text-3xl font-bold mb-2 sm:mb-4 text-gold">{section.title}</h2>
                  <div className="relative max-w-xs sm:max-w-xl mx-auto">
                    <Carousel plugins={[autoplayPlugin]}>
                      <CarouselContent>
                        {section.images.map((img, idx) => (
                          <CarouselItem key={idx}>
                            <img
                              src={img}
                              alt={`${section.title} ${idx + 1}`}
                              className="rounded-lg shadow-gold w-full h-40 sm:h-64 object-cover cursor-pointer"
                              onClick={() => openLightbox(img)}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-2"
          onClick={closeLightbox}
        >
          <img
            src={lightboxImg ?? undefined}
            alt="Agrandissement"
            className="max-w-xs sm:max-w-3xl max-h-[60vh] sm:max-h-[80vh] rounded-lg shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white text-2xl sm:text-3xl font-bold"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            ×
          </button>
        </div>
      )}
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
