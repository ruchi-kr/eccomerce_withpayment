import express from "express"
import { getAllUsers, deleteUser } from "../controller/userController.js";

const router = express.Router();

router.get("/alluser", getAllUsers);
router.delete("/delete/:id", deleteUser);

export default router;