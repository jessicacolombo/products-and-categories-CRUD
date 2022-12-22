import database from "../../database";
import { returnedDataProductSchema } from "../../schemas/products.schemas";

export const updateProductService = async (product, newProduct) => {
  const updatedProduct = {
    ...product,
    name: newProduct.name ? newProduct.name : product.name,
    price: newProduct.price ? newProduct.price : product.price,
    category_id: newProduct.category_id
      ? newProduct.category_id
      : product.category_id,
  };

  const queryResponse = await database.query(
    `UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4 RETURNING *;`,
    [
      updatedProduct.name,
      updatedProduct.price,
      updatedProduct.category_id,
      product.id,
    ]
  );

  const returnedData = returnedDataProductSchema.validate(
    queryResponse.rows[0],
    {
      stripUnknown: true,
    }
  );

  return returnedData;
};
