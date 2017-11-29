const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = '5a1e8442fba9eeec3a8de996';

/*if (!ObjectID.isValid(id)) {
	console.log('Id is not valid');
}*/

/*Todo.find({
	_id: id
}).then((todos)=>{
	console.log('Todos',todos);
});

Todo.findOne({
	_id: id
}).then((todo)=>{
	console.log('Todo',todo);
});*/

/*Todo.findById(id).then((todo)=>{
	if (!todo) {
		return console.log('Id not found');
	}
	console.log('Todo by Id',todo);
}).catch((e)=>console.log(e));*/

User.findById('5a16cd94c5ea0b8411884c2c').then((user)=>{
	if (!user) {
		console.log('Could not find user');
	}
	console.log(user);
}).catch((e)=>console.log(e));