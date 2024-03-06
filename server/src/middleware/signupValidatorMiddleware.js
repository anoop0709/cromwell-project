import { signUpValidator } from "../model/validatorSchema.js";

const options = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
};

export const signUpValidatorMiddleware = (req, res, next) => {
  try {
    let errorObj;
    const { error, value } = signUpValidator.validate(req.body, options);

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
