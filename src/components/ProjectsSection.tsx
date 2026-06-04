import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import supplyChainProjectImage from "@/assets/supply-chain-project.png";

type Project = {
  title: string;
  subtitle?: string;
  highlights: string[];
  stack: string[];
  image: string;
  imageFit?: "cover" | "contain";
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "MSc Dissertation: Sustainable Transportation & Supply Chains",
      subtitle: "Applied Analytics & Optimization Models",
      highlights: [
        "Conducted quantitative IBM SPSS analysis on AI and IoT impacts for route optimization and sustainable logistics.",
        "Built automated Excel cost calculators and reporting models, reducing processing time by 30% and improving demand forecast accuracy by 10%.",
        "Analyzed SKU velocity to recalibrate safety stock policies, reducing excess inventory by 15% and increasing fill-rate reliability.",
        "Refined supplier selection and negotiation strategies through targeted market research, improving purchasing terms and profitability.",
        "Developed daily dashboards tracking service levels, inventory turnover, and product profitability to drive operational improvements.",
      ],
      stack: [
        "IBM SPSS",
        "Microsoft Excel",
        "Demand Forecasting",
        "Inventory Optimization",
        "Supply Chain Analytics",
        "Dashboard Reporting",
      ],
      image: supplyChainProjectImage,
      imageFit: "cover",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Academic projects
            </h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Research and analytics applied to sustainable supply chain operations.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="rounded-lg border border-border/70 bg-card shadow-sm overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="relative aspect-video overflow-hidden border-b border-border/50 bg-white rounded-lg m-3 mb-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={
                      project.imageFit === "contain"
                        ? "w-full h-full object-contain object-center p-3 sm:p-4"
                        : "w-full h-full object-cover"
                    }
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-foreground leading-snug">
                    {project.title}
                  </CardTitle>
                  {project.subtitle ? (
                    <p className="text-sm font-medium text-[hsl(var(--primary))] mt-1">
                      {project.subtitle}
                    </p>
                  ) : null}
                </CardHeader>
                <CardContent className="flex flex-col gap-4 flex-1 pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                    {project.highlights.map((line) => (
                      <li key={line.slice(0, 48)} className="flex gap-2.5 leading-relaxed">
                        <span className="text-[hsl(var(--primary))] shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-current" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/80 mb-2">
                      Tools & methods
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-normal text-xs rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
