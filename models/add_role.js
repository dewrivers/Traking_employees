const inquirer = require('inquirer');


// ADD Role
function add_role(connection, start){
      inquirer.prompt([
          {
              name: 'Role Title',
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
          connection.query('insert into department (name) values (?)', answer.department, (err, results)=>{

              if(err) throw err;
              connection.query(`select * from department where name = ? `, answer.department, (e, results)=>{
                  let department_id = results[0].id;
              connection.query('insert into roles (title, salary, department_id) values(?,?.?)', [answer.roleTitle, answer.salary, department_id], (e, results)=>{
                  if(e) throw e;
                  console.table(results);
                  start();
              })

            })

          });
      })
}

module.exports = add_role;