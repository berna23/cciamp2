
import React from 'react';
import { ArrowLeft, BrainCircuit, Lightbulb, Calendar } from 'lucide-react';
import { Professional, AppRoute } from '../types';

interface ProfessionalProfileProps {
  professional: Professional;
  onBack: () => void;
  onContact: () => void;
}

const ProfessionalProfile: React.FC<ProfessionalProfileProps> = ({ professional, onBack, onContact }) => {
  return (
    <div className="pt-48 pb-32 max-w-[1200px] mx-auto px-6 lg:px-12 animate-fade-in">
      <button onClick={onBack} className="flex items-center gap-3 text-stone-400 hover:text-brand transition-colors mb-16 text-xs font-bold uppercase tracking-widest">
        <ArrowLeft className="w-5 h-5" /> Voltar
      </button>
      
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-5 xl:col-span-4 space-y-12">
          <div className="flex items-center mb-8">
            {/* <div className="p-2.5 bg-brand/10 rounded-xl">
              <BrainCircuit className="h-8 w-8 text-brand" />
            </div>
            <div className="ml-4 flex flex-col">
              <span className="text-2xl font-bold text-stone-900 tracking-tight leading-none uppercase">CCIAPM</span>
              <span className="text-[11px] text-brand-accent font-bold tracking-[0.3em] uppercase mt-1.5 opacity-60">Ciência & Cuidado</span>
            </div> */}
          </div>

          <div className="w-full aspect-square max-w-[450px] mx-auto lg:mx-0">
            <img 
              src={professional.image} 
              alt={professional.name} 
              className="w-full h-full object-cover organic-radius shadow-2xl transition-all duration-700 hover:scale-[1.02]"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-3">
              <Lightbulb className="w-5 h-5 text-brand" /> Curiosidades
            </h3>
            <ul className="space-y-4 list-disc list-inside text-stone-600 font-light leading-relaxed">
              {professional.curiosities.map((item, idx) => (
                <li key={idx} className="marker:text-brand">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 xl:col-span-8 space-y-8">
          <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
            {/* <img 
              src="https://images.unsplash.com/photo-1532187875605-2fe3585114e5?auto=format&fit=crop&q=80&w=300" 
              alt="Abstract Scientific Decoration" 
              className="w-full h-full object-cover"
            /> */}
          </div>

          <div>
            <h1 className="text-4xl lg:text-6xl font-serif text-stone-900 mb-4 tracking-tight uppercase font-bold leading-tight">
              {professional.name}
            </h1>
            <p className="text-xl font-bold text-brand tracking-[0.2em] uppercase mb-2">CP: {professional.licenseNumber}</p>
            <p className="text-2xl text-stone-800 font-serif italic">{professional.role}</p>
          </div>

          <div className="space-y-6 text-lg lg:text-xl text-stone-600 font-light leading-relaxed">
            {professional.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <button onClick={onContact} className="bg-brand-accent text-white px-10 py-5 rounded-full flex items-center justify-center gap-4 font-bold uppercase tracking-widest text-xs hover:bg-brand transition-all shadow-lg mt-12">
            <Calendar className="w-5 h-5" /> Agendar Consulta com {professional.name.split(' ')[professional.name.split(' ').length - 1]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
