const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost/ssearche');

const userSchema = mongoose.Schema({
	"username": String,
	"password": String,
	"user_email": String,
	"created_at": Date,
	"jobs": Array,
	"graphs": Array // id of the graphs
});

const graphsSchema = mongoose.Schema({
	"applications": Array,
	"application_status": Array,
	"offered_salaries": Array,
	"stages": Array,
	"self_reflection": Array,
});

const Users = mongoose.model('Users', userSchema);
const Graphs = mongoose.model('Graphs', graphsSchema);

// const saveUserInit = (userInput) => {
	
// }