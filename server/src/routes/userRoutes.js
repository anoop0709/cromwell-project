import express from 'express';
import { home, userData, userLogin, userSignin } from '../controler/helper.js'
import { userAuthentication } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', home);
router.post('/user/login', userLogin);
router.post('/user/register', userSignin);
router.post('/user/:id', userAuthentication, userData);
export default router;