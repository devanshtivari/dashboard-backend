const express = require('express');
cors = require('cors');
const connectDB = require('./db/db');
const routes = require("./routes/dashboard");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.get("/hello" , (req,res) => {
    res.send("hello")
})

app.use("/",routes);

app.listen(process.env.PORT || 5000, console.log("server started successfully. Refer to http://localhost:5000"));

module.exports = app;