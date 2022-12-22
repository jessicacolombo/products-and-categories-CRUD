import { returnedDataCategorySchema } from "../../schemas/categories.schemas";

export const retrieveEspecificCategoryService = async (category) => {
  const returnedData = await returnedDataCategorySchema.validate(category, {
    stripUnknown: true,
  });

  return returnedData;
};
