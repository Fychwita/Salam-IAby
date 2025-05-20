// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import register from "./components/Register"

// export default function App() {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/explorer" element={<div className="p-10">Page Explorer</div>} />
//         <Route path="/apropos" element={<div className="p-10">Page À propos</div>} />
//         <Route path="/login" element={<div className="p-10">Page Connexion</div>} />
//         <Route path="/register" element={<register/>} />
//       </Routes>
//       < Features/>
//     </div>
//   );
// }


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Register from "./components/Register"; // <-- Correction ici

export default function App() {
  return (
    
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/explorer" element={<div className="p-10">Page Explorer</div>} />
          <Route path="/apropos" element={<div className="p-10">Page À propos</div>} />
          <Route path="/login" element={<div className="p-10">Page Connexion</div>} />
          <Route path="/register" element={<Register />} /> {/* Correction ici */}
        </Routes>
        <Features />
      </div>
    
  );
}





