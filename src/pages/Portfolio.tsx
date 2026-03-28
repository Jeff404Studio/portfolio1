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
      <section className="pt-[calc(4rem+env(safe-area-inset-top))] pb-10 sm:pt-20 sm:pb-20 bg-gradient-subtle animate-fade-in">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h1 className="text-2xl sm:text-5xl font-serif font-bold mb-4 sm:mb-6 text-gold drop-shadow-lg text-balance animate-fade-in">
            Portfolio
          </h1>
          <p className="text-pretty text-base sm:text-xl text-muted-foreground mb-4 sm:mb-8 max-w-2xl mx-auto animate-fade-in">
            Découvrez une sélection de mes réalisations en portraits, mariages et événements à Perpignan et en Occitanie.
          </p>
          {/* Menu déroulant pour filtrer les événements */}
          <div className="mb-6 sm:mb-8 flex justify-center px-1">
            <select
              className="w-full max-w-md min-h-11 rounded-md border border-input bg-background px-3 py-2 text-base text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring touch-manipulation"
              id="eventFilter"
              value={filter}
              onChange={e => setFilter(e.target.value)}
              aria-label="Filtrer les catégories du portfolio"
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
                  <h2 className="text-lg sm:text-3xl font-bold mb-3 sm:mb-4 text-gold">{section.title}</h2>
                  <div className="relative mx-auto w-full max-w-md sm:max-w-xl lg:max-w-3xl px-11 sm:px-12 md:px-14">
                    <Carousel plugins={[autoplayPlugin]} className="w-full">
                      <CarouselContent>
                        {section.images.map((img, idx) => (
                          <CarouselItem key={idx}>
                            <img
                              src={img}
                              alt={`${section.title} ${idx + 1}`}
                              className="h-44 w-full cursor-pointer rounded-lg object-cover shadow-gold min-[480px]:h-52 sm:h-64 md:h-72"
                              onClick={() => openLightbox(img)}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-0 top-1/2 h-10 w-10 -translate-y-1/2 sm:left-1 md:-left-2 md:h-9 md:w-9 lg:-left-4" />
                      <CarouselNext className="right-0 top-1/2 h-10 w-10 -translate-y-1/2 sm:right-1 md:-right-2 md:h-9 md:w-9 lg:-right-4" />
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-3"
          style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))", paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
          onClick={closeLightbox}
          role="presentation"
        >
          <img
            src={lightboxImg ?? undefined}
            alt="Agrandissement"
            className="max-h-[min(85dvh,900px)] w-full max-w-[min(100%,56rem)] rounded-lg object-contain shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          <button
            type="button"
            className="absolute right-2 top-2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-4 sm:top-4 touch-manipulation"
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
