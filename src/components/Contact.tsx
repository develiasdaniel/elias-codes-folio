import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "eliasdanielsanchezlopez@gmail.com",
      href: "mailto:eliasdanielsanchezlopez@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+1) 518 977 2427",
      href: "tel:+15189772427"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Albany, New York",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/eliasdsanchez/",
      color: "hover:text-[#0077B5]"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/eliasdsanchez",
      color: "hover:text-foreground"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I'm always open to discussing new opportunities, collaborations, or research projects
          </p>
        </div>

        <div className="space-y-6">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {contactInfo.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.href ? (
                  <a href={item.href} className="block text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </a>
                ) : (
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <Card className="p-8 bg-gradient-card border-border text-center">
            <h3 className="text-xl font-semibold mb-6">Find me on</h3>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button 
                    variant="glass" 
                    size="lg"
                    className={`gap-2 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                    {social.label}
                  </Button>
                </a>
              ))}
            </div>
          </Card>

          {/* CTA */}
          <Card className="p-8 bg-gradient-primary text-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-3 text-primary-foreground">
              Interested in collaborating?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Whether it's research, development, or just a tech conversation, 
              I'd love to hear from you!
            </p>
            <a href="mailto:eliasdanielsanchezlopez@gmail.com">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20"
              >
                <Mail className="w-5 h-5" />
                Send me an email
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
