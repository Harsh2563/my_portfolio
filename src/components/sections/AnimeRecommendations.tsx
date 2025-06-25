import { useEffect, useRef } from 'react';
import Section from './Section';
import { animes } from '../../constants/anime';

const AnimeRecommendations = () => {
  const animeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    const elements = document.querySelectorAll('.anime-animate');
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
    <Section id="anime" className="pb-0 pt-10">
      <div ref={animeRef} className="container mx-auto px-4">
        {/* Anime Section Title */}
        <div className="anime-animate opacity-0 transition-all duration-700 transform translate-y-10 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 inline-block relative">
            <span className="text-white">Anime <span className="text-secondary">Recommendations</span></span>
            <div className="h-1 w-1/2 bg-secondary mt-2"></div>
          </h2>
          <p className="text-white text-opacity-80 max-w-2xl mx-auto text-center text-lg font-medium">
          When I'm not coding, I love diving into these amazing anime worlds. Here's my collection of favorites that continuously inspire me.
          </p>
        </div>
        
        <div className="anime-animate opacity-0 transition-all duration-700 transform translate-y-10 delay-100">
          <div className="mt-36 overflow-hidden">
            <div className="anime-scroll-container">
              <div className="anime-scroll primary">
                {animes.map((anime) => (
                  <div key={`primary-${anime.id}`} className="anime-item">
                    <img 
                      src={anime.image_url} 
                      alt={anime.title} 
                      className="rounded-lg"
                      loading="lazy"
                    />
                    <p className="text-textPrimary font-medium text-sm mt-2 truncate text-center">{anime.title}</p>
                  </div>
                ))}
                {animes.map((anime) => (
                  <div key={`primary-duplicate-${anime.id}`} className="anime-item">
                    <img 
                      src={anime.image_url} 
                      alt={anime.title} 
                      className="rounded-lg"
                      loading="lazy"
                    />
                    <p className="text-textPrimary font-medium text-sm mt-2 truncate text-center">{anime.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AnimeRecommendations;
