import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Frameworks",
      skills: ["C#", ".NET Core", "JavaScript", "TypeScript", "React", "Node.js", "Python"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["Microsoft Azure", "Microservices", "API Gateway", "Serverless", "CI/CD", "Docker"]
    },
    {
      icon: Database,
      title: "Data & Storage",
      skills: ["PostgreSQL", "SQL Server", "Elasticsearch", "Redis", "Data Analysis"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Neural Networks", "Linear Regression", "LLMs", "Data Visualization"]
    }
  ];

  const languages = [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Intermediate-Advanced" }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technical proficiencies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold pt-2">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary"
                    className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Languages */}
        <Card className="p-6 bg-gradient-card border-border">
          <h3 className="text-xl font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="font-medium">{lang.name}:</span>
                <Badge variant="outline">{lang.level}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
