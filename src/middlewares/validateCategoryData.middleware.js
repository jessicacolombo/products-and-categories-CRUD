export const validateCategoryDataMiddleware =
  (schema) => async (req, resp, next) => {
    try {
      const validated = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      req.foundCategory = validated;

      return next();
    } catch (error) {
      return resp.status(400).json({
        message: error.errors,
      });
    }
  };
