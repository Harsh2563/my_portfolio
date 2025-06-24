import { useEffect, useRef } from 'react';
import Typewriter from '../ui/Typewriter';

const Hero = () => {
  const professions = [
    "Web Developer",
    "DSA Enthusiast",
    "Software Engineer",
    "Tech Enthusiast",
    "Problem Solver",
    "Anime Lover",
    "Football Fan"
  ];

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = "1";
    }
  }, []);

  return (
    <div 
      ref={heroRef}
      className="min-h-[calc(100vh-5rem)] flex items-center transition-opacity duration-1000 opacity-0"
      style={{ paddingTop: "5rem" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="mb-4">
              <span className="text-secondary font-mono text-lg">Hello, my name is</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-4">
              <span className="text-textPrimary">Harsh</span>
              <span className="text-secondary"> Rai</span>
            </h1>
            
            <div className="flex text-2xl md:text-3xl font-medium mb-8 text-textSecondary h-12">
              <span className="mr-2">I'm a </span>
              <Typewriter texts={professions} typingSpeed={80} deletingSpeed={40} />
            </div>
            
            <p className="text-textSecondary text-lg md:text-xl mb-8 max-w-2xl">
            I enjoy building responsive and user-friendly web experiences with modern technologies. I'm passionate about clean code, learning new tools, and taking on exciting challenges. Outside of coding, I love watching anime and never miss a good football match.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded border-2 border-secondary text-secondary hover:bg-secondary hover:bg-opacity-10 transition-all">
                View My Work
              </button>
              <button className="px-6 py-3 rounded bg-secondary bg-opacity-10 text-secondary border-2 border-secondary hover:bg-opacity-20 transition-all">
                Contact Me
              </button>
            </div>
          </div>
          
          {/* Right side - Image (hidden on mobile) */}
          <div className="w-full lg:w-1/2 hidden md:block">
            <div className="relative group">
              <div className="absolute -inset-1 bg-secondary opacity-20 rounded-lg blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative overflow-hidden rounded-lg max-w-md mx-auto">
                <img 
                  src="/photo.jpg" 
                  alt="Harsh Rai" 
                  className="w-full h-auto object-cover border-2 border-secondary rounded-lg"
                />
                <div className="absolute inset-0 bg-primary opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
