import express from 'express';
import { home, userData, userLogin, userSignUp } from '../controller/helper.js'
import { userAuthentication } from '../middleware/authMiddleware.js';
import { signUpValidatorMiddleware } from '../middleware/signupValidatorMiddleware.js';
import { signInValidatorMiddleware } from '../middleware/signInValidatorMiddleware.js';

const router = express.Router();

router.get('/', home);
router.post('/user/login',signInValidatorMiddleware, userLogin);
router.post('/user/register',signUpValidatorMiddleware, userSignUp);
router.get('/user/profile/:id', userAuthentication, userData);

export default router;