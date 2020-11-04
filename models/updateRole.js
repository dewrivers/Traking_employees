const inquirer = require('inquirer');

listOfEmployees = [];
listOfRoles = [];

function updateRole(connection, start){
    connection.query('Select * From employee', (err, res) => {
        for (let i = 0; i < res.length; i++) {
            listOfEmployees.push({name: res[i].first_name + ' ' + res[i].last_name, value: res[i].id});
            if(err) throw  err;
        }
            connection.query('Select * From role', (err, resRole) => {
                for (let i = 0; i < res.length; i++){
                    listOfRoles.push({name: res[i].title, value: res[i].id })

                    if (err) throw err;
                }

                inquirer.prompt([
                    {
                       name: 'employee',
                       type: 'list',
                       message: 'What is the employee role, you would like to update?',
                       choices: listOfEmployees
                    },
                    {
                        name: 'role',
                        type: 'list',
                        message: 'Which is the new role?',
                        choices: listOfRoles
                    }
                ])
                .then((answer) => {
                    console.log([
                        answer.role,
                        answer.employee
                    ])
                    connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [answer.role, answer.employee], (err, results)=>{
                        if (err) throw err;
                        console.log('Employee role succesfully updated!\n');
                        //console.log(results.affected_rows + 'employee inserted succesfully!\n');
                        start();
                    })
                })
            })
            
        }
    )
}

module.exports = updateRole;