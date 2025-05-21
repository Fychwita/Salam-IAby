import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoo from '../assets/logo_salam.png';
import logo from '../assets/ispm.png';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  // Exemple d'infos utilisateur (à adapter selon ton backend/localStorage)
  const userEmail = localStorage.getItem('userEmail') || "Utilisateur";

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  // Affiche le menu utilisateur sur le dashboard
  const isDashboard = location.pathname === "/dashboard";

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex flex-row items-center space-x-2">
        <img src={logoo} alt="Logo" className="h-10" />
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      {/* Nav centré */}
      <nav className="hidden md:flex space-x-8 text-base font-medium absolute left-1/2 transform -translate-x-1/2">
        <Link to="/" className="text-green-700 hover:underline">Accueil</Link>
        <Link to="/explorer" className="text-gray-700 hover:text-green-700 hover:underline">Explorer</Link>
        <Link to="/apropos" className="text-gray-700 hover:text-green-700 hover:underline">À propos</Link>
      </nav>

      {/* Boutons à droite */}
      <div className="space-x-3 relative">
        {!isDashboard && location.pathname !== "/register" && (
          <button 
            onClick={handleLoginClick}
            className="border border-purple-500 text-purple-700 px-4 py-2 rounded hover:bg-purple-100 transition"
          >
            Se connecter
          </button>
        )}
        {!isDashboard && (
          <Link to="/register">
            <button className="bg-gradient-to-tl from-[#046638] to-[#99087E] px-5 py-2 text-white rounded transform transition-all duration-500 hover:opacity-90 hover:scale-105 hover:shadow-lg hover:rotate-y-12 hover:translate-y-[-2px]">
              S'inscrire
            </button>
          </Link>
        )}

        {/* Avatar et menu utilisateur sur le dashboard */}
        {isDashboard && (
          <div className="relative inline-block">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="focus:outline-none"
              title="Compte utilisateur"
            >
              <img
                src="https://api.dicebear.com/7.x/bottts/svg?seed=AI"
                alt="Avatar"
                className="w-10 h-10 rounded-full border-2 border-purple-400 shadow"
              />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                <div className="px-4 py-2 border-b text-gray-700">
                  <div className="font-semibold">{userEmail}</div>
                  <div className="text-xs text-gray-400">Connecté</div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-b"
                >
                  Se déconnecter
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

