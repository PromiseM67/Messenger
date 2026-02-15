require('dotenv').config({ quiet: true }); //load environment variables from .env file
const { Server } = require("socket.io");
const express = require('express'); //import express
const path = require('path'); //import path module
const app = express(); //initialize express
const PORT = process.env.PORT || 10000; //get port from environment variables
const __dirnameresolved = path.resolve(); //__dirname is a global variable that returns the directory name of the current module
app.use(express.static(path.join(__dirnameresolved, 'public'))); //serve static files from the public directory
app.use('/public', express.static(path.join(__dirnameresolved, 'public')));
app.use(express.json()); //parse JSON request bodies

let messages = []; //array to store messages

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirnameresolved, 'public/html', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})






