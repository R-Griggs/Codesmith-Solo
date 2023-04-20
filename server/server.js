const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

//middleware
const jsParser = require('./controllers/jsParser');
const getFromDB = require('./controllers/getFromDB');

//parse request body
app.use(express.json());

// statically serve contents of build folder
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on get request to localhost
app.get('/', (req,res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.post('/parser', jsParser.parse, (req, res, next) => {
  return res.status(201).json(res.locals.newLine);
});

app.get('/functions', getFromDB.functions, (req, res, next) => {
  return res.status(200).json(res.locals.funcs);
});

app.listen(PORT);