import database from "../../database";
import { listReturnedDataCategorySchema } from "../../schemas/categories.schemas";

export const retrieveCategoriesService = async () => {
  const queryResponse = await database.query(`SELECT * FROM categories; `);

  const returnedData = await listReturnedDataCategorySchema.validate(
    queryResponse.rows,
    {
      stripUnknown: true,
    }
  );
  return returnedData;
};
