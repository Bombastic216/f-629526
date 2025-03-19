
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
              Elegantly Designed
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-blur-in">
              Simplicity Meets <br className="hidden sm:inline" />
              <span className="text-primary">Sophisticated Design</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in delay-100">
              Crafting intuitive, minimal experiences that delight users and elevate brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
              <Button size="lg" className="rounded-full">
                <Link to="/products">Explore Products</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed with Purpose</h2>
            <p className="text-xl text-muted-foreground">
              Every element crafted with intention, every detail considered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Minimal Aesthetics",
                description: "Clean lines and balanced compositions that highlight what matters most.",
              },
              {
                title: "Intuitive Interaction",
                description: "Thoughtfully designed interfaces that guide the user naturally.",
              },
              {
                title: "Refined Details",
                description: "Subtle animations and micro-interactions that delight without distraction.",
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

      {/* Showcase Section */}
      <section className="py-16 md:py-24 bg-accent/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20 animate-on-scroll opacity-0 translate-y-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Showcase</h2>
            <p className="text-xl text-muted-foreground">
              Selected projects that demonstrate our design philosophy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item} 
                className="group relative rounded-2xl overflow-hidden bg-muted aspect-video animate-on-scroll opacity-0 translate-y-10"
                style={{ transitionDelay: `${item * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-lg font-medium mb-1">Project {item}</h3>
                    <p className="text-white/80 text-sm">UI/UX Design • Development</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-on-scroll opacity-0 translate-y-10">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/products">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 glass-morphism shadow-glass animate-on-scroll opacity-0 translate-y-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to create something beautiful?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's work together to bring your vision to life with thoughtful, elegant design.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
