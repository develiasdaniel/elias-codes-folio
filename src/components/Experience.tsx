import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      role: "Teaching Assistant",
      company: "University at Albany",
      period: "Aug 2025 - Present",
      location: "Albany, NY",
      description: [
        "Supporting Data Structures (CS 213) course for four student groups",
        "Conducting programming labs and technical exercises",
        "Mentoring students in core computer science concepts"
      ],
      skills: ["Teaching", "Data Structures", "Python", "Problem Solving"]
    },
    {
      role: "Senior Software Engineer",
      company: "UST Global",
      period: "Oct 2022 - Aug 2025",
      location: "Mexico",
      description: [
        "Led development of generic logging framework from scratch for centralized service logs",
        "Created custom API Gateway using facade pattern for unified application entry",
        "Designed scalable solution processing 500,000+ record files",
        "Implemented cloud architectures with Microsoft Azure services"
      ],
      skills: ["C#", ".NET Core", "Azure", "Microservices", "API Gateway"]
    },
    {
      role: "Software Developer",
      company: "AXITY",
      period: "Dec 2020 - Oct 2022",
      location: "Mexico",
      description: [
        "Developed e-commerce platform boosting customer orders by 60%",
        "Led migration from monolithic to microservices architecture",
        "Improved query performance with Elasticsearch (sub-3s response times)"
      ],
      skills: ["React", "Node.js", "Elasticsearch", "Microservices", "E-commerce"]
    },
    {
      role: "Junior Software Developer",
      company: "BrightCoders",
      period: "Aug 2020 - Dec 2020",
      location: "Mexico",
      description: [
        "Built mobile food delivery app connecting vendors and customers",
        "Implemented cloud infrastructure reducing on-premise costs",
        "Designed database schemas and REST API endpoints"
      ],
      skills: ["React Native", "REST API", "Cloud", "Database Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building scalable solutions and leading technical innovation
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary group-hover:animate-glow" />
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-full bg-border group-hover:bg-primary/50 transition-colors" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {exp.period}
                    </Badge>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
