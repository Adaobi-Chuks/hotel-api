const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const constants = require("./constants/constants");
const database = require("./db/database");
const roomTypeRoutes = require("./routes/roomTypesRoutes");
const roomRoutes = require("./routes/roomRoutes");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });
app.use("/api/v1/rooms-types", roomTypeRoutes);
app.use("/api/v1/rooms", roomRoutes);

app.listen(PORT, () => {
    database();
    console.log(`Server started on port: ${PORT}`);
});
