
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import ClinicalStrategies from './components/ClinicalStrategies';
import ProfessionalsCarousel from './components/ProfessionalsCarousel';
import Testimonials from './components/Testimonials';
import ProfessionalProfile from './components/ProfessionalProfile';
import ServicesSection from './components/ServicesSection';
import ResearchHub from './components/ResearchHub';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { AppRoute, Professional } from './types';

const App: React.FC = () => {
  const [route, setRoute] = useState<AppRoute>(AppRoute.Home);
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);

  const navigateToProfessional = (prof: Professional) => {
    setSelectedProfessional(prof);
    setRoute(AppRoute.ProfessionalProfile);
    window.scrollTo(0, 0);
  };

  const handleSetRoute = (r: AppRoute) => {
    setRoute(r);
    setSelectedProfessional(null);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (route) {
      case AppRoute.Home:
        return (
          <div className="space-y-0">
            <Hero setRoute={handleSetRoute} />
            <Methodology />
            <ClinicalStrategies />
            <ProfessionalsCarousel onNavigate={navigateToProfessional} />
            <Testimonials />
          </div>
        );

      case AppRoute.ProfessionalProfile:
        if (!selectedProfessional) return null;
        return (
          <ProfessionalProfile 
            professional={selectedProfessional} 
            onBack={() => handleSetRoute(AppRoute.Home)} 
            onContact={() => handleSetRoute(AppRoute.Contact)}
          />
        );

      case AppRoute.Services:
        return <ServicesSection />;

      case AppRoute.Research:
        return <ResearchHub />;

      case AppRoute.Contact:
        return <ContactSection />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand/30">
      <Navbar currentRoute={route} setRoute={handleSetRoute} />
      <main className="transition-opacity duration-500 ease-in-out pb-32">
        {renderContent()}
      </main>
      <Footer setRoute={handleSetRoute} />
    </div>
  );
};

export default App;
