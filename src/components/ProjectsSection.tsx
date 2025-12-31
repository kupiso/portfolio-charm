import { Settings, Wrench, Cpu, Factory, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Industrial HVAC System Design",
    category: "HVAC Engineering",
    description: "Designed and optimized a complete HVAC system for a 5,000m² manufacturing facility, achieving 30% energy efficiency improvement through advanced thermal modeling and component selection.",
    technologies: ["AutoCAD", "Thermal Analysis", "Energy Modeling", "CFD Simulation"],
    icon: Settings,
    highlights: ["30% energy savings", "Climate control optimization", "Regulatory compliance"],
  },
  {
    title: "Automated Assembly Line Integration",
    category: "Manufacturing Automation",
    description: "Led the mechanical design and integration of robotic arms into an existing production line, increasing throughput by 45% while maintaining quality standards.",
    technologies: ["SolidWorks", "PLC Programming", "Robot Integration", "Process Optimization"],
    icon: Factory,
    highlights: ["45% throughput increase", "Zero downtime migration", "ROI within 18 months"],
  },
  {
    title: "Precision Gear System Development",
    category: "Mechanical Design",
    description: "Developed a custom gear reduction system for heavy machinery applications, utilizing FEA analysis to ensure durability under extreme load conditions.",
    technologies: ["FEA Analysis", "GD&T", "Material Selection", "Stress Testing"],
    icon: Wrench,
    highlights: ["50,000+ hour lifespan", "High-load capacity", "Custom tooth profile"],
  },
  {
    title: "IoT-Enabled Predictive Maintenance System",
    category: "Smart Manufacturing",
    description: "Collaborated on implementing sensor-based monitoring systems for critical equipment, enabling predictive maintenance and reducing unplanned downtime by 60%.",
    technologies: ["Sensor Integration", "Data Analysis", "Vibration Monitoring", "MS Office"],
    icon: Cpu,
    highlights: ["60% downtime reduction", "Real-time monitoring", "Cost savings $200K/year"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of engineering solutions demonstrating technical expertise 
            and problem-solving capabilities in mechanical engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs bg-secondary/80"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-2">Key Achievements:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <span 
                        key={hIndex}
                        className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Additional project documentation and CAD files available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
