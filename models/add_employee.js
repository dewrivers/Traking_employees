const inquirer = require('inquirer');

// Function to add employees

function add_employee(connection, start){
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is employee first_name?'  
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is employee last_name?'

        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What is the role of the employee?',
            choices: [
                'Sales Person',
                'Sales Manager',
                'Lead Engineer',
                'Software Engineer',
                'Accountant',
                'Legal Team Lead',
                'Lawyer'
            ]

        }
    ])
    .then(function(answer) {
        connection.query('SELECT title, id from role', function(err,results) {
            if (err) throw err;
            console.log(results);
            
            for (let i = 0; i < results.length; i++) {
                console.log('Comparing', results[i].title, 'to ', answer.role_id)
              
               if (results[i].title === answer.role_id) {
                   let roleId = results[i].id;

                   connection.query(
                    `Insert into employee (first_name, last_name, role_id) values (?,?,?)`,
                    [answer.first_name, answer.last_name, roleId],
                    (err, results)=>{
                        if(err) throw err;
                        console.log(results.affectedRow + 'employee inserted succesfully!\n');
                        start();
                    }
                   )
               }
                
            }
        });
    })

};

module.exports = add_employee;