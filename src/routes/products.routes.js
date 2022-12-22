import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  retrieveEspecificProductController,
  retrieveProductsController,
  retrieveProductsFromCategoryController,
  updateProductController,
} from "../controllers/products.controllers";
import { ensureProductExists } from "../middlewares/ensureProductExists.middleware";
import { validateProductDataMiddleware } from "../middlewares/validateProductData.middleware";
import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/products.schemas";

export const productsRoutes = Router();

productsRoutes.get("", retrieveProductsController);
productsRoutes.get(
  "/:id",
  ensureProductExists,
  retrieveEspecificProductController
);
productsRoutes.get(
  "/category/:categoryId",
  retrieveProductsFromCategoryController
);
productsRoutes.post(
  "",
  validateProductDataMiddleware(createProductSchema),
  createProductController
);
productsRoutes.patch(
  "/:id",
  validateProductDataMiddleware(updateProductSchema),
  ensureProductExists,
  updateProductController
);
productsRoutes.delete("/:id", ensureProductExists, deleteProductController);
