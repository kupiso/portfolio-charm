import { Cog, Lightbulb, Target, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Cog,
      title: "Mechanical Expertise",
      description: "Strong foundational knowledge of mechanical principles, systems, and maintenance procedures"
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "Passionate about designing efficient systems and improving processes"
    },
    {
      icon: Target,
      title: "Detail Oriented",
      description: "Focused on precision and quality in every engineering project"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with excellent communication skills"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-up delay-100">
              A motivated and detail-oriented mechanical engineer graduate seeking to leverage 
              strong technical skills and innovative problem-solving abilities
            </p>
          </div>

          {/* Career Objective */}
          <div className="card-elevated rounded-2xl p-8 md:p-12 mb-12 animate-fade-up delay-200">
            <h3 className="text-2xl font-bold mb-4 text-primary">Career Objective</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about designing efficient systems, improving processes, and contributing 
              to cutting-edge projects that drive technological advancement and operational excellence. 
              I bring a unique combination of technical expertise, hands-on experience, and a 
              commitment to continuous improvement.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className={`card-elevated rounded-xl p-6 hover-lift interactive-card animate-fade-up delay-${(index + 3) * 100}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
