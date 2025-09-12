const User = require("../../models/user");

const registerUserDB = async ({ name, email, password }) => {
    const newUser = new User({ name, email, password });
    return await newUser.save();
};

const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

module.exports = { registerUserDB, findUserByEmail };