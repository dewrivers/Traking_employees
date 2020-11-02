
// View All Roles
function view_role(connection, start) {
    connection.query("SELECT * FROM role", (err, results) => {
        if (err) throw err;
       
        console.table(results);
        start();
    })
}

module.exports = view_role;