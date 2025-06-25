import { useEffect, useRef } from 'react';
import { projects } from '../../constants/projects';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.project-animate');
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div ref={projectsRef} className="py-16">
      <div className="container mx-auto px-4">
        {/* Projects Section Title */}
        <div className="project-animate opacity-0 transition-all duration-700 transform translate-y-10 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 inline-block relative">
            <span className="text-white">Projects</span>
            <div className="h-1 w-1/2 bg-secondary mt-2"></div>
          </h2>
          <p className="text-white text-opacity-80 max-w-2xl mx-auto text-center text-lg font-medium">
            Showcasing my recent works and side projects
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-animate opacity-0 project-card group"
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="h-full bg-black bg-opacity-50 backdrop-blur-sm rounded-lg overflow-hidden flex flex-col border-t-2 border-secondary shadow-xl transition-all duration-500 relative">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-secondary opacity-0 group-hover:opacity-20 rounded-lg blur-md transition-all duration-500 group-hover:duration-200"></div>
                
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden img-container" style={{ '--index': index } as React.CSSProperties}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 backdrop-blur-[2px] group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  {/* Project Number Badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-secondary bg-opacity-20 border border-secondary border-opacity-30 flex items-center justify-center text-secondary font-mono z-10 text-sm">
                    0{index + 1}
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-secondary opacity-20 transition-opacity duration-300" 
                    style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                </div>
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full p-6 text-left">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-white text-opacity-80 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech_stack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-mono px-2 py-1 rounded-md bg-secondary bg-opacity-10 text-secondary transition-all duration-300"
                        style={{ "--i": i } as React.CSSProperties}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors duration-300 p-2 hover:bg-secondary hover:bg-opacity-10 rounded-full"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    
                    {project.deployed_link && (
                      <a 
                        href={project.deployed_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-white transition-colors duration-300 p-2 hover:bg-secondary hover:bg-opacity-10 rounded-full"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
