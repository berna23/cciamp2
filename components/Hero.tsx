import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AppRoute } from '../types';

interface HeroProps {
  setRoute: (route: AppRoute) => void;
}

const Hero: React.FC<HeroProps> = ({ setRoute }) => {
  return (
    <section className="relative pt-48 pb-48 lg:pt-56">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div className="relative z-10 animate-fade-in">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-6 block">
              Lorem Ipsum Dolor
            </span>
            <h1 className="text-5xl lg:text-8xl font-serif text-stone-900 leading-[1.1] mb-8">
              Lorem ipsum dolor sit <span className="italic text-brand-dark" style={{ color: 'rgb(182, 144, 64)' }}>amet</span>.
            </h1>
            <p className="text-lg lg:text-2xl text-stone-600 mb-10 max-w-2xl leading-relaxed font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => setRoute(AppRoute.Research)}
                className="flex items-center gap-4 text-stone-900 font-bold uppercase tracking-widest text-xs hover:text-brand transition-colors"
              >
                Lorem Ipsum
                <ArrowRight className="w-5 h-5 text-brand" style={{ color: 'rgba(0, 0, 0, 1)' }} />
              </button>
            </div>
          </div>

          <div className="relative group animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl"></div>
              <img
                src="images/diagrama.png"
                alt="Lorem Ipsum"
                className=" transition-all duration-700 w-full h-[600px] lg:h-[750px] object-contain border-white"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
