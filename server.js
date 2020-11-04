//const mysql = require('mysql');
const inquirer = require("inquirer");
const connection = require("./db/connection");
const add_employee = require('./models/add_employee');
const add_role = require('./models/add_role');
const employeeByDepartment = require('./models/employeeByDepartment');
const updateRole = require('./models/updateRole');
const view_employee = require('./models/view_employee');
const view_role = require('./models/view_role');
const remove_employee = require('./models/remove_employee');

//connect to the mysql server and sql database
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
      choices: [
        'View all Employees',
        'View all Employees by Department',
        'View all Roles',
        'Add New Employee',
        'Add New Role',
        'Update Employee Role',
        'Remove Employee',
        
      ]
    })
    .then(function (answer) {
      // based on their answer, choose from the following
      if (answer.main === "View all Employees") {
          view_employee(connection, start);
      } else if (answer.main === "View all Employees by Department") {
          employeeByDepartment(connection, start);
      } else if (answer.main === "Add New Employee") {
          add_employee(connection, start);
      } else if (answer.main === "Update Employee Role") {
          updateRole(connection, start);
      } 
      else if (answer.main === "View all Roles") {
          view_role(connection, start);
      } else if (answer.main === "Add New Role") {
          add_role(connection, start);
      } else if(answer.main === 'Remove Employee') {
         remove_employee(connection, start);
      }else {
          connection.end();
      }
  });
  }

module.exports = start;


  


