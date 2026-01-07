import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await login({ email, password });

    console.log("Respuesta login:", res); // 👈 DEBUG CLAVE

    if (res.token) {
      localStorage.setItem("token", res.token);
      navigate("/");
    } else {
      alert(res.message || "Error al iniciar sesión");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button>Entrar</button>
    </form>
  );
}
