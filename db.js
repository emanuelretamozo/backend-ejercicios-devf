// get the client
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'vet',
  password: '12345678'
});


// simple query
const getUser = (data) => {
    return new Promise ((resolve, reject) => {
      connection.query("SELECT name FROM owners WHERE phone = 232", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };

  
// getUser().then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// });

  
 export default getUser;
