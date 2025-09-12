const jwt = require("jsonwebtoken");

const generateToken = (data) => {
    const accessToken = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "30d" });
    const refreshToken = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "30d" });
    return { accessToken, refreshToken };
};

module.exports = { generateToken };