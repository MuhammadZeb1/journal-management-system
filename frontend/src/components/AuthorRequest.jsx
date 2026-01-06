import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestExpert } from "../features/role/roleActions";

export default function AuthorRequest() {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.role);
  const [info, setInfo] = useState("");

  const handleRequest = () => {
    if (info.trim()) {
      dispatch(requestExpert(info));
      setInfo("");
    }
  };

  return (
    <div className="card p-5 w-96 shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-3">Become an Expert</h2>

      <textarea
        className="textarea textarea-bordered w-full mb-3"
        placeholder="Tell admin about your experience (e.g. university professor...)"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />

      <button
        className="btn btn-primary w-full"
        onClick={handleRequest}
        disabled={loading}
      >
        {loading ? "Sending..." : "Submit Request"}
      </button>

      {message && <p className="text-green-600 mt-3">{message}</p>}
      {error && <p className="text-red-600 mt-3">{error}</p>}
    </div>
  );
}
