import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/userSchema.js";
import "dotenv/config";

const { JWT_SECRET_KEY } = process.env;

export const home = async (req, res) => {
  try {
    res.send("Server");
  } catch (err) {
    console.log(err);
  }
};

export const userLogin = async (req, res) => {
  try {
    let errorObj;
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      errorObj = {
        statusCode: 404,
        message: "User with this email is not registered",
      };
      throw errorObj;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      errorObj = {
        statusCode: 401,
        message: "Your Email or Password is incorrect",
      };
      throw errorObj;
    }
    const { firstName, lastName, _id } = user;

    const token = jwt.sign({ email, _id }, JWT_SECRET_KEY, { expiresIn: "1h" });
    const userData = {
      firstName,
      lastName,
      _id,
      email,
    };
    return res.status(200).json({ userData, token });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const userSignUp = async (req, res) => {
  try {
    let errorObj;
    const { firstName, lastName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      errorObj = {
        statusCode: 401,
        message: "Email is already registered with us please login",
      };
      throw errorObj;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    const success = {
      message: "User Registration successful please sign in with your details",
    };
    return res.status(200).json(success);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const userData = async (req, res) => {
  try {
    let errorObj;
    const { id } = req.params;

    const user = await User.findOne({ _id: id });

    if (!user) {
      errorObj = {
        statusCode: 500,
        message: "no such user",
      };
      throw errorObj;
    }
    const { _id, firstName, lastName, email, isSubscribed } = user;
    const userObj = {
      _id,
      firstName,
      lastName,
      email,
      isSubscribed,
    };
    return res.status(200).json({ userObj });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
