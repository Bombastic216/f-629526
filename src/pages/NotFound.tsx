
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4 py-20 max-w-md mx-auto animate-fade-in">
        <div className="mb-8">
          <div className="inline-block p-6 rounded-full bg-primary/10 mb-6">
            <div className="text-9xl font-display font-bold text-primary">
              404
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Page Not Found</h1>
          <p className="text-muted-foreground text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <Button asChild size="lg" className="rounded-full animate-breathe">
          <Link to="/" className="inline-flex items-center">
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
