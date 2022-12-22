import database from "../../database";
import { returnedDataProductSchema } from "../../schemas/products.schemas";

export const createProductService = async ({ name, price, category_id }) => {
  category_id === undefined
    ? (category_id = null)
    : (category_id = category_id);

  const queryResponse = await database.query(
    `INSERT INTO 
        products (name, price, category_id) 
    VALUES
        ($1, $2, $3)
    RETURNING*;`,
    [name, price, category_id]
  );

  const returnedData = await returnedDataProductSchema.validate(
    queryResponse.rows[0],
    {
      stripUnknown: true,
    }
  );

  return returnedData;
};
