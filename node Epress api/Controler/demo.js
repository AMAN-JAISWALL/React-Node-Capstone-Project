const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'your_host',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

// Update query
const query = `UPDATE your_table SET column1 = ?, column2 = ? WHERE id = ?`;
const values = ['new_value1', 'new_value2', 1]; // Replace with your actual values

connection.query(query, values, (error, results, fields) => {
  if (error) {
    console.error('Error performing update query:', error);
  } else {
    console.log('Update query executed successfully');
    console.log('Affected rows:', results.affectedRows);
  }
});

// Close the connection
connection.end();

