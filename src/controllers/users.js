import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import models from '../models';

const { Users } = models;

export default {
  signup: async (req, res) => {
    const {
      firstname, lastname, email, password
    } = req.body;

    const user = {
      id: Users.list.length + 1,
      firstname,
      lastname,
      email,
      password: await bcrypt.hash(password, 10)
    };

    // persist user to database
    Users.create(user);

    // sign jwt and wrap in a cookie
    const token = jwt.sign({ userId: user.id }, process.env.SECRET);
    res.cookie('token', token, { expires: new Date(Date.now() + 3600000), httpOnly: true });

    return res.jsend.success(token);
  }
};
