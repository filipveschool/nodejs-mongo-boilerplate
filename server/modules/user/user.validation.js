const Joi = require('joi');

module.exports = {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      // mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
      // mobileNumber: Joi.string().regex(/^[0-9][0-9]{10}$/).required()
      mobileNumber: Joi.string().regex(/^((\+|00)32\s?|0)4(60|[789]\d)(\s?\d{2}){3}$/).required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      // mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
      mobileNumber: Joi.string().regex(/^((\+|00)32\s?|0)4(60|[789]\d)(\s?\d{2}){3}$/).required()
    },
    params: {
      // userId: Joi.string().hex().required()
      userId: Joi.string().required()
    }
  },

};
