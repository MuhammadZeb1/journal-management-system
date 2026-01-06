import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getExpertRequests,
  approveExpert,
  rejectExpert,
} from "../features/role/roleActions";

export default function AdminApprove() {
  const dispatch = useDispatch();
  const { requests, loading } = useSelector((state) => state.role);

  useEffect(() => {
    dispatch(getExpertRequests());
  }, [dispatch]);

  return (
    <div className="overflow-x-auto w-full max-w-5xl">
      <table className="table table-zebra bg-white shadow">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Info</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req._id}>
              <td>{req.user.name}</td>
              <td>{req.user.email}</td>
              <td className="max-w-xs truncate">{req.message}</td>
              <td className="space-x-2">
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => dispatch(approveExpert(req._id))}
                  disabled={loading}
                >
                  Approve
                </button>

                <button
                  className="btn btn-error btn-sm"
                  onClick={() => dispatch(rejectExpert(req._id))}
                  disabled={loading}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {requests.length === 0 && (
        <p className="text-center mt-5 text-gray-500">
          No pending expert requests
        </p>
      )}
    </div>
  );
}
