require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const userRoutes = require("./src/routes/users/auth.routes");
const carServiceRoutes = require("./src/routes/carService.routes");

const app = express();
const port = 4000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello server!");
});

app.use("/services", carServiceRoutes);

app.use("/auth", userRoutes);

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});