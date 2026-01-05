
import React from 'react';
import { SERVICES, ICONS } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <div className="pt-48 pb-24 max-w-[1600px] mx-auto px-6 lg:px-12">
      <header className="mb-24">
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-6 block">Portfólio de Cuidados</span>
        <h1 className="text-6xl lg:text-8xl font-serif text-stone-900 italic mb-10 leading-tight">Nossa Prática Clínica.</h1>
      </header>
      <div className="grid md:grid-cols-2 gap-12">
        {SERVICES.map((service) => (
          <div key={service.id} className="bg-white p-16 rounded-[5rem] border border-stone-100 shadow-sm flex flex-col hover:shadow-2xl transition-all group text-left">
            <div className="p-7 bg-stone-50 text-brand-dark rounded-[2rem] w-fit mb-10 group-hover:bg-brand-accent group-hover:text-white transition-colors">
              {ICONS[service.icon]}
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-8">{service.title}</h2>
            <p className="text-stone-600 text-xl mb-12 leading-relaxed flex-1 font-light">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
