import { useState } from "react";
import { register } from "../services/auth.service";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(form);
    alert(res.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-6 border rounded w-80">
        <h2 className="text-xl font-bold mb-4">Registro</h2>

        <input
          placeholder="Username"
          className="w-full mb-2 p-2 border"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full mb-2 p-2 border"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 p-2 border"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-green-500 text-white p-2 mt-3">
          Registrarse
        </button>
      </form>
    </div>
  );
}
