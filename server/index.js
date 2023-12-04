const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
var escapeHtml = require("escape-html");
const welcomeRoute = require("./routes/welcomeRoute");
const RestaurantDataRoute  = require("./routes/RestaurantDataRoute.js")
app.use(express.json()); //convert all incoming requests to json
app.use(cors({ credentials: true })); //abiding by cors policy
app.use(
  cors({
    origin: "",
  })
);
app.use("/", welcomeRoute, RestaurantDataRoute);

app.listen(port, () => {
    console.log("Server started at port ", port);
});
