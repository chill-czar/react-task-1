export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

import ecommerceImage from '@/assets/project-ecommerce.jpg';
import tasksImage from '@/assets/project-tasks.jpg';
import weatherImage from '@/assets/project-weather.jpg';
import analyticsImage from '@/assets/project-analytics.jpg';
import recipesImage from '@/assets/project-recipes.jpg';
import portfolioImage from '@/assets/project-portfolio.jpg';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.',
    image: ecommerceImage,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'TailwindCSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: tasksImage,
    technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions, forecasts, and weather maps using real-time data from multiple APIs.',
    image: weatherImage,
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'CSS3'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description: 'A comprehensive analytics dashboard for social media performance tracking with data visualization and reporting features.',
    image: analyticsImage,
    technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '5',
    title: 'Recipe Finder App',
    description: 'A mobile-first recipe application with search functionality, meal planning, and shopping list generation features.',
    image: recipesImage,
    technologies: ['React Native', 'Redux', 'Spoonacular API', 'SQLite'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.',
    image: portfolioImage,
    technologies: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];