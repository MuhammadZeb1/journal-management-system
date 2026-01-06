import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "../features/notifications/notificationActions";

export default function NotificationsPage() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.notifications);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>

      {loading && <p>Loading...</p>}

      {list.map((n, i) => (
        <div
          key={i}
          className="p-3 mb-2 bg-white shadow rounded border-l-4 border-blue-500"
        >
          {n.message}
        </div>
      ))}

      {list.length === 0 && !loading && (
        <p className="text-gray-500">No notifications</p>
      )}
    </div>
  );
}
