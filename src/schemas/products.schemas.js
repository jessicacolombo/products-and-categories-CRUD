import * as yup from "yup";

export const createProductSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().positive().required(),
  category_id: yup.number().nullable(true).notRequired(),
});

export const updateProductSchema = yup.object().shape({
  name: yup.string(),
  price: yup.number().positive(),
  category_id: yup.number().positive(),
});

export const returnedDataProductSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  price: yup.number().positive().required(),
  category_id: yup.number().nullable(true),
});

export const listProductsSchema = yup.array(returnedDataProductSchema);

const returnedDataProductsFromCategory = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().positive().required(),
  category: yup.string().required(),
});

export const productsFromCategory = yup.array(returnedDataProductsFromCategory);
