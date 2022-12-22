import database from "../database";
import { AppError } from "../errors";

export const ensureProductExists = async (req, resp, next) => {
  const queryResponse = await database.query(
    `SELECT * FROM products WHERE id = $1;`,
    [req.params.id]
  );

  const product = queryResponse.rows[0];

  if (!product) {
    throw new AppError("Produto não encontrado.", 404);
  }

  req.foundProduct = product;

  next();
};
