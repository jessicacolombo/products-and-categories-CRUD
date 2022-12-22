import database from "../../database";

export const deleteCategoryService = async (category) => {
  await database.query(`DELETE FROM categories WHERE id = $1;`, [category.id]);
};
