import validationHelpers from '../utilities/validationHelpers';
import { emailRegex, passwordRegex, descriptionRegex } from '../utilities/regexen';

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
  },
  inventory: (req, res, next) => {
    const errors = [];
    const { category, name, description } = req.body;
    
    errors.push(...checkForEmptyFields('Category', category));
    errors.push(...checkForEmptyFields('Name', name));
    errors.push(...checkPatternedFields('Description', description, descriptionRegex));

    if (errors.length) {
      return res.jsend.error({
        message: 'Your request contain errors',
        data: errors
      });
    }
    return next();
  },
  checkInventoryParams: (req, res, next) => {
    const { params: { inventoryId } } = req;
    const parsedNumber = parseInt(inventoryId, 10);
    const isInter = Number.isInteger(parsedNumber);
    const isGreaterThanZero = parsedNumber > 0;
  
    if (isInter && isGreaterThanZero) return next();
    return res.jsend.error('Inventory ID must be an integer greater than zero');
  }
};
