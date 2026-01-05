import React from 'react';
import { CLINICAL_STRATEGY_FACTORS } from '../constants';

const ClinicalStrategies: React.FC = () => {
  const ImageSphere = ({ 
    title, 
    subtitle, 
    className, 
    imageUrl,
    isCenter = false 
  }: { 
    title: string, 
    subtitle?: string, 
    className: string, 
    imageUrl: string,
    isCenter?: boolean
  }) => (
    <div className={`absolute flex flex-col items-center translate-x-[-50%] translate-y-[-50%] ${className} group`}>
      <div className={`relative ${isCenter ? 'w-40 h-40' : 'w-36 h-36'} rounded-full overflow-hidden transition-all duration-500 hover:scale-105 group-hover:border-brand`}>
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 group-hover:bg-transparent transition-colors"></div>
      </div>
      
      <div className={`mt-4 text-center ${isCenter ? 'hidden' : 'max-w-[140px]'}`}>
        <p className="text-xs font-serif italic font-bold text-stone-800 leading-tight">
          {title}
        </p>
        {subtitle && (
          <p className="text-[9px] text-stone-400 mt-0.5 uppercase tracking-wider">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <section className="bg-brand-bone py-32 lg:py-56 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-6 block">
                Lorem Ipsum Manual
              </span>
              <h2 className="text-5xl lg:text-7xl font-serif text-stone-900 leading-tight mb-8">
                Lorem ipsum dolor <br/><span className="italic">sit amet.</span>
              </h2>
              <div className="space-y-6 text-lg lg:text-xl text-stone-600 font-light leading-relaxed max-w-2xl">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="pl-8 border-l-2 border-brand-accent py-4 italic text-stone-500 font-serif text-lg leading-relaxed max-w-xl">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            </div>

            <div className="flex gap-16 pt-10">
               <div>
                 <p className="text-4xl font-serif text-stone-900 mb-1">XX+</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                   Lorem Ipsum
                 </p>
               </div>
               <div>
                 <p className="text-4xl font-serif text-stone-900 mb-1">X</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                   Dolor Sit
                 </p>
               </div>
            </div>

            <div className="pt-12">
              <button className="flex items-center gap-3 text-stone-900 font-bold uppercase tracking-widest text-[10px] hover:text-brand transition-all group">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand group-hover:scale-150 transition-transform"></div>
                 Lorem Ipsum Notes
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative flex justify-center items-center py-20 lg:py-0">
            <div className="relative w-full max-w-[550px] aspect-square">
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 500 500">
                <circle cx="250" cy="250" r="140" fill="none" stroke="#2D2926" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              <ImageSphere 
                className="top-[20%] left-[20%]" 
                title="Lorem"
                subtitle="Ipsum"
                imageUrl={CLINICAL_STRATEGY_FACTORS.topLeft.image}
              />
              <ImageSphere 
                className="top-[20%] left-[80%]" 
                title="Dolor"
                subtitle="Sit Amet"
                imageUrl={CLINICAL_STRATEGY_FACTORS.topRight.image}
              />
              <ImageSphere 
                className="top-[80%] left-[20%]" 
                title="Consectetur"
                subtitle="Adipiscing"
                imageUrl={CLINICAL_STRATEGY_FACTORS.bottomLeft.image}
              />
              <ImageSphere 
                className="top-[80%] left-[80%]" 
                title="Elit"
                subtitle="Tempor"
                imageUrl={CLINICAL_STRATEGY_FACTORS.bottomRight.image}
              />
              <ImageSphere 
                className="top-1/2 left-1/2" 
                title="Lorem Ipsum" 
                imageUrl={CLINICAL_STRATEGY_FACTORS.center.image} 
                isCenter
              />

              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center w-full">
                 <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800">
                   Lorem Ipsum Manual
                 </p>
                 <p className="text-[7px] uppercase tracking-widest text-stone-400 mt-1 opacity-60">
                   lorem@ipsum.com — placeholder text
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClinicalStrategies;
