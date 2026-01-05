import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import { AppRoute } from '../types';

interface NavbarProps {
  currentRoute: AppRoute;
  setRoute: (route: AppRoute) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentRoute, setRoute }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', route: AppRoute.Home },
    { label: 'Serviços', route: AppRoute.Services },
    { label: 'Profissionais de Saúde', route: AppRoute.Home, anchor: 'profissionais' },
    { label: 'Contactos', route: AppRoute.Contact },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsOpen(false);
    
    if (item.anchor) {
      if (currentRoute !== AppRoute.Home) {
        setRoute(AppRoute.Home);
        setTimeout(() => {
          const element = document.getElementById(item.anchor!);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(item.anchor);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setRoute(item.route);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-brand-bone/80 backdrop-blur-lg border-b border-stone-200">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-28 items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => setRoute(AppRoute.Home)}
          >
            <img 
              src="images/logo.png" 
              alt="CCIAPM Logo" 
              className="max-h-12 w-auto" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-10">
            {navItems.map((item) => {
              const isRouteActive = !item.anchor && currentRoute === item.route;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all relative py-2 hover:text-[#B69040] ${
  isRouteActive
    ? 'text-[#B69040] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#B69040]'
    : 'text-black'
}`}
                >
                  {item.label}
                </button>
              );
            })}
            <button 
              onClick={() => setRoute(AppRoute.Contact)}
              className="bg-brand-accent text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand transition-all shadow-xl hover:-translate-y-0.5 active:scale-95"
            >
              Agendamento
            </button>
          </div>

          {/* Mobile Button */}
          <div className="xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-900 p-2">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-brand-bone border-b border-stone-200 p-8 space-y-4 animate-fade-in shadow-2xl overflow-y-auto max-h-[85vh]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={`block w-full text-left py-3 text-2xl font-serif italic ${
                (!item.anchor && currentRoute === item.route) ? 'text-brand' : 'text-stone-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4">
            <button 
              onClick={() => {
                setRoute(AppRoute.Contact);
                setIsOpen(false);
              }}
              className="w-full bg-brand-accent text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-lg"
            >
              Agendar Avaliação
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
