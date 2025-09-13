const { createCarDetailsDB } = require("../../services/users/car.services");

const getCarDetails = () => {

};

const createCarDetails = async (req,res) => {
    const body = req.body;
    try {
        const data = await createCarDetailsDB(body);
        if(!data) {
            return res.json({
                success: false,
                error: "Car detail not created!",
            });
        }
        return res.json({
            success: true,
            message: "Car detail created!",
            data: data,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            error: "Something went wrong!",
        });
    }
}

module.exports = { getCarDetails, createCarDetails };