import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-subtle animate-fade-in px-2">
      <div className="text-center">
        <h1 className="text-3xl sm:text-6xl font-bold mb-2 sm:mb-4 text-gold drop-shadow-lg animate-fade-in">404</h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-8 animate-fade-in">Page non trouvée</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700 text-base sm:text-lg">
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
