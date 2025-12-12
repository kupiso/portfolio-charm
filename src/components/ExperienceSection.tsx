import { Calendar, MapPin, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Material Buyer / Intern",
      company: "Gehring Engineering",
      period: "Jan 2022 – Jul 2022",
      type: "In-Service Training",
      responsibilities: [
        "Produced AutoCAD drawings for parts to be manufactured",
        "Receptionist duties including customer interaction and information gathering",
        "Ordered specific materials and equipment for workshop needs",
        "Applied negotiation skills in customer interactions"
      ]
    },
    {
      title: "Workshop Maintenance Team Assistant / Intern",
      company: "Ikusasa Green",
      period: "Jun 2021 – Oct 2021",
      type: "In-Service Training",
      responsibilities: [
        "Operated moulding machines in manufacturing processes",
        "Serviced machinery on monthly and weekly schedules",
        "Performed welding operations and compressor servicing",
        "Contributed to overall workshop maintenance activities"
      ]
    },
    {
      title: "Tutor",
      company: "Walter Sisulu University Tutoring Department",
      period: "Jan 2021 – Jun 2021",
      type: "Academic Role",
      responsibilities: [
        "Tutored Engineering Drawing I module",
        "Assisted students with Mechanics II concepts",
        "Provided support for Strength of Materials III",
        "Developed leadership and communication skills through team coordination"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="section-divider mb-6" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div 
                key={exp.title}
                className={`relative mb-12 md:mb-16 animate-fade-up delay-${(index + 1) * 100}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 -translate-x-1/2 glow-accent" />
                
                {/* Content card */}
                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'}`}>
                  <div className="card-elevated rounded-2xl p-6 md:p-8 hover-lift interactive-card">
                    {/* Type badge */}
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      {exp.type}
                    </span>
                    
                    {/* Title & Company */}
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                    
                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
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

export default ExperienceSection;
