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
                message: 'user not found'
            }
            throw errorObj;
        };

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            errorObj = {
                statusCode: 401,
                message: 'wrong password'
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
        return res.send(error);          
    } finally {
        console.log('db disconnected');
        await mongoose.disconnect();
    }
};

export const userSignin = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        let errorObj;
        await connectDatabase()
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            errorObj = {
                statusCode: 401,
                message: 'user already registered'
            };
            throw errorObj;
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
          });
        const { _id } = newUser;
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
        return res.send(error);  
        
    } finally {
        console.log('db disconnected');
        await mongoose.disconnect();
    }
};

export const userData = async (req, res) => {
    try {
        const { id } = req.params;
        mongoSanitize.sanitize(id);
        await connectDatabase()
        const user = await User.findOne({ _id: id });
        const { _id, firstName, lastName, email } = user;
        const userObj = {
            id: _id,
            firstName,
            lastName,
            email
        };
        return res.status(200).json({ userObj });
        
    } catch (error) {
        return res.status(401).send(error.message)
    } finally {
        console.log('db disconnected');
        await mongoose.disconnect();
    }

}