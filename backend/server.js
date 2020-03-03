const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb+srv://vennela:vennela@cluster0-2wzvk.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => console.log('connection successful'))
  .catch((err) => console.log(err));

const apiRouter = require('./routes/routes');
server.use('/api', apiRouter);

server.listen(3000, () => {
  console.log('Server 3000 started!')
});
