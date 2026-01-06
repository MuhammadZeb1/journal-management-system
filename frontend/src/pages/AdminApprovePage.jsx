import React from "react";
import AdminApprove from "../components/AdminApprove.jsx";

export default function AdminApprovePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Approve Expert Requests</h1>
      <AdminApprove />
    </div>
  );
}
