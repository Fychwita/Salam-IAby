// src/components/Apropos.jsx
import React from "react";
// Import des images depuis le dossier assets
import tinahImg from '../assets/tinah.jpg';
import mihantaImg from '../assets/mi.jpg';
import fitahianaImg from '../assets/fita.jpg';
import jessicaImg from '../assets/jess.jpg';
import felanaImg from '../assets/felana.jpg';
import leaImg from '../assets/lea.jpg';
import jaelaImg from '../assets/jaela.jpg';
import defaultAvatar from '../assets/baobab.jpg';

const Apropos = () => {
  const membres = [
    { 
      nom: "Tinah", 
      rôle: "Mpamorona Backend",
      photo: tinahImg
    },
    { 
      nom: "Mihanta", 
      rôle: "Manampahaizana Frontend",
      photo: mihantaImg
    },
    { 
      nom: "Fitahiana", 
      rôle: "Mpamorona UI/UX",
      photo: fitahianaImg
    },
    { 
      nom: "Jessica", 
      rôle: "Manampahaizana Frontend",
      photo: jessicaImg
    },
    { 
      nom: "Felana", 
      rôle: "Manampahaizana Backend",
      photo: felanaImg
    },
    { 
      nom: "Léa", 
      rôle: "Manampahaizana Frontend",
      photo: leaImg
    },
    { 
      nom: "Jaela", 
      rôle: "Frontend",
      photo: jaelaImg
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f3e7fa] via-[#e0f7fa] to-[#f9fbe7] p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
          Momba ny tetikasa
        </h1>
        <p className="mb-6 text-gray-700 leading-relaxed animate-fade-in">
          Misy fahasamihafana amin'ny voambolana eo amin'ny fiteny malagasy samihafa izay mety hiteraka tsy fifankahazoan-kevitra, na eo aza ny mpiteny teratany. Ny "Salam'Iaby" dia manampy amin'ny famantarana mandeha ho azy ny fiteny ampiasaina mba hahafahana manitsy tsara kokoa ny fifandraisana sy hisorohana ny tsy fifankahazoana. Izy io dia novolavolain'ny ekipan'ny mpianatra tao amin'ny ISPM.
        </p>

        <h2 className="text-4xl font-bold mb-10 animate-fade-in bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent">
          Ireo mpikambana nandritra ny fanatanterahana ny tetikasa:
        </h2>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {membres.map((personne, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, boxShadow: '0 4px 20px rgb(146, 36, 14)' }}
            >
              <div className="relative h-48 overflow-hidden flex justify-center items-center p-4">
                <img 
                  src={personne.photo} 
                  alt={personne.nom}
                  className="w-40 h-40 rounded-full object-cover border-4 border-purple-200 transition-transform duration-300 hover:scale-110 hover:border-purple-500"
                  onError={(e) => {
                    e.target.src = defaultAvatar;
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-700 mb-2">{personne.nom}</h3>
                <p className="text-gray-600">{personne.rôle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apropos;
