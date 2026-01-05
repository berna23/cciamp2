import React from 'react';
import { Microscope, Shield, Book, Heart } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="images/bg1.jpeg" 
          alt="Background Texture" 
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-light/60 mb-8 block">
              Lorem Ipsum
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif text-white mb-12 italic leading-tight">
              Lorem ipsum <br />dolor sit?
            </h2>
            <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed font-light max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
              <Microscope className="w-10 h-10 text-brand mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Lorem Ipsum
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
              <Shield className="w-10 h-10 text-brand mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Dolor Sit
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
              <Book className="w-10 h-10 text-brand mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Consectetur
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
              <Heart className="w-10 h-10 text-brand mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Adipiscing
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
