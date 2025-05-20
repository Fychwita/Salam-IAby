import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return setMessage("Les mots de passe ne correspondent pas.");
    }

    try {
      const res = await axios.post("http://localhost:5000/api/register", formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Erreur serveur");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-[90%] max-w-md border">
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
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            className="border-2 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Adress mail"
            className="border-2 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de pass"
            className="border-2 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmation mot de pass"
            className="border-2 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-green-600 to-purple-600 text-white py-2 rounded-md font-semibold"
          >
            Envoyer
          </button>
        </form>

        {message && <p className="text-center mt-4 text-sm text-red-500">{message}</p>}

        <p className="text-center mt-4 text-sm">
          Vous avez déjà un compte ? <a href="/login" className="text-purple-700 font-semibold">Se connecter</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
