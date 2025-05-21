import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);
      if (res.status === 200) {
        // Stocker l'email de l'utilisateur dans le localStorage
        localStorage.setItem('userEmail', formData.email);
        // Rediriger vers le dashboard après connexion
        navigate("/dashboard", { replace: true });
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Erreur serveur");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-[90%] max-w-md border">
        <h2 className="text-center text-xl font-semibold text-green-700 mb-4">Connexion</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-gradient-to-tl from-[#046638] to-[#99087E] px-5 py-2 text-white rounded transform transition-all duration-500 hover:opacity-90 hover:scale-105 hover:shadow-lg ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Connexion en cours...' : 'Se connecter'}
          </button>
        </form>
        {message && <p className="text-center mt-4 text-sm text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
