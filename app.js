const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');

const router = require ('./Router/Index') 
const app = express ();

const port = process.env.PORT || 1993;
const hostname = '0.0.0.0/0';
//const dbUrl = 'mongodb://localhost:27017/ZomatoClone';
const atlasdbUrl = 'mongodb+srv://ZomatoClone_user:FxLJEm8O60zwu1bi@cluster0.vvyyv.mongodb.net/TestDB?retryWrites=true&w=majority'

//CORS- cross origin resource sharing
app.use (cors());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
//this is another middleware package besides express.json
//when frontend and backend run on two different port nnumbers
//and normally resources are not allowed to share hence CORS
// above line statement is used to overcome this problem

app.use (express.json());
app.use ('/', router);


mongoose.connect (atlasdbUrl, {
     useNewUrlParser: true, useUnifiedTopology: true
})
    .then (res => {
        app.listen (port, () => {
            console.log (`\n Server is Successfully running at ${hostname} : ${port}\n`)
        } );
    })

    .catch ( err => console.log (err));



