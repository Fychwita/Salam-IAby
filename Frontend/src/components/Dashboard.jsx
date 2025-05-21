import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Nouveau Chat",
    desc: "Démarre une nouvelle conversation intelligente.",
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Découvrir",
    desc: "Explore des fonctionnalités avancées et des astuces IA.",
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Paramètres",
    desc: "Personnalise ton expérience et gère ton compte.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zm7.94-2.06a1 1 0 0 0 .26-1.09l-1.1-3.18a1 1 0 0 0-.76-.65l-3.37-.49a1 1 0 0 0-.95.26l-2.38 2.38a1 1 0 0 0-.26.95l.49 3.37a1 1 0 0 0 .65.76l3.18 1.1a1 1 0 0 0 1.09-.26l2.38-2.38z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f3e7fa] via-[#e0f7fa] to-[#f9fbe7] flex flex-col items-center py-10">
      {/* Header animé */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center mb-10"
      >
        <motion.img
          src="https://api.dicebear.com/7.x/bottts/svg?seed=AI"
          alt="Avatar IA"
          className="w-24 h-24 rounded-full shadow-lg border-4 border-white mb-4"
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        />
        <h1 className="text-3xl font-bold text-purple-700 mb-2">Bienvenue sur Salam IA !</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-600"
        >
          Prêt à explorer l’intelligence artificielle ?
        </motion.p>
      </motion.div>

      {/* Assistant animé */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 80 }}
        className="mb-8"
      >
        <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg border border-purple-100">
          <svg className="w-8 h-8 text-purple-500 animate-bounce mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M8 15s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
            <path d="M9 9h.01M15 9h.01" strokeLinecap="round" />
          </svg>
          <span className="text-purple-700 font-medium">Je suis ton assistant IA, pose-moi une question !</span>
        </div>
      </motion.div>

      {/* Cartes interactives */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(80,0,120,0.15)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.15 }}
            className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-md border border-gray-100 cursor-pointer transition-all"
          >
            <div className="mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h2>
            <p className="text-gray-500 text-center">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}