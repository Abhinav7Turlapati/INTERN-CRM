import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async () => {

    try {

      setLoading(true);

      const response =
        await API.post(
          "/auth/login",
          {
            email,
            password,
          }
        );

      localStorage.setItem(
        "token",
        response.data.token
      );

      setLoading(false);

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Login Failed");

    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="bg-zinc-900 p-8 rounded-xl w-[400px]">

        <h1 className="text-3xl font-bold mb-6">
          GigFlow Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded mb-4 bg-zinc-800"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-4 bg-zinc-800"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="bg-purple-600 w-full p-3 rounded font-semibold"
        >
          {loading
            ? "Loading..."
            : "Login"}
        </button>

      </div>
    </div>
  );
};

export default Login;