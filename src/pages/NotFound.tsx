import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-subtle animate-fade-in px-4 py-8 text-center">
      <div className="max-w-md">
        <h1 className="text-4xl sm:text-6xl font-bold mb-2 sm:mb-4 text-gold drop-shadow-lg animate-fade-in">404</h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 animate-fade-in text-pretty">
          Page non trouvée
        </p>
        <Link
          to="/"
          className="inline-flex min-h-11 items-center justify-center rounded-md text-base font-medium text-primary underline-offset-4 hover:underline sm:text-lg touch-manipulation"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
