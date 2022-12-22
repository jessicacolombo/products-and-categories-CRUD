import database from "../../database";
import { productsFromCategory } from "../../schemas/products.schemas";

export const retrieveProductsFromCategoryService = async (categoryId) => {
  const queryResponse = await database.query(
    `SELECT p."name", p.price, c."name" AS category 
    FROM products p JOIN categories c ON p.category_id  = c.id  
    WHERE c.id = $1;`,
    [categoryId]
  );

  const returnedData = productsFromCategory.validate(queryResponse.rows, {
    stripUnknown: true,
  });
  return returnedData;
};
