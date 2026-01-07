import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // ✅ Store token
      localStorage.setItem("token", token);

      // ✅ Console log token
      console.log("✅ Google Login Token:", token);

      // ✅ Redirect
      navigate("/dashboard");
    }
  }, []);

  return <p className="text-center mt-10">Logging in with Google...</p>;
}
