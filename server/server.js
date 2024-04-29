const express = require("express");
const app = express();

const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
app.use(cors());
const PORT = process.env.PORT || 8001;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/pay", async (req, res) => {
  console.log(req.body.token);
  await Stripe.charges.create({
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  });
});
app.listen(PORT, () => {
  console.log(`THIS SERVER IS RUNNING ON: ${PORT}`);
});
