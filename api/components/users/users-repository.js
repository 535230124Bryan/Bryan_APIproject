const { errorTypes } = require('../../../core/errors');
const { User } = require('../../../models');

/**
 * Get a list of users
 * @returns {Promise}
 */
async function getUsers() {
  return User.find({});
}

/**
 * Get user detail
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function getUser(id) {
  return User.findById(id);
}

/**
 * Create new user
 * @param {string} name - Name
 * @param {string} email - Email
 * @param {string} password - Hashed password
 * @returns {Promise}
 */
async function createUser(name, email, password) {
  try {
    const sudahTerdaftar = await User.checkEmail({ email });
    if (sudahTerdaftar) {
      console.log(Sorry, EMAIL_ALREADY_TAKEN);
      error.status = 409;
      throw error;
    }
    return User.create({ name, email, password });
  } catch (error) {
    throw error;
  }
}
/**
 * Update existing user
 * @param {string} id - User ID
 * @param {string} name - Name
 * @param {string} email - Email
 * @returns {Promise}
 */
async function updateUser(id, name, email) {
  const sudahTerdaftar = await User.findOne({ email });
  if (sudahTerdaftar && sudahTerdaftar._id.toString() !== id) {
    console.log(Sorry, EMAIL_ALREADY_TAKEN);
    error.status = 409;
    throw error;
  }

  return User.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name,
        email,
      },
    }
  );
}

/**
 * Delete a user
 * @param {string} id - User ID
 * @returns {Promise}
 */

async function deleteUser(id) {
  return User.deleteOne({ _id: id });
}
/**
 * @param {string} email
 * @param {string}
 * @returns {Promise<boolean>}
 */

/**
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @param {string} id
 */

async function checkEmail(email) {
  try {
    const sudahTerdaftar = await User.findOne({ email });
    if (sudahTerdaftar) {
      console.log('EMAIL ALREADY REGISTRED');
      error.status = 409;
      throw error;
    }

    return User.create({ name, email, password });
  } catch (error) {
    return next(error);
  }
}

async function updatePass(id, password) {
  return User.updateOne(
    { _id: id },
    {
      $set: { password },
    }
  );
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  updatePass,
  deleteUser,
  checkEmail,
};
