const express = require('express');
const path = require('path');
const app = express(); //define app

// '/' is our home page, no extended file
app.get('/', function (req, res) {
    //response is sending file path:
    //__dirname is our current directory
    //../index.html our current html file
    //Users/carlotta/devMountain/lectures/deployment-demo/server/index.js
    res.sendFile(path.join(__dirname, '../index.html'));
})

const port = process.env.PORT || 4005;

app.listen(port, () => { console.log(`Avengers assemble on PORT ${port}`) });