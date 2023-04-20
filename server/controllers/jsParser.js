const db = require('../models/sqlModel');

const jsParser = {};

jsParser.parse = (req, res, next) => {
  
  const newLine = req.body.row;
  const { id, line, name, type, parent, value } = req.body;

  const text = `INSERT INTO parsed_data (id, line, name, type, parent, value)
  VALUES ($1,$2,$3,$4,$5,$6);`

  db.query(text, [id, line, name, type, parent, value])
  .then (result => {
    res.locals.db = result.rows;
    next();
  })
  .catch(err => {
    console.log('error in parser.parse.js: \n', err);
    next(err);
  })


}

module.exports = jsParser;