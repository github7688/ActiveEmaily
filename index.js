const express = require('express')
const app = express();

app.get('/', (req, res) =>{
    res.send("hi: pawan")
})

app.listen(5000, () =>{
    console.log(`server is listining on the port 5000`);
})