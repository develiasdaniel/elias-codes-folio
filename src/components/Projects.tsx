import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Lightbulb } from "lucide-react";

const Projects = () => {
  const projects = [
    
    {
      title: "LLM-Powered Onboarding Generator",
      category: "Hackathon",
      icon: Trophy,
      description: "Interactive system using Large Language Models to generate personalized onboarding requests and workflows.",
      achievements: [
        "2nd place in CodeGames hackathon (524 teams worldwide)",
        "Automated complex onboarding processes",
        "Integrated cutting-edge LLM technology"
      ],
      technologies: ["LLM", "AI", "React", "TypeScript"],
      award: "2nd Place - CodeGames 2024"
    },
    {
      title: "Environmental Indicators Analysis System",
      category: "Research - AI/ML",
      icon: Lightbulb,
      description: "KPI visualization system for measuring environmental conditions at National Polytechnic Institute Campus, achieving 90%+ accuracy with ML algorithms.",
      achievements: [
        "Implemented Neural Networks & Linear Regression for Air Quality Index prediction",
        "Created interactive data visualizations for environmental monitoring",
        "Part of multidisciplinary Smart Campus initiative at IPN Zacatenco"
      ],
      technologies: ["Machine Learning", "Python", "Data Visualization", "IoT"],
      award: "Bachelor's Thesis Project - Highest Honors"
    },
    {
      title: "RIO APP - Precision Irrigation System",
      category: "Innovation",
      icon: Trophy,
      description: "Mobile application for precision irrigation in greenhouses, optimizing water usage for sustainable agriculture.",
      achievements: [
        "Won 1st place in Hackatec competition (local stage)",
        "Integrated IoT sensors for real-time monitoring",
        "Reduced water consumption through intelligent automation"
      ],
      technologies: ["React Native", "IoT", "Cloud", "Mobile Development"],
      award: "1st Place - Hackatec 2020"
    },
    {
      title: "APPIS-ATM - Smart Beekeeping System",
      category: "IoT & AI",
      icon: Award,
      description: "Automated control system for monitoring hive environments using IoT, enhancing productivity through real-time data.",
      achievements: [
        "3rd place among 100 projects in Oaxaca Entrepreneurship competition",
        "Secured 30,000 MXN funding from Oaxacan Institute for Entrepreneurs",
        "Real-time environmental monitoring and automated controls"
      ],
      technologies: ["IoT", "Sensors", "React", "Real-time Systems"],
      award: "3rd Place - Oaxaca Entrepreneurship 2019"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Award-winning innovations in AI, IoT, and sustainable technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Achievements */}
                <ul className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-primary mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Award Badge */}
                {project.award && (
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Trophy className="w-4 h-4" />
                      <span className="font-semibold">{project.award}</span>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
