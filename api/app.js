const express = require("express");

const app = express();


const port = 8000 || process.env.PORT;

app.get("/", (req, res) => {
    console.log("hello");
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
