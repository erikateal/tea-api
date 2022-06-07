const { response } = require('express');
const express = require('express');
const app = express() // allows us to use methods that come with express
const { tea } = require("./tea"); // links to the file w/ the tea object
const cors = require('cors'); // allows user to access from a local machine -- npm i cors --save
const PORT = process.env.PORT || 8000; // server will not always be on port 8000. User will use their own enviornment variable 

app.use(cors())

// what gets done when server hears our request
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (req, res) => {
    const teaName = req.params.name.toLowerCase();
    // square brackets allow us to account for spaces, unlike dot notation
    if(tea[teaName]){
        res.json(tea[teaName])
    } else {
        res.json(tea['unknown'])
    }
});

// allows the server to hear the request
app.listen(PORT, () =>{
    console.log(`The server is now running on port ${PORT} 🍵`);
});