import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo_salam.png';
import axios from 'axios';

const cards = [
  {
    title: "Resaka vaovao",
    desc: "Manomboha resaka maranitra vaovao.",
    icon: (
      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Mikaroa",
    desc: "Mikaroa fahafan'ny IA vaovoa",
    icon: (
      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Parametatra",
    desc: "Amboary araka ny hitivanao azy ny endriky applicaton.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zm7.94-2.06a1 1 0 0 0 .26-1.09l-1.1-3.18a1 1 0 0 0-.76-.65l-3.37-.49a1 1 0 0 0-.95.26l-2.38 2.38a1 1 0 0 0-.26.95l.49 3.37a1 1 0 0 0 .65.76l3.18 1.1a1 1 0 0 0 1.09-.26l2.38-2.38z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (userPrompt) => {
    try {
      const response = await axios.post('http://localhost:8000/api/detect', {
        phrase: userPrompt
      });
  
      // Utilise dialecte + raison
      const dialecte = response.data.dialecte;
      const raison = response.data.raison;
  
      return ` Fitenim-paritra: ${dialecte}\n ${raison}`;
    } catch (error) {
      console.error('Erreur:', error);
      return "⛔ Misy olana teo amin'ny IA. Azafady andramo indray.";
    }
  };
  

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (prompt.trim() === "" || isTyping) return;
    
    const userPrompt = prompt.trim();
    setMessages(prev => [...prev, { role: "user", content: userPrompt }]);
    setIsTyping(true);
    setPrompt("");
    
    try {
      const response = await generateResponse(userPrompt);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Miala tsiny, misy erreur" 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f3e7fa] via-[#e0f7fa] to-[#f9fbe7] flex flex-col">
      {/* Header animé */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center py-4"
      >
        <motion.img
          src={logo}
          alt="Avatar IA"
          className="w-12 h-12 rounded-full shadow-md border-2 border-white mb-2"
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        />
        <h1 className="text-xl font-bold text-purple-700 mb-1">Tongasoa amin'i Salam'IAby !</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-gray-600"
        >
          Vonona Hanandrana ranin-tsaina artifisily?
        </motion.p>
      </motion.div>

      {/* Assistant animé */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
        className="mb-4 px-4"
      >
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md border border-purple-100 max-w-4xl mx-auto">
          <svg className="w-5 h-5 text-purple-500 animate-bounce mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M8 15s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
            <path d="M9 9h.01M15 9h.01" strokeLinecap="round" />
          </svg>
          <span className="text-purple-700 font-medium text-sm">Izaho no Salam'IAby, lazao ny teny izay tianoa hofantariko fihaviana !</span>
        </div>
      </motion.div>

      {/* Zone principale de chat */}
      <div className="flex-1 flex flex-col max-w-4xl w-full mx-auto px-4">
        {/* Chat history */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-50 rounded-lg bg-white/50 backdrop-blur-sm p-3 mb-3"
          style={{ 
            maxHeight: 'calc(100vh - 300px)',
            minHeight: '30px',
            scrollbarColor: '#d6bbfc #f3e8ff',
            scrollbarWidth: 'thin'
          }}
        >
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} mb-2`}
              >
                <div
                  className={`
                    px-4 py-2 rounded-2xl shadow-sm max-w-[80%] break-words text-sm
                    ${msg.role === "user"
                      ? "bg-gradient-to-r from-purple-200 to-blue-100 text-purple-900 self-end"
                      : "bg-white border border-purple-100 text-gray-700 self-start"}
                  `}
                  style={{
                    borderBottomRightRadius: msg.role === "user" ? "0.5rem" : "1.5rem",
                    borderBottomLeftRadius: msg.role === "assistant" ? "0.5rem" : "1.5rem",
                  }}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start mb-2"
            >
              <div className="px-4 py-2 rounded-2xl bg-white border border-purple-100 text-gray-700 max-w-[80%] flex items-center gap-2 text-sm">
                <span className="animate-pulse">Manoratra Salam'Iaby</span>
                <span className="animate-bounce">...</span>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Zone de prompt moderne */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
          onSubmit={handleSubmit}
          className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-purple-100"
        >
          <div className="relative w-full">
            <textarea
              rows={2}
              placeholder="Ambarao amin'i Salam'IAby ilay tiannao fantarina..."
              className="w-full rounded-xl border-2 border-purple-200 bg-gradient-to-r from-white via-purple-100 to-blue-50 shadow-md p-3 pr-24 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none placeholder:text-purple-400 animate-fade-in"
              style={{ minHeight: '45px', maxHeight: '90px', overflow: 'hidden' }}
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(48, 37, 53, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-tr from-purple-700 to-blue-400 hover:from-pink-700 hover:to-blue-600 text-white font-medium px-4 py-1.5 rounded-lg shadow-sm transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2 min-w-[90px] h-[36px]"
              disabled={prompt.trim() === "" || isTyping}
            >
              <span className="text-sm">Alefa</span>
              <svg 
                className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ 
                  strokeWidth: "2.5",
                  filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.1))"
                }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Cartes interactives */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto px-4 py-4">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(80,0,120,0.15)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className="bg-white rounded-lg p-4 flex flex-row items-center shadow-sm border border-gray-100 cursor-pointer transition-all hover:border-purple-200"
          >
            <div className="mr-3">{card.icon}</div>
            <div>
              <h2 className="text-sm font-semibold text-gray-800 mb-1">{card.title}</h2>
              <p className="text-gray-500 text-xs">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}