import React from "react";

export default function Features() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold text-green-800 mb-12">Fonctionnalités principales</h2>

      <div className="max-w-4xl mx-auto bg-purple-50 p-10 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold text-gray-600 mb-6">Détection de text</h3>

        <textarea
          placeholder="Taapez le text que vous voulez savoir"
          className="w-full h-32 p-4 border border-purple-200 rounded-md resize-none bg-purple-100 placeholder-gray-700 text-gray-800 mb-6"
        ></textarea>

        <div className="text-right">
          <button className="bg-gradient-to-r from-green-600 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:opacity-90">
            Commencer
          </button>
        </div>
      </div>
    </section>
  );
}
