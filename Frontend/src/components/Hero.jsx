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
//           Découvrez et préservez les dialectes malgaches avec l'IA
//         </h1>
//         <p className="text-lg md:text-xl mb-6">
//           Notre intelligence artificielle détecte et traduit les dialectes malgaches
//           pour préserver la richesse linguistique de Madagascar.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <button className="border border-green-500 text-green-500 hover:bg-green-600 hover:text-white px-5 py-2 rounded">
//             Commencer l'analyse
//           </button>
//           <button className="bg-gradient-to-r from-green-600 to-purple-600 hover:bg-purple-700 px-5 py-2 text-white rounded">
//             S'inscrire maintenant
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import baobabImage from "../assets/baobab.jpg";


export default function Hero({ onDemoClick }) {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center text-white flex items-center px-20 overflow-hidden"
      style={{ backgroundImage: `url(${baobabImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenu avec animations */}
      <div className="relative z-10 max-w-5xl">
      <h1 className="text-2xl md:text-5xl text-white font-bold mb-4 animate-text-reveal">
        <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Fantaro ka AROVY 
        </span>{" "}
        <span className="inline-block animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Ny fiten-paritr'i Madagasikara
        </span>{" "}
        <span className="inline-block animate-slide-up" style={{ animationDelay: '0.6s' }}>
          Miaraka amin'i Salam'Iaby
        </span>{" "}
      </h1>
        <p className="text-lg md:text-2xl mb-6 animate-fade-up text-white" style={{ animationDelay: '1s' }}>
        Ny faharanitan-tsainay artifisialy dia mamantatra sy mandika ny dialekta malagasy
        <br /> 
        mba hiarovana ny haren’ny fiteny eto Madagasikara. <br />
        <i>__“Ny teny toy ny atody ka raha difotra dia vaky.”__</i>
        </p>

        <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '1.2s' }}>
          {/* Bouton avec bordure dégradée et animation */}
          <a href="#features">
            <div className=" p-[2px] rounded group">
              <button onClick={onDemoClick} className="  bg-gradient-to-tl from-[#046638] to-[#99087E] text-white text-xl px-20 py-2 rounded w-full h-full transform transition-all duration-500 hover:bg-opacity-90 hover:scale-105 hover:shadow-lg hover:rotate-y-12 hover:translate-y-[-2px]">
                Manomboka andrana
              </button>
            </div>
          </a>

          
        </div>
      </div>
      
    </section>
  );
}


  