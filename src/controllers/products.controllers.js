import { createProductService } from "../services/products/createProduct.service";
import { deleteProductService } from "../services/products/deleteProduct.service";
import { retrieveEspecificProductService } from "../services/products/retrieveEspecificProduct.service";
import { retrieveProductsService } from "../services/products/retrieveProducts.service";
import { retrieveProductsFromCategoryService } from "../services/products/retrieveProductsFromCategory.service";
import { updateProductService } from "../services/products/updateProduct.service";

export const retrieveProductsController = async (req, resp) => {
  const returnedData = await retrieveProductsService();
  return resp.status(200).json(returnedData);
};

export const createProductController = async (req, resp) => {
  const returnedData = await createProductService(req.body);
  return resp.status(201).json(returnedData);
};

export const retrieveEspecificProductController = async (req, resp) => {
  const returnedData = await retrieveEspecificProductService(req.foundProduct);
  return resp.status(200).json(returnedData);
};

export const updateProductController = async (req, resp) => {
  const returnedData = await updateProductService(req.foundProduct, req.body);
  return resp.status(200).json(returnedData);
};

export const deleteProductController = async (req, resp) => {
  await deleteProductService(req.foundProduct);
  return resp.status(204).json();
};

export const retrieveProductsFromCategoryController = async (req, resp) => {
  const returnedData = await retrieveProductsFromCategoryService(
    req.params.categoryId
  );
  return resp.status(200).json(returnedData);
};
