
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Product = {
  id: number;
  name: string;
  description: string;
  category: "furniture" | "lighting" | "accessories";
};

const products: Product[] = [
  {
    id: 1,
    name: "Curved Lounge Chair",
    description: "A minimalist lounge chair with gentle curves and natural materials.",
    category: "furniture",
  },
  {
    id: 2,
    name: "Slim Floor Lamp",
    description: "A sleek floor lamp with adjustable brightness and warm light.",
    category: "lighting",
  },
  {
    id: 3,
    name: "Wooden Side Table",
    description: "A simple side table made from sustainable wood with clean lines.",
    category: "furniture",
  },
  {
    id: 4,
    name: "Pendant Light",
    description: "A delicate pendant light with glass elements and minimalist design.",
    category: "lighting",
  },
  {
    id: 5,
    name: "Ceramic Vase Set",
    description: "A set of three ceramic vases with organic shapes and matte finish.",
    category: "accessories",
  },
  {
    id: 6,
    name: "Modern Dining Chair",
    description: "A comfortable dining chair combining wood and fabric elements.",
    category: "furniture",
  },
  {
    id: 7,
    name: "Wall Sconce",
    description: "A wall-mounted light fixture with adjustable arm and soft glow.",
    category: "lighting",
  },
  {
    id: 8,
    name: "Decorative Mirror",
    description: "A statement mirror with subtle frame design and perfect proportions.",
    category: "accessories",
  },
  {
    id: 9,
    name: "Coffee Table",
    description: "A low-profile coffee table with storage compartments and clean aesthetic.",
    category: "furniture",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === activeCategory)
      );
    }
  }, [activeCategory]);

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
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="max-w-3xl mx-auto text-center animate-blur-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover our collection of thoughtfully designed items that combine form and function.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <Tabs 
          defaultValue="all" 
          className="animate-fade-in"
          onValueChange={setActiveCategory}
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="furniture">Furniture</TabsTrigger>
              <TabsTrigger value="lighting">Lighting</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeCategory}>
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
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default Products;
