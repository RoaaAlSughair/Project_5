
const connection =require('./../../../db/db');


const Register = (req, res) => {
    const query = `INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?,?)`;
    const data = [req.body.firstName, req.body.lastName, req.body.email,req.body.password ] 

    connection.query(query, data, (err, results) => {
		if(err) throw err;
	res.json(results);

	  });
  };
  
  module.exports = {
    Register,
  };