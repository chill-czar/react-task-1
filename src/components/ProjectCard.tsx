import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <div className="project-card group">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
          <div className="flex space-x-2">
            {liveUrl && (
              <Button size="sm" variant="secondary">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            )}
            {githubUrl && (
              <Button size="sm" variant="outline">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-smooth">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-2 pt-2">
          {liveUrl && (
            <Button size="sm" variant="default" className="bg-gradient-primary">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="outline">
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;