const express = require('express')
const port = 8000
const app = express()
var cors = require('cors');

// cors (secure cross-origin requests)
var corsOptions = {
    origin: '*',
}
app.use(cors(corsOptions));


app.get('/', (req,res) => {
    res.send("My Nodejs server...");
})

app.listen(port, function(err){
    if(err) {console.log("error"); return;}
    console.log(`running server on port: ${port}`);
});