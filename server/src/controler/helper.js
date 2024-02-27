import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../model/userModel.js';
import 'dotenv/config';
import mongoose from 'mongoose';
import { connectDatabase } from '../utils/dataBaseConfig.js';
import mongoSanitize from 'express-mongo-sanitize';

const { JWT_SECRET_KEY } = process.env;


export const home = async (req, res) => {
    try {
      res.send('hello');
    } catch (err) {
      console.log(err);
    }
  };

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        await connectDatabase()
        const user = await User.findOne({ email });
        let errorObj;

        if (!user) {
            errorObj = {
                statusCode: 404,
                message: 'User with this email is not registered'
            }
            throw errorObj;
        };

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            errorObj = {
                statusCode: 401,
                message: 'Your Email or Password is incorrect'
            }
            throw errorObj;
        };
        const { firstName, lastName, _id } = user;

        const token = jwt.sign({ email, _id }, JWT_SECRET_KEY, { expiresIn: '1h' });
        const userData = {
            firstName,
            lastName,
            _id,
            email
        }
        return res.status(200).json({ userData, token });
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);          
    } finally {
        console.log('db disconnected');
        await mongoose.disconnect();
    }
};

export const userSignUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        let errorObj;
        await connectDatabase()
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            errorObj = {
                statusCode: 401,
                message: 'Email is already registered with us please login'
            };
            throw errorObj;
        }
        const hashedPassword = await bcrypt.hash(password,10);
        await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
          });
          const success = {
            message: 'User Registration successful please sign in with your details'
          }
        return res.status(200).json(success);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);      
    } finally {
        console.log('db disconnected');
        await mongoose.disconnect();
    }
};

export const userData = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        mongoSanitize.sanitize(id);
        await connectDatabase()
        const user = await User.findOne({ _id: id });
        const { _id, firstName, lastName, email, isSubscribed } = user;
        const userObj = {
            _id,
            firstName,
            lastName,
            email,
            isSubscribed
        };
        console.log(userObj);
        return res.status(200).json({ userObj });
        
    } catch (error) {
        return res.status(500).send(error.message)
    } finally {
        console.log('db disconnected');
        await mongoose.disconnect();
    }

}