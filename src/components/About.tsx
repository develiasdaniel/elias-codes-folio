import { Card } from "@/components/ui/card";
import { GraduationCap, Brain, Code, Award } from "lucide-react";

const About = () => {
  const highlights = [    
    {
      icon: Code,
      title: "Senior Software Engineer",
      description: "5+ years building scalable solutions with .NET, Azure, React, and REST/microservices architecture.",
    },
    {
      icon: GraduationCap,
      title: "PhD Student",
      description: "Pursuing doctoral studies in Computer Science at University at Albany, SUNY, focused on AI research.",
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Research interests include Machine Learning, Smart Cities, and Environmental Technologies.",
    },
    {
      icon: Award,
      title: "Multiple Awards",
      description: "International hackathon winner, Multiple scholarship grantee, and top graduate honors.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about leveraging technology to solve real-world problems through 
            robust software engineering and innovative AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-card border-border">
          <div className="prose prose-invert max-w-none">
            <p className="text-foreground/90 leading-relaxed mb-4">
              My professional experience spans leading software development projects at UST Global 
              to developing innovative solutions at AXITY and BrightCoders. I have architected scalable
              cloud systems primarily on Azure, optimized e-commerce platforms, 
              and built APIs and microservices capable of handling hundreds of thousands of records.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Currently pursuing my PhD in Computer Science at the University at Albany, SUNY, where 
              I'm diving into Artificial Intelligence research with a full Teaching Assistantship. My academic 
              journey started at the Institute of Technology of the Valley of Oaxaca, 
              where I graduated with the highest honors in my class.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Beyond coding, I'm committed to giving back to the tech community through teaching, 
              organizing tech meetups in Oaxaca (Oaxaca.Rb), and mentoring aspiring developers. 
              My research interests include AI for social innovation, environmental technologies, 
              and smart cities.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
