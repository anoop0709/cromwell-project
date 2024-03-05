import jwt from "jsonwebtoken";
import "dotenv/config";


const { JWT_SECRET_KEY } = process.env;

export const userAuthentication = (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1];
        if (!token) {
            throw new Error('token not found');
        }
        const decodedToken = jwt.verify(token,JWT_SECRET_KEY);
        if (!decodedToken) {
            throw new Error('access denied invalid token !!!!')
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(401).send(error.message);
    }
};