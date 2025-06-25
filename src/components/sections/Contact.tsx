import { useEffect, useRef } from 'react';
import { socialLinks } from '../../constants/socialLinks';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.contact-animate');
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
    <div ref={contactRef} className="py-16 relative">
      <div className="container mx-auto px-4">
        {/* Contact Section Title */}
        <div className="contact-animate opacity-0 transition-all duration-700 transform translate-y-10 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 inline-block relative">
            <span className="text-white">Contact</span>
            <div className="h-1 w-1/2 bg-secondary mt-2"></div>
          </h2>
          <p className="text-white mx-auto text-opacity-80 max-w-2xl text-lg font-medium mb-10">
            Feel free to reach out - I'm always open to new opportunities and collaborations.
          </p>
        </div>
        
        {/* Contact Form and Links */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side - Contact Form */}
          <div className="lg:w-3/5 contact-animate opacity-0 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
            <div className="bg-black bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border-l-2 border-secondary">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary bg-opacity-10 p-3 rounded-full text-secondary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-medium">Email</h4>
                    <a href="mailto:raiharsh030@gmail.com" className="text-secondary hover:underline transition-all">
                      raiharsh030@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-secondary bg-opacity-10 p-3 rounded-full text-secondary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-white text-opacity-80">Gwalior, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-white text-xl font-semibold mb-4">Find me on</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary bg-opacity-5 hover:bg-opacity-20 p-3 rounded-lg text-secondary transition-all duration-300 flex items-center gap-3 group"
                      aria-label={`Connect with me on ${social.name}`}
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Image/Graphic */}
          <div className="lg:w-2/5 contact-animate opacity-0 transition-all duration-700" style={{ transitionDelay: '400ms' }}>
            <div className="h-full flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-secondary opacity-20 rounded-full blur-xl"></div>
                <div className="relative">
                  {/* Trophy Icon */}
                  <div className="w-64 h-64 mx-auto">
                    <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm rounded-full border border-secondary border-opacity-30">
                      <img src="/barca.png" alt="Trophy Icon" className='h-36 w-96' />
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-white text-lg font-medium">Let's build something amazing together!</p>
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

export default Contact;
