import { useEffect, useState } from 'react';

// Tech stack icons with their URLs
const techIcons = [
  { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Neo4j', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Go', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'GraphQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Redux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'npm', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
  { name: 'Appwrite', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg'},
  {name: 'Vercel', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  { name: 'Prisma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
  {name: 'Netlify', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
];

// Categories for organizing icons
const techCategories = [
  { name: 'Languages', icons: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C++', 'Python', 'Go'] },
  { name: 'Frontend', icons: ['React', 'Next.js', 'Tailwind', 'Redux'] },
  { name: 'Backend', icons: ['Node.js', 'Express', 'GraphQL'] },
  { name: 'Databases', icons: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Neo4j'] },
  { name: 'Tools', icons: ['Git', 'GitHub', 'VS Code', 'Docker', 'npm', 'Figma', 'Appwrite', 'Vercel', 'Prisma', 'Netlify'] }
];

interface TechIconsProps {
  category: string;
  className?: string;
}

const TechIcons: React.FC<TechIconsProps> = ({ category, className = '' }) => {
  // Get icons for the specified category
  const categoryIcons = techCategories.find(cat => cat.name === category)?.icons || [];
  const filteredIcons = techIcons.filter(icon => categoryIcons.includes(icon.name));
  
  // For continuous floating animation with random positions
  const [positions, setPositions] = useState<Array<{ x: number, y: number, delay: number }>>([]);
  
  useEffect(() => {
    // Initialize random positions for each icon
    const newPositions = filteredIcons.map(() => ({
      x: Math.random() * 20 - 10, // Random value between -10 and 10
      y: Math.random() * 20 - 10,
      delay: Math.random() * 5 // Random delay between 0 and 5 seconds
    }));
    
    setPositions(newPositions);
  }, [filteredIcons.length]);
  
  return (
    <div className={`flex flex-wrap gap-6 justify-center ${className}`}>
      {filteredIcons.map((icon, index) => (
        <div 
          key={icon.name}
          className="tech-icon-container relative"
          style={{
            animation: `float 6s ease-in-out infinite`,
            animationDelay: `${positions[index]?.delay || 0}s`
          }}
        >
          <div 
            className="tech-icon w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-primary bg-opacity-70 rounded-lg p-3 backdrop-blur-sm border border-secondary border-opacity-20 hover:border-opacity-50 transition-all hover:scale-110"
          >
            <img 
              src={icon.src} 
              alt={icon.name} 
              className="w-10 h-10 md:w-12 md:h-12 object-contain filter brightness-110"
            />
          </div>
          <p className="text-xs mt-2 text-center text-textSecondary">{icon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
