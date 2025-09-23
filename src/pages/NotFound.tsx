import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-subtle animate-fade-in">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-gold drop-shadow-lg animate-fade-in">404</h1>
        <p className="text-lg text-muted-foreground mb-8 animate-fade-in">Page non trouvée</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
