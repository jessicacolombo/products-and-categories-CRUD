import database from "../../database";
import { AppError } from "../../errors";
import { returnedDataCategorySchema } from "../../schemas/categories.schemas";

export const createCategoryService = async ({ name }) => {
  const searchCategory = await database.query(
    `
  SELECT * FROM categories WHERE name = $1;
  `,
    [name]
  );

  if (searchCategory.rowCount > 0) {
    throw new AppError("Já existe uma categoria com esse nome cadastrada.");
  }

  const queryResponse = await database.query(
    `INSERT INTO
        categories("name")
    VALUES 
        ($1)
    RETURNING*;`,
    [name]
  );

  const retunedData = await returnedDataCategorySchema.validate(
    queryResponse.rows[0],
    {
      stripUnknown: true,
    }
  );

  return retunedData;
};
