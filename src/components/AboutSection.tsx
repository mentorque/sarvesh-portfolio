import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Linkedin, GraduationCap, Calendar, Globe, Award, Phone } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, LINKEDIN_URL } from "@/config/site";

const AboutSection = () => {
  const quickFacts = [
    { icon: MapPin, label: "Location", value: "Dublin, Ireland" },
    { icon: GraduationCap, label: "Education", value: "MSc Supply Chain Management" },
    { icon: Calendar, label: "Experience", value: "2 years" },
    { icon: Globe, label: "Focus", value: "Inventory, procurement & logistics" },
  ];

  const contactInfo = [
    { icon: Mail, value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { icon: Phone, value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}` },
    { icon: MapPin, value: "Dublin, Ireland", href: "" },
    { icon: Linkedin, value: "LinkedIn", href: LINKEDIN_URL },
  ];

  return (
    <section id="about" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              About
            </h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>
                Results-driven Supply Chain Analyst with 2 years of experience optimizing inventory management, procurement coordination, and cross-functional workflow in fast-paced environments.
              </p>
              <p>
                Demonstrates advanced Excel-based reporting and data analysis to boost operational efficiency and inventory accuracy across manufacturing and e-commerce operations.
              </p>
              <p>
                Delivers measurable improvements in process reliability, on-time delivery, and cost control through structured coordination between warehouse, operations, and procurement teams.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-card border border-border/60 shadow-sm hover:border-[hsl(var(--primary))]/30 transition-colors duration-200"
                  >
                    <contact.icon className="w-5 h-5 text-[hsl(var(--primary))] shrink-0" />
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground font-medium hover:text-[hsl(var(--primary))] transition-colors text-sm break-all"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium text-sm">{contact.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-[hsl(var(--primary))]" />
                    Quick facts
                  </h4>
                  <div className="space-y-6">
                    {quickFacts.map((fact, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 pb-4 border-b border-border last:border-0 last:pb-0"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <fact.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground text-sm uppercase tracking-wide">
                            {fact.label}
                          </p>
                          <p className="text-muted-foreground mt-1 font-medium text-sm">{fact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
