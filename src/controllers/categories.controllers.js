import { retrieveCategoriesService } from "../services/categories/retrieveCategories.service";
import { createCategoryService } from "../services/categories/createCategory.service";
import { retrieveEspecificCategoryService } from "../services/categories/retrieveEspecificCategory.service";
import { updateCategoryService } from "../services/categories/updateCategory.service";
import { deleteCategoryService } from "../services/categories/deleteCategory.service";

export const retrieveCategoriesController = async (req, resp) => {
  const returnedData = await retrieveCategoriesService();
  return resp.status(200).json(returnedData);
};

export const createCategoryController = async (req, resp) => {
  const returnedData = await createCategoryService(req.foundCategory);
  return resp.status(201).json(returnedData);
};

export const retrieveEspecificCategoryController = async (req, resp) => {
  const returnedData = await retrieveEspecificCategoryService(
    req.foundCategory
  );
  return resp.status(200).json(returnedData);
};

export const updateCategoryController = async (req, resp) => {
  const returnedData = await updateCategoryService(req.foundCategory, req.body);
  return resp.status(200).json(returnedData);
};

export const deleteCategoryController = async (req, resp) => {
  await deleteCategoryService(req.foundCategory);
  return resp.status(204).json();
};
