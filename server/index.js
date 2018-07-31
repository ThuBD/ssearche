const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database');
const faker = require('faker');

let port = 2803;
let app = express();

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// db.saveUserInit({username: 'ansonao',
//               password: 'ansonaoisawesome',
//               email: 'ansonao10@gmail.com'
//             });
// db.saveUserInit({username: 'jaebae',
//               password: 'jaebaeisbae',
//               email: 'jaebae1111@gmail.com'
//             });
// db.saveUserInit({username: 'thunyugen',
//               password: 'thuisthumuch',
//               email: 'alilthumuch@gmail.com'
//             });
var username;
for (let i = 0; i < 3; i++) {
  if (i === 0) {
    username = 'ansonao';
  } else if (i === 1) {
    username = 'jaebae';
  } else {
    username = 'thunyugen';
  }
  db.getUserId(username, console.log);
  // db.getUserId(username);
  db.saveJob(username, {company_name: 'Google', position: 'Software Engineer', location: 'Mountain View'});
}




app.listen(port, function() {
	console.log(`Connecting to ThuBD on port ${port}`);
})