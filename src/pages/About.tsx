import { Code, Database, Palette, Globe, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Palette,
      items: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'TailwindCSS', 'Sass']
    },
    {
      category: 'Backend',
      icon: Database,
      items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'Tools & Technologies',
      icon: Code,
      items: ['Git', 'Docker', 'AWS', 'Webpack', 'Jest', 'Figma']
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: '5+ Years Experience',
      description: 'Building scalable web applications'
    },
    {
      icon: Users,
      title: '50+ Projects',
      description: 'Successfully delivered to clients'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worked with international teams'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-6 gradient-text">About Me</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate full-stack developer with a love for creating beautiful, 
                functional, and user-centered digital experiences. With over 5 years of 
                experience in the industry, I've had the privilege of working on diverse 
                projects ranging from startups to enterprise applications.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My journey in development started with curiosity about how websites work, 
                and it has evolved into a career focused on crafting solutions that make 
                a real difference in people's lives.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary">
                <Link to="/contact">Let's Work Together</Link>
              </Button>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-gradient-primary p-8 rounded-2xl">
                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Quick Facts</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>🎓 Bachelor's in Computer Science</li>
                    <li>💼 5+ years of professional experience</li>
                    <li>🌍 Based in San Francisco, CA</li>
                    <li>☕ Coffee enthusiast and tech blogger</li>
                    <li>🎯 Focus on React, Node.js, and modern web technologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I work with a variety of technologies to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={skillGroup.category}
                className="project-card animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <skillGroup.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-2 bg-muted text-sm rounded-lg text-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Some milestones I'm proud of
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Start a Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new challenges and collaborate with amazing people. 
            Let's discuss your next project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;