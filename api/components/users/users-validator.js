const joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      confirmPassword: joi
        .string()
        .min(6)
        .max(32)
        .required()
        .label('confirm Password'),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  changePassword: {
    body: {
      oldPassword: joi.string().min(6).max(32).required().label('old password'),
      newPassword: joi.string().min(6).max(32).required().label('new password'),
      confirmPassword: joi
        .string()
        .min(6)
        .max(32)
        .required()
        .label('confirm password'),
    },
  },
};
