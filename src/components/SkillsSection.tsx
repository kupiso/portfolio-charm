import { Wrench, Code, Users, Briefcase } from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Mechanical Theory", level: 90 },
    { name: "AutoCAD", level: 85 },
    { name: "SolidWorks", level: 75 },
    { name: "Microsoft Office Suite", level: 90 },
    { name: "Engineering Design", level: 85 },
    { name: "Maintenance Procedures", level: 80 },
  ];

  const softSkills = [
    { name: "Communication", icon: Users },
    { name: "Professionalism", icon: Briefcase },
    { name: "Initiative & Drive", icon: Wrench },
    { name: "Customer Focus", icon: Users },
    { name: "Leadership", icon: Briefcase },
    { name: "Negotiation", icon: Users },
  ];

  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent" />
      
      <div className="container px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
              Skills & <span className="gradient-text">Competencies</span>
            </h2>
            <div className="section-divider mb-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="animate-slide-in-left">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-fill"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="animate-slide-in-right">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Interpersonal Skills</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="card-elevated rounded-xl p-5 hover-lift interactive-card"
                  >
                    <skill.icon className="w-5 h-5 text-primary mb-3" />
                    <h4 className="font-semibold">{skill.name}</h4>
                  </div>
                ))}
              </div>

              {/* Additional Attributes */}
              <div className="mt-8 card-elevated rounded-xl p-6">
                <h4 className="font-bold mb-4 text-primary">Key Attributes</h4>
                <div className="flex flex-wrap gap-2">
                  {["Polite", "Assertive", "Energetic", "Self-starter", "Punctual", "High Integrity"].map((attr) => (
                    <span 
                      key={attr}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                    >
                      {attr}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
