import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

// -----------------------------------------------------------
// 📌 USER ROUTES
// Base URL: /todo-list/api/users
// -----------------------------------------------------------

// GET ALL USERS (with optional pagination)
// Example: GET /todo-list/api/users?page=1&limit=5
router.get("/", userController.getAllUsers);

// CREATE A NEW USER
// Example body: { "name": "John", "email": "john@example.com" }
router.post("/", userController.createUser);

// GET SINGLE USER BY ID
// Example: GET /todo-list/api/users/:id
router.get("/:id", userController.getUserById);

// PATCH (partial update) user by ID
// Example: GET /todo-list/api/users/:id
router.patch("/:id", userController.patchUser);

// UPDATE EXISTING USER BY ID
// Example: PUT /todo-list/api/users/:id
// Body: { "name": "Updated Name", "email": "updated@example.com" }
router.put("/:id", userController.updateUser);

// DELETE USER BY ID
// Example: DELETE /todo-list/api/users/:id
router.delete("/:id", userController.deleteUser);

export default router;
