import express from 'express';

import validator from '../middlewares/validator';
import users from '../controllers/users';

const router = express.Router();

router.post('/signup', validator.signup, users.signup);

export default router;