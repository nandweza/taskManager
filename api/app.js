const express = require("express");

const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const taskRoute = require("./routes/task");

const port = 8000 || process.env.PORT;
dotenv.config();

mongoose.connect("mongodb://localhost:27017/taskManagerDB", {
    useNewUrlParser: true
})
.then(() => console.log("DB Connected Successfully"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/task/", taskRoute);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
