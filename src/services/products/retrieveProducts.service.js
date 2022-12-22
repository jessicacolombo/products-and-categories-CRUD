import database from "../../database";
import { listProductsSchema } from "../../schemas/products.schemas";

export const retrieveProductsService = async () => {
  const queryResponse = await database.query(`SELECT * FROM products; `);

  const returnedData = await listProductsSchema.validate(queryResponse.rows, {
    stripUnknown: true,
  });

  return returnedData;
};
