import React, { useRef } from "react";

export default function Features() {
  const featuresRef = useRef(null);

  return (
    <section id="features" ref={featuresRef} className="py-16 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold text-green-800 mb-12">Démo</h2>

      <div className="max-w-4xl mx-auto bg-purple-50 p-10 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold text-gray-600 mb-6">Détection de texte</h3>

        <textarea
          placeholder="Tapez le texte que vous voulez savoir"
          className="w-full h-32 p-4 border border-purple-200 rounded-md resize-none bg-purple-100 placeholder-gray-700 text-gray-800 mb-6"
        ></textarea>

        <div className="text-right">
          <button className="bg-gradient-to-tl from-[#046638] to-[#99087E] hover:opacity-90 px-5 py-2 text-white rounded">
            Commencer
          </button>
        </div>
      </div>
    </section>
  );
}
