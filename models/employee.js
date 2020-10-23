const inquirer = require('inquirer');

// Function to add employees

function employee(connection, start){
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
            choices: []

        }
    ])
    .then(function(answer) {
        connection.query('Select title, id from role', function(err,result) {
            if (err) throw err;
            console.log(result);
            
            for (let i = 0; i < result.length; i++) {
                console.log('Comparing', result[i].title, 'to ', answer.role_id)
              
               if (results[i].title === response.role_id) {
                   let roleId = results[i].id;

                   connection.query(
                    `Insert into employee (first_name, last_name, role_id) values (?,?,?)`,
                    [answer.first_name, answer.last_name, roleId],
                    (e, results)=>{
                        if(e) throw new Error
                        console.log(results.affected_rows + 'employee inserted succesfully!\n');
                        start();
                    }
                   )
               }
                
            }
        });
    })

};

module.exports = employee;