
import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { getResearchInsights } from '../services/geminiService';

const ResearchHub: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState<{text: string, sources: any[]} | null>(null);
  const [isResearching, setIsResearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    setIsResearching(true);
    const researchResult = await getResearchInsights(topic);
    setResult(researchResult);
    setIsResearching(false);
  };

  return (
    <div className="pt-48 pb-24 max-w-[1200px] mx-auto px-6 lg:px-12">
      <div className="bg-stone-900 rounded-[5rem] p-16 lg:p-24 text-white mb-24 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand mb-8 block">Inteligência Científica</span>
          <h1 className="text-5xl lg:text-7xl font-serif italic mb-10 leading-tight">Hub de Investigação</h1>
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto relative group">
            <input 
              type="text" 
              value={topic} 
              onChange={(e) => setTopic(e.target.value)} 
              placeholder="Ex: Impacto da plasticidade cerebral..." 
              className="w-full bg-white/5 border border-white/10 rounded-full px-10 py-7 focus:bg-white/10 focus:outline-none focus:border-brand transition-all text-xl" 
            />
            <button type="submit" disabled={isResearching} className="absolute right-4 top-4 bg-brand text-white p-4 rounded-full font-bold hover:bg-brand-dark transition-colors disabled:opacity-50">
              {isResearching ? <Loader2 className="w-8 h-8 animate-spin" /> : <Search className="w-8 h-8" />}
            </button>
          </form>
        </div>
      </div>
      {result && (
        <div className="bg-white rounded-[4rem] border border-stone-200 p-16 lg:p-20 animate-fade-in shadow-xl">
           <div className="prose prose-stone prose-2xl max-w-none text-stone-700 leading-relaxed whitespace-pre-wrap font-sans font-light">{result.text}</div>
        </div>
      )}
    </div>
  );
};

export default ResearchHub;
