const { ZodError } = require("zod");

const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    console.error("💥 Full Error from Zod or Middleware:", err);

    const status = 422;
    const message = "Fill the input correctly";

    // If it's a Zod validation error, pull the message
    let extraDetails = "Validation failed";
    if (err instanceof ZodError) {
      extraDetails = err.errors?.[0]?.message || extraDetails;
    } else if (err.message) {
      extraDetails = err.message;
    }

    const error = {
      status,
      message,
      extraDetails,
    };

    next(error);
  }
};

module.exports = validate;
