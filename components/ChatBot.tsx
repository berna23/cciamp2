
import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, Sparkles, Loader2 } from 'lucide-react';
import { Message } from '../types';
import { getClinicalAssistantResponse } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Olá! Sou a assistente do CCIAPM. Como podemos te ajudar hoje?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getClinicalAssistantResponse(input);
    setMessages(prev => [...prev, { role: 'assistant', content: response || 'Erro ao processar.' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen ? (
        <div className="bg-[#FAF9F6] w-80 sm:w-96 h-[550px] shadow-2xl rounded-3xl border border-stone-200 flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-brand-accent p-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold uppercase tracking-wider text-white">Apoio Digital</span>
                <span className="text-[10px] opacity-80 uppercase tracking-widest text-brand-light">CCIAPM</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded-full transition-colors text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-brand-bone/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-brand-dark text-white rounded-br-none' 
                    : 'bg-white text-stone-700 border border-stone-100 rounded-tl-none shadow-sm'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border border-stone-100 rounded-tl-none shadow-sm">
                  <Loader2 className="w-5 h-5 animate-spin text-brand" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-stone-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Sua pergunta..."
              className="flex-1 bg-stone-50 border-none rounded-2xl px-5 py-3 text-sm focus:ring-1 focus:ring-brand-accent transition-all outline-none"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-brand-accent text-white p-3 rounded-2xl hover:bg-black transition-colors disabled:bg-stone-300"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-accent text-white p-5 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-3 border-4 border-white"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden sm:inline font-bold uppercase tracking-widest text-xs">Suporte IA</span>
        </button>
      )}
    </div>
  );
};

export default ChatBot;