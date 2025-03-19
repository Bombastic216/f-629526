
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
              Şehrin Karmaşasından Kaçın
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-blur-in">
              Doğa Severler İçin <br className="hidden sm:inline" />
              <span className="text-primary">Günlük Dış Giyim</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in delay-100">
              Doğadaki maceralarınız ve şehir hayatından kaçış anlarınız için tasarlanmış rahat, dayanıklı kıyafetler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
              <Button size="lg" className="rounded-full">
                <Link to="/products">Koleksiyonu Keşfet</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                <Link to="/contact">İletişime Geç</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 md:mt-20 flex justify-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={scrollToFeatures}
              className="rounded-full animate-breathe"
              aria-label="Aşağı kaydır"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Marka Vizyonumuz</h2>
            <p className="text-xl text-muted-foreground">
              Müşterilerimizle, şehrin karmaşasından kaçmalarına olanak sağlayan kaliteli dış giyim ürünleri aracılığıyla ömür boyu sürecek bir bağ kuruyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Günlük Konfor",
                description: "Dış mekanlarda işlevsellikten ödün vermeden stil sunan rahat, konforlu tasarımlar.",
              },
              {
                title: "Doğadan İlham",
                description: "Doğa düşünülerek yaratılan her parça, kamp, yürüyüş veya doğada dinlenmek için mükemmel.",
              },
              {
                title: "Müşteri Sadakati",
                description: "Öyle güvenilir ve rahat ürünler ki, bir kez satın almanız, ömür boyu bizi tercih edeceğinizin garantisi.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Koleksiyonumuz</h2>
            <p className="text-xl text-muted-foreground">
              Dış mekan maceralarınız için tasarlanmış rahat, konforlu giyim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Günlük Gömlekler", description: "Katmanlı giyim için mükemmel, rahat flanel ve düğmeli gömlekler" },
              { name: "Outdoor Pantolonlar", description: "Yürüyüş ve kamp için dayanıklı, çok yönlü pantolonlar" },
              { name: "Grafik Tişörtler", description: "Doğadan ilham alan tasarımlara sahip yumuşak pamuklu tişörtler" },
              { name: "Kamp Aksesuarları", description: "Dış mekan maceralarınız için şapkalar, bandanalar ve daha fazlası" }
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
              <Link to="/products">Tüm Ürünleri Gör</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 glass-morphism shadow-glass animate-on-scroll opacity-0 translate-y-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Şehrin karmaşasından kaçın</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ürünlerimiz sadece giysi değil – doğaya, konfora ve markamızla ömür boyu sürecek bir ilişkiye açılan kapınız.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/products">Yolculuğunuza Başlayın</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
