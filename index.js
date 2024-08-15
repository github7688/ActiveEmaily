const express = require('express')
const app = express();

app.get('/', (req, res) =>{
    res.send("hi: pawan")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
    console.log(`server is listining on the port ${PORT}`);
})