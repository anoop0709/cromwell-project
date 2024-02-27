import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { userLogin, userSignUp, userData } from '../src/controller/helper';
import { User } from '../src/model/userModel'; 
import mongoSanitize from 'express-mongo-sanitize';
import 'dotenv/config';

const { JWT_SECRET_KEY } = process.env;


jest.mock('../src/model/userModel', () => ({
  User: {
    findOne: jest.fn(),
    create: jest.fn(),
  },
}));


jest.mock('bcrypt', () => ({
  compare: jest.fn(),
  hash: jest.fn(),
}));

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
}));

jest.spyOn(mongoose, 'connect');
jest.spyOn(mongoose, 'disconnect');

mongoSanitize.sanitize = jest.fn();

describe('userLogin Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should login user with valid credentials', async () => {
    const req = {
      body: {
        email: 'test@example.com',
        password: 'password',
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const user = {
      _id: 'testUserId',
      firstName: 'John',
      lastName: 'Doe',
    };

    User.findOne.mockResolvedValueOnce(user);
    bcrypt.compare.mockResolvedValueOnce(true);
    jwt.sign.mockReturnValueOnce('testToken');

    await userLogin(req, res);

    expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
    expect(bcrypt.compare).toHaveBeenCalledWith('password', undefined); 
    expect(jwt.sign).toHaveBeenCalledWith({ email: 'test@example.com', _id: 'testUserId' }, JWT_SECRET_KEY, { expiresIn: '1h' });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ userData: { _id: 'testUserId', firstName: 'John', lastName: 'Doe', email: "test@example.com" }, token: 'testToken' });
  });


});

describe('userSignUp Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should sign up user with valid details', async () => {
    const req = {
      body: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
        password: 'password',
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    User.findOne.mockResolvedValueOnce(null);
    bcrypt.hash.mockResolvedValueOnce('hashedPassword');
    User.create.mockResolvedValueOnce();

    await userSignUp(req, res);

    expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
    expect(bcrypt.hash).toHaveBeenCalledWith('password', 10);
    expect(User.create).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      password: 'hashedPassword',
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'User Registration successful please sign in with your details' });
  });

});

describe('userData Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should retrieve user data with valid ID', async () => {
    const req = {
      params: {
        id: 'testUserId',
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const user = {
      _id: 'testUserId',
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      isSubscribed: true,
    };

    User.findOne.mockResolvedValueOnce(user);

    await userData(req, res);

    expect(mongoSanitize.sanitize).toHaveBeenCalledWith('testUserId');
    expect(User.findOne).toHaveBeenCalledWith({ _id: 'testUserId' });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ userObj: user });
  });

});
