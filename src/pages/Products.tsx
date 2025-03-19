import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  description: string;
  category: "shirts" | "pants" | "tshirts" | "accessories";
  usage: string[];
};

const products: Product[] = [
  {
    id: 1,
    name: "Forest Flannel Shirt",
    description: "Relaxed fit flannel shirt perfect for cool evenings around the campfire.",
    category: "shirts",
    usage: ["camping", "hiking", "casual"]
  },
  {
    id: 2,
    name: "Trail Cargo Pants",
    description: "Loose-fitting cargo pants with multiple pockets for all your outdoor essentials.",
    category: "pants",
    usage: ["hiking", "camping", "fishing"]
  },
  {
    id: 3,
    name: "Mountain Explorer Shirt",
    description: "Casual button-up shirt with roll-up sleeves for variable weather conditions.",
    category: "shirts",
    usage: ["hiking", "photography", "travel"]
  },
  {
    id: 4,
    name: "Campfire Graphic Tee",
    description: "Soft cotton t-shirt with vintage campfire design, perfect for casual outdoor wear.",
    category: "tshirts",
    usage: ["casual", "camping", "everyday"]
  },
  {
    id: 5,
    name: "Adventure Bandana Set",
    description: "Set of three versatile bandanas for sun protection, dust protection, or style.",
    category: "accessories",
    usage: ["protection", "style", "hiking"]
  },
  {
    id: 6,
    name: "Relaxed Fit Hiking Pants",
    description: "Comfortable, loose-fitting pants that allow full range of movement on the trail.",
    category: "pants",
    usage: ["hiking", "camping", "travel"]
  },
  {
    id: 7,
    name: "Nature Escape Tee",
    description: "Laid-back cotton t-shirt with mountain landscape design.",
    category: "tshirts",
    usage: ["casual", "everyday", "hiking"]
  },
  {
    id: 8,
    name: "Wide Brim Explorer Hat",
    description: "Comfortable hat with wide brim for sun protection during outdoor adventures.",
    category: "accessories",
    usage: ["sun protection", "hiking", "fishing"]
  },
  {
    id: 9,
    name: "Oversized Denim Shirt",
    description: "Roomy denim shirt that works as both a casual shirt or light jacket.",
    category: "shirts",
    usage: ["layering", "cool weather", "casual"]
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeUsage, setActiveUsage] = useState<string>("all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    let filtered = products;
    
    if (activeCategory !== "all") {
      filtered = filtered.filter((product) => product.category === activeCategory);
    }
    
    if (activeUsage !== "all") {
      filtered = filtered.filter((product) => product.usage.includes(activeUsage));
    }
    
    setFilteredProducts(filtered);
  }, [activeCategory, activeUsage]);

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
  }, [filteredProducts]);

  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24">
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="max-w-3xl mx-auto text-center animate-blur-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Casual Outdoor Collection
          </h1>
          <p className="text-xl text-muted-foreground">
            Comfortable, durable clothing designed for your adventures in nature.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <Tabs 
          defaultValue="all" 
          className="animate-fade-in mb-12"
          onValueChange={setActiveCategory}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-5 w-full max-w-xl">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="shirts">Shirts</TabsTrigger>
              <TabsTrigger value="pants">Pants</TabsTrigger>
              <TabsTrigger value="tshirts">T-Shirts</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
        
        <Tabs 
          defaultValue="all" 
          className="animate-fade-in mb-12"
          onValueChange={setActiveUsage}
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-6 w-full max-w-2xl">
              <TabsTrigger value="all">All Uses</TabsTrigger>
              <TabsTrigger value="hiking">Hiking</TabsTrigger>
              <TabsTrigger value="camping">Camping</TabsTrigger>
              <TabsTrigger value="casual">Casual</TabsTrigger>
              <TabsTrigger value="travel">Travel</TabsTrigger>
              <TabsTrigger value="fishing">Fishing</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group overflow-hidden rounded-xl border bg-card animate-on-scroll opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="aspect-square bg-muted relative overflow-hidden">
                <div className="w-full h-full bg-muted group-hover:scale-105 transition-transform duration-500 ease-smooth"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-medium text-primary">Perfect for:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {product.usage.map((use, i) => (
                      <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full capitalize">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-primary">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </div>
                  <Button variant="ghost" size="sm">View Details</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0 translate-y-10">
            Apparel Usage Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 border animate-on-scroll opacity-0 translate-y-10">
              <h3 className="text-xl font-semibold mb-4">Hiking & Trekking</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Loose-fitting shirts for better airflow</li>
                <li>• Cargo pants with pockets for essentials</li>
                <li>• Layered clothing for changing weather</li>
                <li>• Wide-brimmed hats for sun protection</li>
                <li>• Bandanas for multiple uses on the trail</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 border animate-on-scroll opacity-0 translate-y-10" style={{ transitionDelay: "100ms" }}>
              <h3 className="text-xl font-semibold mb-4">Camping & Relaxation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Flannel shirts for cool evening comfort</li>
                <li>• Relaxed fit pants that don't restrict movement</li>
                <li>• Graphic tees for casual daytime wear</li>
                <li>• Durable fabrics that handle outdoor conditions</li>
                <li>• Versatile pieces that work around the campsite</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 border animate-on-scroll opacity-0 translate-y-10" style={{ transitionDelay: "200ms" }}>
              <h3 className="text-xl font-semibold mb-4">Travel & Exploration</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Wrinkle-resistant shirts for hassle-free packing</li>
                <li>• Comfortable pants for long journeys</li>
                <li>• Versatile pieces that work in multiple settings</li>
                <li>• Layering options for different climates</li>
                <li>• Lightweight items that pack down small</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 border animate-on-scroll opacity-0 translate-y-10" style={{ transitionDelay: "300ms" }}>
              <h3 className="text-xl font-semibold mb-4">Fishing & Water Activities</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Quick-drying materials for water exposure</li>
                <li>• Sun protection for long days outdoors</li>
                <li>• Shirts with roll-up sleeves for temperature control</li>
                <li>• Hats with wide brims for face protection</li>
                <li>• Pants with secure pockets for gear</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16 mt-8">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 glass-morphism shadow-glass animate-on-scroll opacity-0 translate-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              We create apparel that becomes more than just clothing—it becomes your companion for escaping the chaos of city life and connecting with nature.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our goal is that once you experience the comfort and quality of our products, you'll make us your lifelong brand of choice for all your outdoor adventures.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
