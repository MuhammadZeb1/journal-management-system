import React from "react";
import AuthorRequest from "../components/AuthorRequest.jsx";

export default function AuthorRequestPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Request Expert Role</h1>
      <AuthorRequest />
    </div>
  );
}
