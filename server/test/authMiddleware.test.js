import jwt from "jsonwebtoken";
import { userAuthentication } from "../src/middleware/authMiddleware"; 
import 'dotenv/config';

const { JWT_SECRET_KEY } = process.env; 

describe("userAuthentication Middleware", () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      headers: {
        authorization: "",
      },
    };
    res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };
    next = jest.fn();
  });

  it("should pass authentication and call next() if valid token is provided", () => {
    const token = jwt.sign({ email: "testemail@test.com", userId: "testUserId" }, JWT_SECRET_KEY );
    req.headers.authorization = `Bearer ${token}`;
    userAuthentication(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it("should return 401 status and error message if token is missing", () => {
    userAuthentication(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith("token not found");
  });

  it("should return 401 status and error message if token is invalid", () => {
    req.headers.authorization = "Bearer invalidToken";

    userAuthentication(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith("jwt malformed");
  });
  

});
