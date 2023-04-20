const db = require('../models/sqlModel');

const getFromDB = {};

getFromDB.functions = (req, res, next) => {

  const text = `select * from parsed_data where type = 'function'`;

  db.query(text)
  .then( result => {
    res.locals.funcs = result.rows;
    next();
  })
  .catch(err => {
    const message = 'error encountered in getFromDB.functions: \n' + err;
    next(message);
  })
}

module.exports = getFromDB;