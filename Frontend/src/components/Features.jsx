import React, { useRef, useState } from "react";

export default function Features() {
  const featuresRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");

  const handleSubmit = () => {
    if (!inputText.trim()) {
      setResultText("Azafady, ampidiro aloha ny teny.");
      return;
    }

    // Simulation logique : ici tu peux remplacer par un appel à ton API Flask
    setResultText("Fiteny avy any : " + inputText + "\n(Tsy tena valiny io fa simulaka)");
  };

  return (
    <section id="features" ref={featuresRef} className="py-16 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent mb-12">
        Andrana
      </h2>

      <div className="max-w-4xl mx-auto bg-purple-50 p-8 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold text-gray-600 mb-4">Mampidira fehezan-teny</h3>

        <textarea
          placeholder="Ampidiro ny teny anontanianao"
          className="w-full h-28 p-3 border border-purple-200 rounded-md resize-none bg-purple-100 placeholder-gray-700 text-gray-800 mb-4"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        <div className="text-right mb-4">
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-tl from-[#046638] to-[#99087E] hover:opacity-90 px-5 py-2 text-white rounded"
          >
            Manomboka
          </button>
        </div>

        {resultText && (
          <div className="text-left bg-white border border-purple-200 p-4 rounded-md shadow-inner text-gray-800 whitespace-pre-wrap">
            <strong>Valiny:</strong>
            <p>{resultText}</p>
          </div>
        )}
      </div>
    </section>
  );
}
