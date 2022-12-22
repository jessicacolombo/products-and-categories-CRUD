import { returnedDataProductSchema } from "../../schemas/products.schemas";

export const retrieveEspecificProductService = async (product) => {
  const returnedData = await returnedDataProductSchema.validate(product, {
    stripUnknown: true,
  });
  return returnedData;
};
