import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Facebook, BrainCircuit } from 'lucide-react';
import { AppRoute } from '../types';

interface FooterProps {
  setRoute: (route: AppRoute) => void;
}

const Footer: React.FC<FooterProps> = ({ setRoute }) => {
  return (
    <footer className="bg-brand-accent text-stone-400 pt-24 pb-12 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 border-b border-stone-800/50 pb-20">
        
        {/* Column 1: Clinic Identity */}
        <div className="lg:col-span-4 space-y-8">
          <div className="flex items-center">
            <span className="ml-4 text-2xl font-bold text-white tracking-tight uppercase">Lorem Ipsum</span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className="text-white font-serif italic text-lg">Lorem Ipsum</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
            <li><button onClick={() => setRoute(AppRoute.Home)} className="hover:text-brand transition-colors">Lorem</button></li>
            <li><button onClick={() => setRoute(AppRoute.Services)} className="hover:text-brand transition-colors">Ipsum</button></li>
            <li><button onClick={() => setRoute(AppRoute.Research)} className="hover:text-brand transition-colors">Dolor</button></li>
            <li><button onClick={() => setRoute(AppRoute.Contact)} className="hover:text-brand transition-colors">Sit Amet</button></li>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="text-white font-serif italic text-lg">Lorem Ipsum</h4>
          <ul className="space-y-5 text-sm font-light">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand shrink-0" />
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />12345 Ipsum Street, Dolor City</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand shrink-0" />
              <span>+00 123 456 789</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand shrink-0" />
              <span>lorem@ipsum.com</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Hours */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="text-white font-serif italic text-lg">Lorem Ipsum</h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-brand shrink-0" />
              <div>
                <p className="font-medium text-white">Lorem — Ipsum</p>
                <p className="opacity-70">09:00 - 18:00</p>
              </div>
            </li>
            <li className="flex items-center gap-3 opacity-50">
              <Clock className="w-5 h-5 shrink-0" />
              <div>
                <p className="font-medium">Dolor — Sit</p>
                <p>Amet</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1600px] mx-auto pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Lorem Ipsum. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-50">
          <span>Lorem ipsum dolor sit</span>
          <span>Amet consectetur</span>
          <a href="#" className="hover:text-white transition-colors">Lorem Ipsum Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
