import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  orderController,
  getAllorderController,
  orderStatusController,
 
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";

// router object

const router = express.Router();

//routing
//Register || Method POST

router.post("/register", registerController);

//login post

router.post("/login", loginController);

// test routes

router.get("/test", requireSignIn, isAdmin, testController);

// forget password

router.post("/forgot-password", forgotPasswordController);

//protected user routes

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected routes admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update Profile

router.put("/profile-update", requireSignIn, updateProfileController);

// order

router.get("/orders", requireSignIn, orderController);

// All orders

router.get("/all-orders", requireSignIn, isAdmin, getAllorderController);

//  orders status

router.put(
  "/orders-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);




export default router;
