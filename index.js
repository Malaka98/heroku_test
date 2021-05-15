const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(process.env.PORT || 4000, () => {
    console.log("Server start");
});