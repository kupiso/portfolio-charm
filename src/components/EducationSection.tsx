import { GraduationCap, Award, BookOpen } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Advanced Diploma in Mechanical Engineering",
      institution: "In Progress",
      year: "Current",
      icon: GraduationCap,
      highlight: true
    },
    {
      degree: "ND: Mechanical Engineering",
      institution: "Completed",
      year: "2022",
      icon: Award,
      highlight: false
    },
    {
      degree: "Full S4 Mechanical",
      institution: "King Hintsa TVET College (N1-N3)",
      year: "2016",
      icon: BookOpen,
      highlight: false,
      subjects: ["Fluid Mechanics", "Thermodynamics", "Engineering Design", "Workshop Practice", "Electrical Technology"]
    },
    {
      degree: "National Senior Certificate (Matric)",
      institution: "Executive Academy",
      year: "2015",
      icon: GraduationCap,
      highlight: false
    }
  ];

  return (
    <section id="education" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
              Education & <span className="gradient-text">Qualifications</span>
            </h2>
            <div className="section-divider mb-6" />
          </div>

          {/* Education Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div 
                key={edu.degree}
                className={`card-elevated rounded-2xl p-6 md:p-8 hover-lift interactive-card animate-fade-up delay-${(index + 1) * 100} ${
                  edu.highlight ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    edu.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10'
                  }`}>
                    <edu.icon className={`w-7 h-7 ${edu.highlight ? '' : 'text-primary'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {edu.highlight && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                          Current
                        </span>
                      )}
                      <span className="text-primary font-semibold">{edu.year}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    
                    {edu.subjects && (
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground mb-2">Key Modules:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subject) => (
                            <span 
                              key={subject}
                              className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
