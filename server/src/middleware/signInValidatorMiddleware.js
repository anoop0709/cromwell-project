import { signInValidator } from "../model/validatorSchema.js";

const options = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
};

export const signInValidatorMiddleware = (req, res, next) => {
  try {
    let errorObj;
    const { error, value } = signInValidator.validate(req.body, options);

    if (error) {
      errorObj = {
        statusCode: 401,
        message: error.message,
      };
      throw errorObj;
    } else {
      req.body = value;
      next();
    }
  } catch (error) {
    return res.status(401).send(error);
  }
};
