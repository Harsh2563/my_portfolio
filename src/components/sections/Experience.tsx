import { useEffect, useRef } from 'react';
import { experiences } from '../../constants/experience';

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    const elements = document.querySelectorAll('.exp-animate');
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
    <div ref={experienceRef} className="py-16">
      <div className="container mx-auto px-4">
        {/* Experience Section Title */}
        <div className="exp-animate opacity-0 transition-all duration-700 transform translate-y-10 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 inline-block relative">
            <span className="text-white">Work Experience</span>
            <div className="h-1 w-1/2 bg-secondary mt-2"></div>
          </h2>
          <p className="text-white text-opacity-80 max-w-2xl mx-auto text-center text-lg font-medium">
            My professional journey and accomplishments
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative mx-auto pt-10">
          {/* Center line with animation - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-secondary to-transparent opacity-50 hidden md:block" style={{ zIndex: 5 }}></div>
          
          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`exp-animate opacity-0 transition-all duration-1000 mb-20 flex w-full items-center justify-center`}
              style={{ 
                transitionDelay: `${200 + index * 200}ms`,
                transform: index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)'
              }}
            >
              <div className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} md:items-center w-full`}>
                {/* Timeline dot - hidden on mobile */}
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-black bg-opacity-70 border-2 border-secondary items-center justify-center z-20 shadow-lg shadow-secondary/20 animate-pulse hidden md:flex">
                  <span className="text-xl">{exp.icon}</span>
                </div>
                
                {/* Date badge - visible on large screens */}
                <div className={`hidden md:block absolute translate-y-4 left-1/2 ${index % 2 === 0 ? 'translate-x-16' : '-translate-x-64'} py-2 px-3 text-center text-secondary text-sm font-mono bg-black bg-opacity-70 backdrop-blur-sm rounded-md shadow-lg z-10`}>
                  {exp.dateRange}
                </div>
                
                {/* Card */}
                <div className={`w-full pl-4 pr-4 mb-12 md:mb-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pl-20 md:pr-8' : 'md:ml-auto md:pl-8 md:pr-20'}`}>
                  <div className="experience-card relative p-6 rounded-lg bg-black bg-opacity-50 backdrop-blur-sm border-l-2 border-secondary hover:bg-opacity-60 hover:border-l-4 transition-all duration-300 shadow-xl group text-left">
                    {/* Mobile date badge */}
                    <div className="md:hidden text-secondary font-mono text-sm mb-2">
                      {exp.period}
                    </div>
                    
                    {/* Add subtle glow effect on hover */}
                    <div className="absolute inset-0 bg-secondary opacity-0 blur-xl group-hover:opacity-5 rounded-lg transition-all duration-300"></div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-secondary transition-colors duration-300">{exp.title}</h3>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-secondary">{exp.company}</h4>
                    </div>
                    
                    <ul className="space-y-3 text-white text-opacity-90 text-left">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start group/item">
                          <span className="inline-block mr-2 mt-0.5 text-secondary transition-all duration-300 group-hover/item:translate-x-1">▹</span>
                          <span className="group-hover/item:text-white transition-all duration-300">{point}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
