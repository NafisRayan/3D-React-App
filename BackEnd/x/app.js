const app = require('express')();
const http = require('http').Server(app);


const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://vaugheu:123password456@3d-reactapp.jee3ue9.mongodb.net/?retryWrites=true&w=majority');

http.listen(3000, function(){

    console.log('Listening on *:3000');
});
