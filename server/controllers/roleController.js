import User from "../models/User.js";

// Author requests to become Expert
export const requestExpert = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.role !== "author")
      return res.status(400).json({ message: "Already expert or admin" });

    user.expertRequested = true;
    await user.save();

    res.json({ message: "Expert request sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Admin approves Expert request
export const approveExpert = async (req, res) => {
  try {
    // Only admin can approve
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "Access denied" });

    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.expertRequested) {
      user.role = "expert";
      user.expertRequested = false;
      await user.save();
      return res.json({ message: "User is now expert" });
    }

    res.status(400).json({ message: "No pending expert request" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
