// view all employees in

function view_employee(connection, start){
     connection.query("SELECT * FROM employee", (err, results) => {
         if (err) throw err;

         console.table(results);
         start();
     })
}

module.exports = view_employee;