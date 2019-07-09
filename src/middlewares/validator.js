import validationHelpers from '../utilities/validationHelpers';
import { emailRegex, passwordRegex } from '../utilities/regexen';

const { checkForEmptyFields, checkPatternedFields } = validationHelpers;

export default {
  auth: (req, res, next) => {
    const errors = [];
    const {
      firstname, lastname, email, password
    } = req.body;

    if (req.path.includes('signup')) {
      errors.push(...checkForEmptyFields('First name', firstname));
      errors.push(...checkForEmptyFields('Last name', lastname));
    }
    errors.push(...checkPatternedFields('Email address', email, emailRegex));
    errors.push(...checkPatternedFields('Password', password, passwordRegex));


    if (errors.length) {
      return res.jsend.error({
        message: 'Your request contain errors',
        data: errors
      });
    }
    return next();
  }
};
