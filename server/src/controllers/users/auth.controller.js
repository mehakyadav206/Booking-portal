const { registerUserDB, findUserByEmail } = require("../../services/users/auth.services");
const { generateToken } = require("../../utils");


const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.json({
            success: false,
            error: "All fields are required",
        });
    }

        try {
            const user = await registerUserDB({ name, email, password });
            return res.json({
                success: true,
                data: user,
                message: "User registered successfully!",
            });
        } catch (error) {
            if (error.code === 11000) {
                return res.json({
                    success: false,
                    error: "Email already exists",
                });
            }
        }
    
    return res.json({
        success: false,
        message: "User registration failed!",
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            error: "Email or password is required!",
        });
    }

    try {
        const user = await findUserByEmail(email);

        if (!user) {
            return res.json({
                success: false,
                error: "User doesn't exists",
            });
        };

        const {accessToken, refreshToken} = generateToken({
            id: user._id,
            name: user.name,
            password: user.password,
        });

        return res.json({
            success: true,
            message: "User logged in successfully!",
            data: {user, accessToken, refreshToken},
        });
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            error: "Something went wrong!",
        });
    }
};

module.exports = { register, login };