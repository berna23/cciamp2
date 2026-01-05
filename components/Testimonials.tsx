import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { useCarousel } from '../hooks/useCarousel';

const Testimonials: React.FC = () => {
  const { carouselRef, isDragging, handleStart } = useCarousel();

  return (
    <section className="max-w-[1600px] mx-auto px-6 lg:px-12 overflow-hidden py-32">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-4 block">
            Lorem Ipsum
          </span>
          <h2 className="text-5xl lg:text-7xl font-serif text-stone-900 italic leading-tight">
            Lorem ipsum <span className="text-brand" style={{ color: 'rgb(182, 144, 64)' }} >dolor</span>.
          </h2>
        </div>
      </div>

      <div 
        ref={carouselRef} 
        onMouseDown={handleStart} 
        onTouchStart={handleStart} 
        className={`flex gap-8 md:gap-12 overflow-x-auto pb-16 no-scrollbar touch-pan-x select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ scrollSnapType: 'none' }}
      >
        {TESTIMONIALS.map((test) => (
          <div
            key={test.id}
            className="w-[85vw] md:w-[480px] lg:w-[550px] group flex-shrink-0"
          >
            <div className="bg-white p-10 md:p-14 rounded-[4rem] border border-stone-100 shadow-sm h-full min-h-[380px] flex flex-col hover:shadow-xl transition-all">
              <Quote className="text-brand-light w-12 h-12 mb-8" style={{ color: '#000000ff' }}/>

              <p className="text-xl lg:text-2xl font-serif italic text-stone-900 font-medium leading-[1.6] mb-12 flex-1 tracking-tight">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>

              <div className="flex items-center gap-6 pt-8 border-t border-stone-50">
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">
                    Lorem Ipsum
                  </h4>
                  <p className="text-brand font-bold uppercase tracking-widest text-[9px]" style={{ color: 'rgb(182, 144, 64)' }}>
                    Dolor Sit
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
