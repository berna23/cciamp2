import React from 'react';
import { PROFESSIONALS } from '../constants';
import { Professional } from '../types';
import { useCarousel } from '../hooks/useCarousel';

interface ProfessionalsCarouselProps {
  onNavigate: (prof: Professional) => void;
}

const ProfessionalsCarousel: React.FC<ProfessionalsCarouselProps> = ({ onNavigate }) => {
  const { carouselRef, isDragging, hasMoved, handleStart } = useCarousel();

  const handleClick = (prof: Professional) => {
    if (hasMoved) return;
    onNavigate(prof);
  };

  return (
    <section id="profissionais" className="max-w-[1600px] mx-auto px-6 lg:px-12 overflow-hidden py-24">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-2 block">
            Lorem Ipsum
          </span>
          <h2 className="text-4xl lg:text-6xl font-serif text-stone-900 italic leading-tight">
            Lorem ipsum <span className="text-brand" style={{ color: 'rgb(182, 144, 64)' }} >dolor</span>.
          </h2>
        </div>
      </div>

      <div 
        ref={carouselRef} 
        onMouseDown={handleStart} 
        onTouchStart={handleStart} 
        className={`flex gap-6 md:gap-8 overflow-x-auto pb-16 no-scrollbar touch-pan-x select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ scrollSnapType: 'none' }}
      >
        {PROFESSIONALS.map((prof) => (
          <div
            key={prof.id}
            onClick={() => handleClick(prof)}
            className="w-[220px] md:w-[260px] group flex-shrink-0 transition-transform duration-500 ease-out hover:-translate-y-1"
          >
            <div className="relative overflow-hidden mb-4 pointer-events-none organic-radius bg-stone-100 aspect-[3/4] shadow-sm">
              <img
                src={prof.image}
                alt={prof.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                draggable="false"
              />
            </div>

            <div className="px-2 h-32 flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-serif italic text-stone-900 mb-1 truncate group-hover:text-brand transition-colors">
                  {prof.name}
                </h3>
                <p className="text-brand font-bold uppercase tracking-widest text-[9px] mb-2 h-10 overflow-hidden line-clamp-2 leading-relaxed">
                  Lorem ipsum dolor
                </p>
              </div>
              <div className="w-10 h-[2px] bg-stone-100 group-hover:w-full group-hover:bg-brand transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalsCarousel;
