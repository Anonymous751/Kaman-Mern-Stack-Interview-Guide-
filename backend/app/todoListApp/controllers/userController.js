import User from "../models/userModel.js";

// -------------------------------------------------------------
// 📌 userController.js
// Purpose: Handle all user-related operations (CRUD + Pagination)
// -------------------------------------------------------------

const userController = {

  // -----------------------------------------------------------
  // 📌 GET ALL USERS (with Pagination)
  // GET /todo-list/api/users?page=1&limit=5
  // -----------------------------------------------------------
  getAllUsers: async (req, res) => {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 5;
      const skip = (page - 1) * limit;

      const totalUsers = await User.countDocuments();

      const users = await User.find()
        .skip(skip)
        .limit(limit);

      res.json({
        success: true,
        totalUsers,
        totalPages: Math.ceil(totalUsers / limit),
        currentPage: page,
        perPage: limit,
        data: users, // frontend uses res.data.data
      });
    } catch (error) {
      console.error("❌ Error fetching users:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },

  // -----------------------------------------------------------
  // 📌 GET SINGLE USER BY ID
  // GET /todo-list/api/users/:id
  // -----------------------------------------------------------
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id); // this id is same as routes id 

      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }

      res.json({ success: true, data: user });
    } catch (error) {
      console.error("❌ Error fetching user:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },

  // -----------------------------------------------------------
  // 📌 CREATE NEW USER
  // POST /todo-list/api/users
  // Body: { name, email }
  // -----------------------------------------------------------
  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);

      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      console.error("❌ Error creating user:", error);
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // -----------------------------------------------------------
// 📌 PATCH USER (Partial Update)
// PATCH /todo-list/api/users/:id
// Body: { name?: "New Name", email?: "newemail@example.com" }
// -----------------------------------------------------------
patchUser: async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // only updates fields present in body
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "User updated successfully", data: updatedUser });
  } catch (error) {
    console.error("❌ Error patching user:", error);
    res.status(400).json({ success: false, message: error.message });
  }
},


  // -----------------------------------------------------------
  // 📌 UPDATE USER
  // PUT /todo-list/api/users/:id
  // Body: { name?, email? }
  // -----------------------------------------------------------
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,  // this id is same as route id
        req.body,
        { new: true, runValidators: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ success: false, message: "User not found" });
      }

      res.json({
        success: true,
        message: "User updated successfully",
        data: updatedUser,
      });
    } catch (error) {
      console.error("❌ Error updating user:", error);
      res.status(400).json({ success: false, message: error.message });
    }
  },

  // -----------------------------------------------------------
  // 📌 DELETE USER
  // DELETE /todo-list/api/users/:id
  // -----------------------------------------------------------
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id); // this id is same you write in routes 

      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }

      await user.deleteOne();
      res.json({ success: true, message: "User deleted successfully" });
    } catch (error) {
      console.error("❌ Error deleting user:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },

};

export default userController;

