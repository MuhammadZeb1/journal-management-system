import User from "../models/User.js";
import ExpertRequest from "../models/ExpertRequest.js";

// Admin → get all pending expert requests
export const getExpertRequests = async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "Access denied" });

    const requests = await ExpertRequest.find({ status: "pending" })
      .populate("user", "name email role");

    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Admin → approve expert request
export const approveExpert = async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "Access denied" });

    const request = await ExpertRequest.findById(req.params.requestId)
      .populate("user");

    if (!request)
      return res.status(404).json({ message: "Request not found" });

    if (request.status !== "pending")
      return res.status(400).json({ message: "Already processed" });

    // 1️⃣ update role
    request.user.role = "expert";

    // 🔔 notification (APPROVE)
    request.user.notifications.push({
      message: "🎉 Your expert request has been approved!",
    });

    await request.user.save();

    // 2️⃣ close request
    request.status = "approved";
    await request.save();

    res.json({ message: "User approved as Expert" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const rejectExpert = async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "Access denied" });

    const request = await ExpertRequest.findById(req.params.requestId)
      .populate("user");

    if (!request)
      return res.status(404).json({ message: "Request not found" });

    if (request.status !== "pending")
      return res.status(400).json({ message: "Already processed" });

    // 🔔 notification (REJECT)
    request.user.notifications.push({
      message: "❌ Your expert request was rejected.",
    });

    await request.user.save();

    request.status = "rejected";
    await request.save();

    res.json({ message: "Expert request rejected" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};



// Example in expertRequestController.js
export const requestExpertController = async (req, res) => {
  try {
    const { message } = req.body;

    const newRequest = await ExpertRequest.create({
      user: req.user._id,
      message,
      status: "pending",
    });

    res.json({ message: "Expert request submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
