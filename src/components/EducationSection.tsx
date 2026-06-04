import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "Dublin Business School",
      degree: "MSc in Supply Chain Management",
      dates: "Sep 2024 – Sep 2025",
      coursework: [
        "Supply Chain Analytics",
        "Sustainable Logistics",
        "Demand Forecasting",
        "Inventory Optimization",
        "Applied Research Methods",
      ],
    },
    {
      institution: "SRM Institute of Science and Technology",
      degree: "Bachelor of Commerce (B. Com General)",
      dates: "2019 – 2022",
      coursework: [
        "Business & Commerce Fundamentals",
        "Operations & Management",
        "Accounting Principles",
        "Economics",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Education
            </h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Postgraduate supply chain management and undergraduate commerce.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-[hsl(var(--primary))]" />
              Degrees
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 border-l-[hsl(var(--primary))]"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold text-foreground mb-2">
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-2">
                      <p className="text-base font-medium text-[hsl(var(--primary))]">
                        {edu.institution}
                      </p>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{edu.dates}</span>
                      </div>
                    </div>
                  </CardHeader>
                  {edu.coursework.length > 0 && (
                    <CardContent>
                      <p className="font-semibold text-foreground mb-3">Key focus areas:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <Badge
                            key={courseIndex}
                            variant="secondary"
                            className="font-normal text-xs rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
