// components/Hero.jsx
// import React from "react";
// import baobabImage from "../assets/baobab.jpg";

// export default function Hero() {
//   return (
//     <section
//       className="h-[90vh] bg-cover bg-center text-white flex items-center justify-left px-6"
//       style={{ backgroundImage: `url(${baobabImage})` }}
//     >
//       <div className="max-w-3xl ">
//         <h1 className="text-4xl md:text-5xl text-gray-300 font-bold mb-4">
//           Découvrez et préservez les dialectes malgaches avec l’IA
//         </h1>
//         <p className="text-lg md:text-xl mb-6">
//           Notre intelligence artificielle détecte et traduit les dialectes malgaches
//           pour préserver la richesse linguistique de Madagascar.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <button className="border border-green-500 text-green-500 hover:bg-green-600 hover:text-white px-5 py-2 rounded">
//             Commencer l’analyse
//           </button>
//           <button className="bg-gradient-to-r from-green-600 to-purple-600 hover:bg-purple-700 px-5 py-2 text-white rounded">
//             S’inscrire maintenant
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import baobabImage from "../assets/baobab.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center text-white flex items-center px-6"
      style={{ backgroundImage: `url(${baobabImage})` }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenu */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl text-gray-200 font-bold mb-4">
          Découvrez et préservez les dialectes malgaches avec l’IA
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Notre intelligence artificielle détecte et traduit les dialectes malgaches
          pour préserver la richesse linguistique de Madagascar.
        </p>

        <div className="flex flex-wrap gap-4">
          {/* Bouton avec bordure dégradée */}
          {/* <div className="bg-gradient-to-r from-green-600 to-purple-600 p-[2px] rounded">
            <button className="bg-transparent text-white px-5 py-2 rounded hover:bg-green-600 transition duration-300">
              Commencer l’analyse
            </button>
          </div> */}
          <div className="bg-gradient-to-r from-green-600 to-purple-600 p-[2px] rounded">
            <button className="bg-black bg-opacity-70 text-white px-5 py-2 rounded hover:bg-opacity-90 transition duration-300 w-full h-full">
              Commencer l’analyse
            </button>
          </div>

          {/* Bouton plein dégradé */}
          <button className="bg-gradient-to-r from-green-600 to-purple-600 hover:opacity-90 px-5 py-2 text-white rounded">
            S’inscrire maintenant
          </button>
        </div>
      </div>
    </section>
  );
}


  