import express from 'express';
import { home, userData, userLogin, userSignUp } from '../controler/helper.js'
import { userAuthentication } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', home);
router.post('/user/login', userLogin);
router.post('/user/register', userSignUp);
router.get('/user/profile/:id', userAuthentication, userData);

export default router;