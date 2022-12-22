import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  retrieveCategoriesController,
  retrieveEspecificCategoryController,
  updateCategoryController,
} from "../controllers/categories.controllers";
import { ensureCategoryExists } from "../middlewares/ensureCategoryExists.middleware";
import { validateCategoryDataMiddleware } from "../middlewares/validateCategoryData.middleware";
import { sentDataCategorySchema } from "../schemas/categories.schemas";

export const categoriesRoutes = Router();

categoriesRoutes.get("", retrieveCategoriesController);
categoriesRoutes.post(
  "",
  validateCategoryDataMiddleware(sentDataCategorySchema),
  createCategoryController
);
categoriesRoutes.get(
  "/:id",
  ensureCategoryExists,
  retrieveEspecificCategoryController
);
categoriesRoutes.patch(
  "/:id",
  validateCategoryDataMiddleware(sentDataCategorySchema),
  ensureCategoryExists,
  updateCategoryController
);
categoriesRoutes.delete("/:id", ensureCategoryExists, deleteCategoryController);
