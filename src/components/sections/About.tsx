import { useEffect, useRef } from 'react';
import TechIcons from '../ui/TechIcons';

const skills = [
  { category: 'Languages' },
  { category: 'Frontend' },
  { category: 'Backend' },
  { category: 'Databases' },
  { category: 'Tools' }
];

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    const elements = document.querySelectorAll('.about-animate');
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
    <div ref={aboutRef} className="py-16">      <div className="container mx-auto px-4">
        {/* About Me Section Title */}
        <div className="about-animate opacity-0 transition-all duration-700 transform translate-y-10 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 inline-block relative">
            <span>About Me</span>
            <div className="h-1 w-1/2 bg-secondary mt-2"></div>
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-center text-lg">
            Get to know me and my journey
          </p>
        </div>
        
        {/* Bio Section - Centered */}
        <div className="about-animate opacity-0 transition-all duration-700 transform translate-y-10 delay-100 mb-20">
          <div className="space-y-4 text-textSecondary max-w-3xl mx-auto text-xl">
            <p className="text-center">
              I'm Harsh Rai, a third-year Computer Science student at the <span className="text-textPrimary">Indian Institute of Information Technology, Gwalior</span>, with a deep interest in backend systems and problem-solving.
            </p>
            
            <p className="text-center">
              I've interned as an <span className="text-secondary">SDE at Koinx and Electrohire</span>, where I worked on production-grade platforms, optimized backend infrastructure, and implemented scalable features for thousands of users.
            </p>
            
            <p className="text-center">
              I'm proficient in C++, TypeScript, Golang, and Python, and have built applications using modern frameworks like React, Next.js, Node.js, and Express. My strengths lie in <span className="text-secondary">Data Structures & Algorithms</span>, having solved over 1,000+ problems on platforms like LeetCode and GFG.
            </p>
            
            <p className="text-center">
              I also have experience in database design using PostgreSQL, MySQL, MongoDB, and Neo4j, and have worked with tools like Docker, Prisma, Firebase, and Langchain.
            </p>
            
            <p className="text-center">
              Beyond coding, I've mentored over 300 students in my college community, helping foster a strong peer-to-peer learning culture. Outside of tech, I enjoy watching anime, listening to music from a wide range of genres, and I'm a passionate supporter of <span className="text-secondary">FC Barcelona</span>. Whether it's tackling new challenges in development or enjoying a good match or soundtrack, I'm always up for something exciting.
            </p>          </div>
        </div>
          {/* Visual separator */}
        <div className="about-animate opacity-0 transition-all duration-700 transform translate-y-10 delay-150 mb-16">
          <div className="w-24 h-1 bg-secondary bg-opacity-50 mx-auto rounded-full"></div>
        </div>
        
        {/* Skills & Technologies Section Title */}
        <div className="about-animate opacity-0 transition-all duration-700 transform translate-y-10 delay-200 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 inline-block relative">
            <span>Skills & Technologies</span>
            <div className="h-1 w-1/2 bg-secondary mt-2"></div>
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-center text-lg">
            My technical toolkit
          </p>
        </div>
        
        {/* Skills Section - Categories */}
        <div className="about-animate opacity-0 transition-all duration-700 transform translate-y-10 delay-300">
          <div className="space-y-16">
            {skills.map((skillGroup, index) => (                
              <div key={index} className="about-animate opacity-0 transition-all duration-700 transform translate-y-10" style={{ transitionDelay: `${400 + index * 100}ms` }}>
                <h4 className="text-xl font-medium mb-8 text-textPrimary text-center">
                  {skillGroup.category}
                </h4>
                <TechIcons category={skillGroup.category} className="mb-10" />
              </div>
            ))}
              {/* DSA & Mentorship highlights */}
            <div className="about-animate opacity-0 transition-all duration-700 transform translate-y-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" style={{ transitionDelay: `${400 + skills.length * 100}ms` }}>
              <div className="p-6 border border-secondary border-opacity-30 rounded-lg bg-secondary bg-opacity-5 backdrop-blur-sm hover:border-opacity-50 transition-all group">
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 rounded-full p-2 mr-4 group-hover:animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-textPrimary">Problem Solving</h5>
                    <p className="text-textSecondary">
                      Solved 1000+ DSA problems on LeetCode and GeeksforGeeks
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border border-secondary border-opacity-30 rounded-lg bg-secondary bg-opacity-5 backdrop-blur-sm hover:border-opacity-50 transition-all group">
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 rounded-full p-2 mr-4 group-hover:animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-textPrimary">Mentorship</h5>
                    <p className="text-textSecondary">
                      Mentored 300+ students through workshops and coding sessions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
