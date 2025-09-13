require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const authRoutes = require("./src/routes/auth.routes");
const userRoutes = require("./src/routes/users/index");

const app = express();
const port = 4000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello server!");
});

app.use("/auth", authRoutes);

app.use("/user", userRoutes);

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});