const Car = require("../../models/car");

const getCarDetailsDB = () => {

};

const createCarDetailsDB = async (body) => {
    const carDetails = new Car(body);
    return (await carDetails.save()).populate("userId");
}

module.exports = { getCarDetailsDB, createCarDetailsDB };