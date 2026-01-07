import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authActions.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(form)).then((res) => {
      if (!res.error) {
        const token = res.payload.token;

        // ✅ Store token in localStorage
        localStorage.setItem("token", token);

        // ✅ Console log token
        console.log("✅ Manual Login Token:", token);

        // ✅ Redirect to dashboard
        navigate("/dashboard");
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="card w-96 bg-base-100 shadow-xl p-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-3"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-3"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          className="btn btn-primary w-full"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* Google Login */}
        <button
          type="button"
          className="btn btn-error w-full mt-3"
          onClick={() =>
            window.open("http://localhost:5000/api/auth/google", "_self")
          }
        >
          Login with Google
        </button>
      </form>
    </div>
  );
}
