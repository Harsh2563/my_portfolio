import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayBetweenTexts = 1000 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const handleTyping = () => {
      if (isWaiting) {
        timeoutRef.current = setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, delayBetweenTexts);
        return;
      }
      
      if (!isDeleting && currentText === currentFullText) {
        setIsWaiting(true);
        return;
      }
      
      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        return;
      }
      
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      
      timeoutRef.current = setTimeout(() => {
        setCurrentText((prevText) => {
          if (isDeleting) {
            return prevText.substring(0, prevText.length - 1);
          } else {
            return currentFullText.substring(0, prevText.length + 1);
          }
        });
      }, speed);
    };
    
    handleTyping();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, currentTextIndex, isDeleting, isWaiting, texts, delayBetweenTexts, deletingSpeed, typingSpeed]);
  
  return (
    <span className="border-r-2 border-secondary pr-1">
      {currentText}
    </span>
  );
};

export default Typewriter;
