
import { useEffect } from "react";

const About = () => {
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
    <div className="pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <div className="max-w-3xl mx-auto text-center animate-blur-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Felsefemiz
          </h1>
          <p className="text-xl text-muted-foreground">
            Form ve işlevi dengeleyen, gerçekten önemli olana odaklanan ürünler yaratmaya inanıyoruz.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-10">
              <div className="rounded-2xl bg-muted aspect-square"></div>
            </div>
            <div className="space-y-6 animate-on-scroll opacity-0 translate-y-10">
              <h2 className="text-3xl font-bold">Hikayemiz</h2>
              <p className="text-muted-foreground">
                Minimalist tasarım ve düşünceli işlevsellik ilkeleri üzerine kurulmuş olan yolculuğumuz, 
                basit bir vizyonla başladı: hem kullanıcıya hem de ortama saygı duyan dijital deneyimler yaratmak.
              </p>
              <p className="text-muted-foreground">
                Netlik, amaç ve detaylara dikkat etmeyi ön planda tutan zamansız tasarım felsefelerinden 
                ilham alıyoruz. Üstlendiğimiz her projeye, azın daha fazla olduğuna dair inançla yaklaşıyoruz, 
                ancak geriye kalan şey önemli olduğunda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0 translate-y-10">
            Temel Değerlerimiz
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sadelik",
                description: "Gerçekten önemli olana odaklanmak için gereksiz olanı ortadan kaldırarak sadeliğin gücünü benimsiyoruz."
              },
              {
                title: "Hassasiyet",
                description: "Her piksel, etkileşim ve kod satırı titiz bir hassasiyet ve amaçla oluşturulur."
              },
              {
                title: "Uyum",
                description: "Estetik ve işlevsellik arasında, hiçbirinin diğerini gölgede bırakmadığından emin olarak denge arıyoruz."
              },
              {
                title: "Yenilik",
                description: "Yerleşik kalıplara saygı duyarken, kullanıcı deneyimlerini geliştiren yeni yaklaşımları sürekli olarak keşfediyoruz."
              },
              {
                title: "Şeffaflık",
                description: "Açık iletişim ve dürüst tasarım prensipleri, müşteriler ve kullanıcılarla ilişkilerimize rehberlik eder."
              },
              {
                title: "Kalite",
                description: "Kaliteden asla ödün vermiyoruz, mükemmel uygulamanın tasarım vizyonuna saygı duyduğuna inanıyoruz."
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 border animate-on-scroll opacity-0 translate-y-10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0 translate-y-10">
            Ekibimiz
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Ali Yılmaz", role: "Kreatif Direktör" },
              { name: "Zeynep Kaya", role: "Baş Tasarımcı" },
              { name: "Mehmet Öz", role: "UI Geliştirici" },
              { name: "Deniz Şahin", role: "UX Araştırmacısı" },
              { name: "Elif Demir", role: "Hareket Tasarımcısı" },
              { name: "Can Yıldırım", role: "Frontend Mühendisi" }
            ].map((member, index) => (
              <div 
                key={index} 
                className="text-center animate-on-scroll opacity-0 translate-y-10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-muted rounded-full w-32 h-32 mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
