import mysql from 'mysql';

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "amandb",
  port: 3306
});

con.connect((err)=>{
  if (err) 
    throw err;
  console.log("Successfully Connected To MySQL Database!!!!");
});

export default con;


