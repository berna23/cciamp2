
import { useRef, useState, useEffect } from 'react';

export const useCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const velRef = useRef(0);
  const lastXRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!carouselRef.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    
    setIsDragging(true);
    setHasMoved(false);
    startXRef.current = clientX;
    lastXRef.current = clientX;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
    velRef.current = 0;

    carouselRef.current.style.scrollBehavior = 'auto';

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !carouselRef.current) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const walk = (clientX - startXRef.current);
      if (Math.abs(walk) > 10) setHasMoved(true);
      carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
      
      const currentVel = clientX - lastXRef.current;
      velRef.current = velRef.current * 0.4 + currentVel * 0.6; 
      lastXRef.current = clientX;
    };

    const handleEnd = () => {
      if (!isDragging) return;
      setIsDragging(false);
      const ref = carouselRef.current;
      if (!ref) return;

      const applyInertia = () => {
        if (!ref || Math.abs(velRef.current) < 0.2) {
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          return;
        }
        ref.scrollLeft -= velRef.current;
        velRef.current *= 0.96;
        rafRef.current = requestAnimationFrame(applyInertia);
      };
      rafRef.current = requestAnimationFrame(applyInertia);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return { carouselRef, isDragging, hasMoved, handleStart };
};
