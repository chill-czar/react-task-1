import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique technologies for filtering
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );
  const categories = ['All', ...allTechnologies];

  // Filter projects based on search and category
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
                           project.technologies.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 gradient-text animate-fade-in">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            A collection of projects I've worked on, showcasing various technologies and creative solutions. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex gap-2 flex-wrap">
                {categories.slice(0, 6).map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? 'bg-gradient-primary' : ''}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-muted-foreground">
                  Showing {filteredProjects.length} of {projects.length} projects
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Like What You See?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and bring innovative ideas to life. 
            Let's discuss your next project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary">
              Start a Project
            </Button>
            <Button size="lg" variant="outline">
              View Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;