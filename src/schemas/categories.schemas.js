import * as yup from "yup";

export const sentDataCategorySchema = yup.object().shape({
  name: yup.string().required(),
});

export const returnedDataCategorySchema = yup.object().shape({
  id: yup.number().required(),
  name: yup.string().required(),
});

export const listReturnedDataCategorySchema = yup.array(
  returnedDataCategorySchema
);
