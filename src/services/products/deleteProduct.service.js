import database from "../../database";

export const deleteProductService = async (product) => {
  await database.query(`DELETE FROM products WHERE id = $1;`, [product.id]);
};
