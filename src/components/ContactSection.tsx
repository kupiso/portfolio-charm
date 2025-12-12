import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "061 139 5770",
      href: "tel:+27611395770"
    },
    {
      icon: Mail,
      label: "Email",
      value: "siswanantsika@gmail.com",
      href: "mailto:siswanantsika@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "View Profile",
      href: "#"
    }
  ];

  const references = [
    {
      name: "Lubabalo Bambeni",
      title: "Project Manager/Supervisor",
      company: "Walter Sisulu University",
      phone: "072 181 1757"
    },
    {
      name: "Jill Jigels",
      title: "Office Supervisor",
      company: "Gehring Engineering",
      phone: "083 564 6805"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-lg text-muted-foreground animate-fade-up delay-100">
              Ready to contribute to your engineering team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="card-elevated rounded-xl p-5 flex items-center gap-4 hover-lift interactive-card group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* CTA */}
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="mailto:siswanantsika@gmail.com">
                  <Send className="w-5 h-5" />
                  Send Email
                </a>
              </Button>
            </div>

            {/* References */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-6">References</h3>
              
              <div className="space-y-4">
                {references.map((ref) => (
                  <div 
                    key={ref.name}
                    className="card-elevated rounded-xl p-6 hover-lift interactive-card"
                  >
                    <h4 className="font-bold text-lg mb-1">{ref.name}</h4>
                    <p className="text-primary text-sm mb-2">{ref.title}</p>
                    <p className="text-muted-foreground text-sm mb-3">{ref.company}</p>
                    <a 
                      href={`tel:${ref.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {ref.phone}
                    </a>
                  </div>
                ))}
              </div>

              {/* Note */}
              <p className="text-xs text-muted-foreground mt-6 text-center">
                References available upon request
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
