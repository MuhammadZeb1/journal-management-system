import React from "react";
import AuthorRequest from "../components/AuthorRequest.jsx";
import AdminApprove from "../components/AdminApprove.jsx";

export default function RoleManagement() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 gap-10">
      <h1 className="text-3xl font-bold mb-6">Role Management</h1>

      {/* Author request component */}
      <AuthorRequest />

      {/* Admin approve component */}
      <AdminApprove />
    </div>
  );
}
