const express = require('express');
const app = express() // allows us to use methods that come with express
const { tea } = require("./tea");
const cors = require('cors');
const PORT = process.env.PORT || 8000;

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
    res.json(tea);
});

app.listen(PORT, () =>{
    console.log(`The server is now running on port ${PORT} 🍵`);
});