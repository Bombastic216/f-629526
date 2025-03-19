
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up", "opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/30 -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary text-sm font-medium mb-2 animate-fade-in">
              Escape the Urban Chaos
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-blur-in">
              Casual Outdoor Apparel <br className="hidden sm:inline" />
              <span className="text-primary">For Nature Lovers</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in delay-100">
              Comfortable, durable clothing designed for your adventures in nature and moments of escape from city life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
              <Button size="lg" className="rounded-full">
                <Link to="/products">Explore Collection</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 md:mt-20 flex justify-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={scrollToFeatures}
              className="rounded-full animate-breathe"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20 animate-on-scroll opacity-0 translate-y-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Brand Vision</h2>
            <p className="text-xl text-muted-foreground">
              Creating a lifelong connection with our customers through quality outdoor apparel that becomes their gateway to escape urban chaos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Casual Comfort",
                description: "Relaxed, comfortable designs that don't sacrifice style for functionality when outdoors.",
              },
              {
                title: "Nature-Inspired",
                description: "Every piece created with the outdoors in mind, perfect for camping, hiking, or relaxing in nature.",
              },
              {
                title: "Customer Loyalty",
                description: "Products so reliable and comfortable that one purchase guarantees you'll choose us for life.",
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="relative p-6 rounded-2xl border bg-card animate-on-scroll opacity-0 translate-y-10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <div className="h-6 w-6 bg-primary rounded-lg"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 md:py-24 bg-accent/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20 animate-on-scroll opacity-0 translate-y-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Collection</h2>
            <p className="text-xl text-muted-foreground">
              Casual, comfortable apparel designed for your outdoor adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Casual Shirts", description: "Comfortable flannel and button-up shirts perfect for layering" },
              { name: "Outdoor Pants", description: "Durable, versatile pants for hiking and camping" },
              { name: "Graphic Tees", description: "Soft cotton t-shirts with nature-inspired designs" },
              { name: "Camping Accessories", description: "Hats, bandanas, and more for your outdoor adventures" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative rounded-2xl overflow-hidden bg-muted aspect-video animate-on-scroll opacity-0 translate-y-10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-lg font-medium mb-1">{item.name}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-on-scroll opacity-0 translate-y-10">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 glass-morphism shadow-glass animate-on-scroll opacity-0 translate-y-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Escape the urban chaos</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our apparel isn't just clothing – it's your ticket to nature, comfort, and a lifetime relationship with our brand.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/products">Start Your Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
