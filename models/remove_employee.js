const inquirer = require('inquirer');
 
 // This Function Removes an employee from the Database
 function remove_employee(connection, start) {
     inquirer.prompt([
        {
          name: 'first_name',
          type: 'input',
          message: 'Name of the employee you want to remove?'
        },
        {
          name: 'employee_id',
          type: 'input',
          message: 'What is the Employee ID?'
        }    
      ])
      .then(function(answer) {    
                
      connection.query(
        "DELETE FROM employee WHERE ?",
              {          
                 first_name: answer.first_name      
              },
            function(err) {
              if (err) throw err;
               console.log("Employee deleted successfully!");
               start();
                
              });
           });  
      };
    

module.exports = remove_employee;      