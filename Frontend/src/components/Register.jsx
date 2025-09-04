import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas.");
      setIsLoading(false);
      return;
    }

    try {
      console.log("Envoi des données:", formData); // Log des données envoyées
      const res = await axios.post("http://localhost:8000/api/register", {
        nom: formData.nom,
        email: formData.email,
        password: formData.password
      });
      console.log("Réponse du serveur:", res.data); // Log de la réponse
      setMessage(res.data.message);
      navigate("/login");
    } catch (err) {
      setMessage(err.response?.data?.message || "Erreur serveur");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md mt-[-90px] w-[90%] max-w-md border">
        <h2 className="text-center text-xl font-semibold text-green-700 mb-4">S'inscrire</h2>

        <button className="w-full bg-purple-100 text-gray-700 py-2 rounded-md flex items-center justify-center gap-2 mb-4">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
          S'inscrire avec Google
        </button>

        <div className="flex items-center justify-center mb-4">
          <hr className="w-1/2 border-purple-300" />
          <span className="px-2 text-gray-500">ou</span>
          <hr className="w-1/2 border-purple-300" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              className="border-2 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Adresse mail"
              className="border-2 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              className="border-2 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmation mot de passe"
              className="border-2 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`bg-gradient-to-tl from-[#046638] to-[#99087E] px-5 py-2 text-white rounded transform transition-all duration-500 hover:opacity-90 hover:scale-105 hover:shadow-lg hover:rotate-y-12 hover:translate-y-[-2px] ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Inscription en cours...' : 'Envoyer'}
          </button>
        </form>

        {message && (
          <p className={`text-center mt-4 text-sm ${message.includes('succès') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}

        <p className="text-center mt-4 text-sm">
          Vous avez déjà un compte ? <a href="/login" className="text-purple-700 font-semibold">Se connecter</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
