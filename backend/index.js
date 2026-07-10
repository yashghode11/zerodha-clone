const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./Routes/AuthRoute");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();

const PORT = process.env.PORT || 3003;
const uri = process.env.MONGO_URL;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://zerodha-frontend-3c7j.onrender.com",
      "https://zerodha-dashboard-y02o.onrender.com",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Zerodha backend is running",
  });
});

app.use("/auth", authRoute);

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    return res.status(200).json(allHoldings);
  } catch (error) {
    console.error("Holdings Error:", error);

    return res.status(500).json({
      success: false,
      message: "Error fetching holdings",
    });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    return res.status(200).json(allPositions);
  } catch (error) {
    console.error("Positions Error:", error);

    return res.status(500).json({
      success: false,
      message: "Error fetching positions",
    });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    return res.status(201).json({
      success: true,
      message: "Order saved successfully",
    });
  } catch (error) {
    console.error("Order Error:", error);

    return res.status(500).json({
      success: false,
      message: "Error saving order",
    });
  }
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });