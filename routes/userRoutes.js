const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const logger = require("../middleware/logger");
const authenticateJWT = require("../middleware/authenticate");

const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// Routes for CRUD operations
router.get("/", authenticateJWT, userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
