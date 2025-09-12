const CarService = require("../models/car");

// Create new service
async function createService(data) {
  const newService = new CarService(data);
  return await newService.save();
}

// Get all services
async function getAllServices() {
  return await CarService.find();
}

// Get service by ID
async function getServiceById(id) {
  return await CarService.findById(id);
}

// Update service
async function updateService(id, data) {
  return await CarService.findByIdAndUpdate(id, data, { new: true });
}

// Delete service
async function deleteService(id) {
  return await CarService.findByIdAndDelete(id);
}

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};