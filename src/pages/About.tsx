
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
            Our Philosophy
          </h1>
          <p className="text-xl text-muted-foreground">
            We believe in creating products that balance form and function, focusing on what truly matters.
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
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Founded on the principles of minimalist design and thoughtful functionality, 
                our journey began with a simple vision: to create digital experiences 
                that respect both the user and the medium.
              </p>
              <p className="text-muted-foreground">
                We draw inspiration from the timeless design philosophies that prioritize 
                clarity, purpose, and attention to detail. Every project we undertake is 
                approached with the belief that less is more, but only when what remains is essential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0 translate-y-10">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Simplicity",
                description: "We embrace the power of simplicity, stripping away the unnecessary to focus on what truly matters."
              },
              {
                title: "Precision",
                description: "Every pixel, interaction, and line of code is crafted with careful precision and purpose."
              },
              {
                title: "Harmony",
                description: "We seek balance between aesthetics and functionality, ensuring neither overshadows the other."
              },
              {
                title: "Innovation",
                description: "While respecting established patterns, we continuously explore new approaches that enhance user experiences."
              },
              {
                title: "Transparency",
                description: "Clear communication and honest design principles guide our relationships with clients and users."
              },
              {
                title: "Quality",
                description: "We never compromise on quality, believing that excellence in execution honors the design vision."
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
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Thompson", role: "Creative Director" },
              { name: "Sara Chen", role: "Lead Designer" },
              { name: "Mark Williams", role: "UI Developer" },
              { name: "Jordan Lee", role: "UX Researcher" },
              { name: "Maya Rodriguez", role: "Motion Designer" },
              { name: "David Kim", role: "Frontend Engineer" }
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
