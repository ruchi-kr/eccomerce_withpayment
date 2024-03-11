import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
import {
  DeleteCategoryController,
  SingleCategoryController,
  categoryController,
  createCategoryController,
  updateCategoryController,
} from "../controller/CategoryController.js";

const router = express.Router();

// routes

// create category

router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update category

router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// get all category

router.get("/get-categoris", categoryController);

// single category

router.get("/single-category/:slug", SingleCategoryController);

// deleten category

router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  DeleteCategoryController
);

export default router;
