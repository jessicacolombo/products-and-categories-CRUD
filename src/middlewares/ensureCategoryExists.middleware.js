import database from "../database";
import { AppError } from "../errors";

export const ensureCategoryExists = async (req, resp, next) => {
  const queryResponse = await database.query(
    `SELECT * FROM categories WHERE id = $1;`,
    [req.params.id]
  );

  const category = queryResponse.rows[0];

  if (!category) {
    throw new AppError("Categoria não encontrada.", 404);
  }

  req.foundCategory = category;

  next();
};
