import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoo from '../assets/logo_salam.png';
import logo from '../assets/ispm.png';
import avatar from '../assets/avatar.png';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const userEmail = localStorage.getItem('userEmail') || "Utilisateur";
  const handleLoginClick = () => navigate('/login');
  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/login');
  };
  const isDashboard = location.pathname === "/dashboard";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white/80 backdrop-blur-md shadow-lg px-4 py-2 flex items-center justify-between sticky top-0 z-50"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-row items-center space-x-2"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={logoo}
          alt="Logo"
          className="h-11 w-11 transition-transform"
        />
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={logo}
          alt="Logo"
          className="h-11 w-11 transition-transform"
        />
      </motion.div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
        {[
          { path: "/", label: "Fandraisana" },
          { path: "/explorer", label: "Fikaroana" },
          { path: "/apropos", label: "Momba" }
        ].map((item) => (
          <motion.div
            key={item.path}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item.path}
              className={`text-base font-medium transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-purple-700 border-b-2 border-purple-700"
                  : "text-gray-600 hover:text-purple-700"
              }`}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Actions */}
      <div className="space-x-2 relative">
        {!isDashboard && location.pathname !== "/register" && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoginClick}
            className="text-sm border-2 border-purple-500 text-purple-700 px-4 py-1.5 rounded-full hover:bg-purple-50 transition-colors duration-300"
          >
            Miditra
          </motion.button>
        )}
        {!isDashboard && (
          <Link to="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm bg-gradient-to-tr from-purple-700 to-blue-400 hover:from-pink-700 hover:to-blue-600 px-4 py-1.5 text-white rounded-full shadow-md transition-all duration-300"
            >
              Misoratra anarana
            </motion.button>
          </Link>
        )}

        {/* Utilisateur */}
        {isDashboard && (
          <div className="relative inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMenu(!showMenu)}
              className="focus:outline-none"
              title="Compte utilisateur"
            >
              <img
                src={avatar}
                alt="Avatar"
                className="w-11 h-11 rounded-full border-2 border-purple-400 shadow-lg transition-transform"
              />
            </motion.button>
            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-purple-100 overflow-hidden"
                >
                  <div className="px-3 py-2 border-b border-purple-100 bg-gradient-to-r from-purple-50 to-blue-50">
                    <div className="font-semibold text-gray-800 text-sm">{userEmail}</div>
                    <div className="text-xs text-gray-500">Tafiditra</div>
                  </div>
                  <motion.button
                    whileHover={{ backgroundColor: "#FEE2E2" }}
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 text-sm hover:bg-red-50 transition-colors duration-200"
                  >
                    Hivoaka
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.header>
  );
}
