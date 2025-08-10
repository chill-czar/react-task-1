import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="hero-title mb-6">
              Creative
              <br />
              <span className="text-accent">Developer</span>
            </h1>
            
            <p className="hero-subtitle max-w-3xl mx-auto mb-8">
              I craft beautiful, functional, and user-centered digital experiences 
              using modern technologies and creative problem-solving.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-primary hover:scale-105 transition-bounce">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild className="hover:scale-105 transition-bounce">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-glow">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">What I Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I specialize in creating digital solutions that combine beautiful design 
              with powerful functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Full-Stack Development',
                description: 'Building robust web applications using React, Node.js, and modern databases.'
              },
              {
                icon: Palette,
                title: 'UI/UX Design',
                description: 'Creating intuitive and beautiful user interfaces that enhance user experience.'
              },
              {
                icon: Zap,
                title: 'Performance Optimization',
                description: 'Ensuring fast, responsive, and scalable applications for optimal user experience.'
              }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="project-card text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-bounce">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;