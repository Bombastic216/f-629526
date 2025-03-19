
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Bültenimize abone olduğunuz için teşekkürler!");
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="font-display text-xl font-semibold tracking-tighter hover-float">
              PrivacyPolicy.com
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Şehrin karmaşasından kaçmanıza ve doğanın güzelliğini kucaklamanıza yardımcı olan premium dış giyim ürünleri tasarlıyoruz.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Bağlantılar
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Anasayfa", path: "/" },
                { name: "Hakkımızda", path: "/about" },
                { name: "Ürünler", path: "/products" },
                { name: "İletişim", path: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Yasal
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Gizlilik Politikası", path: "#" },
                { name: "Kullanım Şartları", path: "#" },
                { name: "Çerezler", path: "#" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Abone Ol
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Güncellemeler için bültenimize abone olun.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="E-posta adresiniz"
                  required
                  className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                />
                <Button type="submit" className="rounded-l-none">
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Abone Ol</span>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Gizliliğinize saygı duyuyoruz. İstediğiniz zaman abonelikten çıkabilirsiniz.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PrivacyPolicy.com. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
