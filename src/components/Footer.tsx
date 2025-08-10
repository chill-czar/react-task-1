import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Portfolio</h3>
            <p className="text-muted-foreground">
              Building beautiful, functional, and user-friendly applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-accent transition-smooth">Home</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-accent transition-smooth">About</a></li>
              <li><a href="/projects" className="text-muted-foreground hover:text-accent transition-smooth">Projects</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-accent transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-muted rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;