const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const db = require("./models/workout");

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}!`);
});


// mongodb://<dbuser>:<dbpassword>@ds141613.mlab.com:41613/heroku_g4pq3n1v

// heroku_g4pq3n1v