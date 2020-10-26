// view all employees by Departments

function employeeByDepartment(connection, start){
    connection.query("SELECT employee.first_name, employee.last_name, department.name FROM employee INNER JOIN role ON role.id = employee.role_id INNER JOIN department ON department.id = role.department_id", function(err, results){
        if(err) throw err;

        console.table(results);
        start();
    })
}

module.exports = employeeByDepartment;