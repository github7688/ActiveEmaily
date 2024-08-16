const express = require('express')
const keys = require("./config/keys");
const  mongoose  = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require("./models/users.model")
require('./services/passport')


const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to Database");
})
.catch(err => {
    console.error("Failed to connect to Database", err);
});


app.get('/', (req, res) =>{
    res.send("hi: pawan")
})

require("./routes/authRoutes")(app)


const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
    console.log(`server is listining on the port ${PORT}`);
})