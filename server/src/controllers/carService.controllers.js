const carServiceService = require("../services/carServiceServices");

// Create new service
const createService = async (req, res) => {
  try {
    const newService = await carServiceService.createService(req.body);
    res.status(201).json(newService);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all services
const getAllServices = async (req, res) => {
  try {
    const services = await carServiceService.getAllServices();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get service by ID
const getServiceById = async (req, res) => {
  try {
    const service = await carServiceService.getServiceById(req.params.id);
    if (!service) return res.status(404).json({ error: "Service not found" });
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update service
const updateService = async (req, res) => {
  try {
    const updated = await carServiceService.updateService(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete service
const deleteService = async (req, res) => {
  try {
    await carServiceService.deleteService(req.params.id);
    res.json({ message: "Service deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};