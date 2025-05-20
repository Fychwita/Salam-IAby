import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Nav centré */}
      <nav className="hidden md:flex space-x-8 text-base font-medium absolute left-1/2 transform -translate-x-1/2">
        <Link to="/" className="text-green-700 hover:underline">Accueil</Link>
        <Link to="/explorer" className="text-gray-700 hover:text-green-700 hover:underline">Explorer</Link>
        <Link to="/apropos" className="text-gray-700 hover:text-green-700 hover:underline">À propos</Link>
      </nav>

      {/* Boutons à droite */}
      <div className="space-x-3">
        <Link to="/login">
          <button className="border border-purple-500 text-purple-700 px-4 py-2 rounded hover:bg-purple-100 transition">
            Se connecter
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
            S'inscrire
          </button>
        </Link>
      </div>
    </header>
  );
}
