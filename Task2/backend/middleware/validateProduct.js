const { body, validationResult } = require('express-validator');

const validateProduct = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is Required !!'),

  body('price')
    .isFloat({ gt: 0 })
    .withMessage('Price Must be Greater than 0'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateProduct;
