const inquirer = require('inquirer');


// ADD Role
function add_role(connection, start){
      inquirer.prompt([
          {
              name: 'Role_Title',
              type: 'input',
              message: 'What is the role title, you would like to add to'
          },
          {
              name: 'Department',
              type: 'input',
              message: 'What department would you like to add this job to?'
          },
          {
              name: 'Salary',
              type: 'input',
              message: 'What is the salary, you would like to add to?'
          }
      ])
      .then(function (answer){
        connection.query(`select * from department where name = ? `, answer.Department, (e, results)=>{
          let department_id = results[0].id;
        connection.query('insert into role (title, salary, department_id) values(?,?,?)', [answer.Role_Title, answer.Salary, department_id], (e, results)=>{
            if(e) throw e;
            console.table(results);
            console.log("Successfully Added!");
            start();
            })
        })

    });
}

module.exports = add_role;