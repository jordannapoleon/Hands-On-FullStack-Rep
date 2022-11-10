const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const config = require('./config')[process.env.NODE_ENV||"dev"];
const client = new Client ({connectionString: config.connectionString})
client.connect();

const app = express();
const PORT = config.port;
app.use(cors());
app.use(express.json());


app.get(`/`, (req,res) =>{
    res.send("hello world");
})

app.get(`/api/cars`, (req,res, next) =>{


    client.query(`SELECT * FROM Vehicle`)
        .then(result => {
            res.send(result)
        })
        .catch (e => console.error(e.stack))
    

})



app.listen(PORT, () => {                         //Server On
    console.log(`listening on port: ${PORT}`)
});
