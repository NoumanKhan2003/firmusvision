import Joi from "joi";

function contactAddValidation(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    company: Joi.string(),
    phone: Joi.string().required(),
    website: Joi.string(),
    message: Joi.string(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res
      .status(400)
      .json({ message: "Bad request", error: error.details });
  }

  next();
}

export { contactAddValidation };
