const mysql = require('mysql');
const inquirer = require("inquirer");
const addEmployee = require('./models/employee');


// create the connection information for the sql database
const connection = mysql.createConnection({
 host: 'localhost',
 port: 3306,
 user: 'root',
 password: 'password77',
 database: 'tracker_db'
});
// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

  function start() {
    inquirer.prompt({
      name: 'main',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['']
    })
    .then(function (answer){

      if(answer.main === 'View all employees'){
          viewEmployees(connection, start);
      } else if (answer.main === '')
    })
  }

module.exports = start;


  


