const express = require('express')
const server = express()
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://jagruthi6:<Infy@@19>@cluster0-8fknu.mongodb.net/test?retryWrites=true&w=majority')
.then(() => console.log('connection successful'))
.catch((err) => console.log(err));

const apiRouter = require('./Routes/route');
app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('Server 3000 started!')
})
