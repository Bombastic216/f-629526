
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
    name: "Orman Flanel Gömlek",
    description: "Kamp ateşi etrafındaki serin akşamlar için mükemmel, rahat kesim flanel gömlek.",
    category: "shirts",
    usage: ["camping", "hiking", "casual"]
  },
  {
    id: 2,
    name: "Patika Kargo Pantolon",
    description: "Tüm açık hava ihtiyaçlarınız için çoklu cepli, bol kesim kargo pantolon.",
    category: "pants",
    usage: ["hiking", "camping", "fishing"]
  },
  {
    id: 3,
    name: "Dağ Kaşifi Gömlek",
    description: "Değişken hava koşulları için yukarı kıvrılabilir kollu, günlük düğmeli gömlek.",
    category: "shirts",
    usage: ["hiking", "photography", "travel"]
  },
  {
    id: 4,
    name: "Kamp Ateşi Tişört",
    description: "Günlük dış giyim için mükemmel, vintage kamp ateşi tasarımlı yumuşak pamuklu tişört.",
    category: "tshirts",
    usage: ["casual", "camping", "everyday"]
  },
  {
    id: 5,
    name: "Macera Bandana Seti",
    description: "Güneş koruması, toz koruması veya stil için üç çok yönlü bandana seti.",
    category: "accessories",
    usage: ["protection", "style", "hiking"]
  },
  {
    id: 6,
    name: "Rahat Kesim Yürüyüş Pantolonu",
    description: "Patikada tam hareket serbestliği sağlayan rahat, bol kesim pantolon.",
    category: "pants",
    usage: ["hiking", "camping", "travel"]
  },
  {
    id: 7,
    name: "Doğa Kaçışı Tişört",
    description: "Dağ manzarası tasarımlı rahat pamuklu tişört.",
    category: "tshirts",
    usage: ["casual", "everyday", "hiking"]
  },
  {
    id: 8,
    name: "Geniş Kenarlı Kaşif Şapka",
    description: "Dış mekan maceralarında güneş koruması için geniş kenarlı rahat şapka.",
    category: "accessories",
    usage: ["sun protection", "hiking", "fishing"]
  },
  {
    id: 9,
    name: "Oversize Denim Gömlek",
    description: "Hem günlük gömlek hem de hafif ceket olarak işlev gören geniş denim gömlek.",
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

  const categoryMap: Record<string, string> = {
    "all": "Tümü",
    "shirts": "Gömlekler",
    "pants": "Pantolonlar",
    "tshirts": "Tişörtler",
    "accessories": "Aksesuarlar"
  };

  const usageMap: Record<string, string> = {
    "all": "Tüm Kullanımlar",
    "hiking": "Doğa Yürüyüşü",
    "camping": "Kamp",
    "casual": "Günlük",
    "travel": "Seyahat",
    "fishing": "Balıkçılık",
    "protection": "Koruma",
    "style": "Stil",
    "everyday": "Günlük",
    "sun protection": "Güneş Koruması",
    "layering": "Katmanlı Giyim",
    "cool weather": "Serin Hava",
    "photography": "Fotoğrafçılık"
  };

  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24">
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="max-w-3xl mx-auto text-center animate-blur-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Günlük Dış Giyim Koleksiyonu
          </h1>
          <p className="text-xl text-muted-foreground">
            Doğadaki maceralarınız için tasarlanmış rahat, dayanıklı kıyafetler.
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
              <TabsTrigger value="all">Tümü</TabsTrigger>
              <TabsTrigger value="shirts">Gömlekler</TabsTrigger>
              <TabsTrigger value="pants">Pantolonlar</TabsTrigger>
              <TabsTrigger value="tshirts">Tişörtler</TabsTrigger>
              <TabsTrigger value="accessories">Aksesuarlar</TabsTrigger>
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
              <TabsTrigger value="all">Tüm Kullanımlar</TabsTrigger>
              <TabsTrigger value="hiking">Doğa Yürüyüşü</TabsTrigger>
              <TabsTrigger value="camping">Kamp</TabsTrigger>
              <TabsTrigger value="casual">Günlük</TabsTrigger>
              <TabsTrigger value="travel">Seyahat</TabsTrigger>
              <TabsTrigger value="fishing">Balıkçılık</TabsTrigger>
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
                  <span className="text-sm font-medium text-primary">Kullanım alanları:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {product.usage.map((use, i) => (
                      <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full capitalize">
                        {usageMap[use] || use}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-primary">
                    {categoryMap[product.category]}
                  </div>
                  <Button variant="ghost" size="sm">Detayları Gör</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0 translate-y-10">
            Giyim Kullanım Kılavuzu
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 border animate-on-scroll opacity-0 translate-y-10">
              <h3 className="text-xl font-semibold mb-4">Doğa Yürüyüşü</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Daha iyi hava akışı için bol kesim gömlekler</li>
                <li>• Gerekli eşyalar için cepli kargo pantolonlar</li>
                <li>• Değişken hava durumu için katmanlı giyim</li>
                <li>• Güneş koruması için geniş kenarlı şapkalar</li>
                <li>• Patika üzerinde çoklu kullanım için bandanalar</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 border animate-on-scroll opacity-0 translate-y-10" style={{ transitionDelay: "100ms" }}>
              <h3 className="text-xl font-semibold mb-4">Kamp & Dinlenme</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Serin akşamlarda konfor için flanel gömlekler</li>
                <li>• Hareketi kısıtlamayan rahat kesim pantolonlar</li>
                <li>• Günlük giyim için grafik tişörtler</li>
                <li>• Dış mekan koşullarını karşılayan dayanıklı kumaşlar</li>
                <li>• Kamp alanında çalışan çok yönlü parçalar</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 border animate-on-scroll opacity-0 translate-y-10" style={{ transitionDelay: "200ms" }}>
              <h3 className="text-xl font-semibold mb-4">Seyahat & Keşif</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Kolay paketleme için kırışmaya dayanıklı gömlekler</li>
                <li>• Uzun yolculuklar için rahat pantolonlar</li>
                <li>• Birden fazla ortamda çalışan çok yönlü parçalar</li>
                <li>• Farklı iklimler için katmanlama seçenekleri</li>
                <li>• Küçük paketlenebilen hafif ürünler</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 border animate-on-scroll opacity-0 translate-y-10" style={{ transitionDelay: "300ms" }}>
              <h3 className="text-xl font-semibold mb-4">Balıkçılık & Su Aktiviteleri</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Su teması için hızlı kuruyan malzemeler</li>
                <li>• Uzun dış mekan günleri için güneş koruması</li>
                <li>• Sıcaklık kontrolü için yukarı kıvrılabilir kollu gömlekler</li>
                <li>• Yüz koruması için geniş kenarlı şapkalar</li>
                <li>• Ekipmanlar için güvenli cepli pantolonlar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16 mt-8">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 glass-morphism shadow-glass animate-on-scroll opacity-0 translate-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vizyonumuz</h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Sadece giyim değil, şehir hayatının karmaşasından kaçmak ve doğayla bağlantı kurmak için size eşlik eden ürünler yaratıyoruz.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hedefimiz, ürünlerimizin rahatlığını ve kalitesini deneyimlediğinizde, tüm açık hava maceralarınız için yaşam boyu tercih edeceğiniz marka olmaktır.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Topluluğumuza Katılın</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
