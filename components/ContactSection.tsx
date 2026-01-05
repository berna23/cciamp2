
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div className="pt-48 pb-24 max-w-[1600px] mx-auto px-6 lg:px-12 text-left">
      <div className="grid lg:grid-cols-2 gap-24 lg:gap-32">
        <div>
          <h1 className="text-6xl lg:text-8xl font-serif text-stone-900 italic mb-12 leading-tight">Agende sua <br/><span className="text-brand">consulta</span>.</h1>
        </div>
        <form className="bg-white p-12 lg:p-20 rounded-[5rem] shadow-2xl border border-stone-100 space-y-10 animate-fade-in">
          <input type="text" placeholder="Nome Completo" className="w-full bg-stone-50 border-none rounded-[1.5rem] px-8 py-5 focus:ring-1 focus:ring-brand outline-none transition-all text-lg" />
          <button type="button" className="w-full bg-brand-accent text-white py-7 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand transition-all shadow-xl">Solicitar Agendamento</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
