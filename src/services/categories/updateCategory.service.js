import database from "../../database";
import { returnedDataCategorySchema } from "../../schemas/categories.schemas";

export const updateCategoryService = async (category, newCategory) => {
  const uptadedCategory = {
    ...category,
    name: newCategory.name,
  };

  const queryResponse = await database.query(
    `UPDATE categories SET name = $1 WHERE id = $2 RETURNING *;`,
    [uptadedCategory.name, category.id]
  );

  const returnedData = await returnedDataCategorySchema.validate(
    queryResponse.rows[0],
    {
      stripUnknown: true,
    }
  );

  return returnedData;
};
