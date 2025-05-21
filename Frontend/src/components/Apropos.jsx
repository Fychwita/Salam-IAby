// src/components/Apropos.jsx
import React from "react";
// Import des images depuis le dossier assets
import tinahImg from '../assets/tinah.jpg';
import mihantaImg from '../assets/baobab.jpg';
import fitahianaImg from '../assets/baobab.jpg';
import jessicaImg from '../assets/jess.jpg';
import felanaImg from '../assets/felana.jpg';
import leaImg from '../assets/baobab.jpg';
import jaelaImg from '../assets/baobab.jpg';
import defaultAvatar from '../assets/baobab.jpg';

const Apropos = () => {
  const membres = [
    { 
      nom: "Tinah", 
      rôle: "Développeur Frontend",
      photo: tinahImg
    },
    { 
      nom: "Mihanta", 
      rôle: "Spécialiste NLP",
      photo: mihantaImg
    },
    { 
      nom: "Fitahiana", 
      rôle: "Concepteur UI/UX",
      photo: fitahianaImg
    },
    { 
      nom: "Jessica", 
      rôle: "Chef de projet",
      photo: jessicaImg
    },
    { 
      nom: "Felana", 
      rôle: "Chef de projet",
      photo: felanaImg
    },
    { 
      nom: "Léa", 
      rôle: "Chef de projet",
      photo: leaImg
    },
    { 
      nom: "Jaela", 
      rôle: "Chef de projet",
      photo: jaelaImg
    },
  ];

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
        À propos du projet
      </h1>
      <p className="mb-6 text-gray-700 leading-relaxed animate-fade-in">
        Les dialectes malgaches présentent des différences de vocabulaire qui peuvent créer des malentendus, même entre locuteurs natifs."Salam'Iaby" permet d'identifier automatiquement le dialecte utilisé afin de mieux adapter les échanges et d'éviter les incompréhensions. Il est développé par une équipe d'étudiants chez L'ISPM.
      </p>

      <h2 className="text-3xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent">
        Les membres lors de l'élaboration du projet:
      </h2>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {membres.map((personne, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-48 overflow-hidden flex justify-center items-center p-4">
              <img 
                src={personne.photo} 
                alt={personne.nom}
                className="w-40 h-40 rounded-full object-cover border-4 border-purple-200 transition-transform duration-300 hover:scale-110 hover:border-purple-400"
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
  );
};

export default Apropos;
