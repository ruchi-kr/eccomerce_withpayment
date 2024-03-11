import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
import {
  braintreeTokenController,
  brantreePaymentController,
  createProductController,
  deleteProductController,
  getAllProductsController,
  productCategoryController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  reletedProductController,
  searchProductController,
  singleProductController,
  updateProductController,
} from "../controller/ProductsController.js";
import formidable from "express-formidable";

const router = express.Router();

// routes

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// get products

router.get("/get-products", getAllProductsController);

// single product

router.get("/single-product/:slug", singleProductController);

// get photo

router.get("/products-photo/:pid", productPhotoController);

// delete product

router.delete("/delete-products/:pid", deleteProductController);

// filter products

router.post("/products-filter", productFilterController);

// count products

router.get("/products-count", productCountController);

// product per page

router.get("/products-list/:page", productListController);

// search

router.get("/serach/:keyword", searchProductController);

//similar product

router.get("/releted-products/:pid/:cid", reletedProductController);

// category wise product

router.get("/products-category/:slug", productCategoryController);

// payments routs

router.get("/barintree/token", braintreeTokenController);

// payments routes

router.post("/barintree/payment", requireSignIn, brantreePaymentController);

export default router;
