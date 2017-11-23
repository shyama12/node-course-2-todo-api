// const MongoClient = require('mongodb').MongoClient;


//object destructuring
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db)=> {
if (err) {
	return console.log('Unable to connect to mongodb server');

}
	console.log('Connected to mongodb server');

	/*db.collection('Todos').insertOne({
		text: "Something to do",
		completed: false
	}, (err, result)=> {
		if (err) {
			return console.log('Unable to insert to Todos',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});*/


	//name, age, location

	/*db.collection('Users').insertOne({

		name: 'Shyama',
		age: 29,
		location: 'Oslo'
	}, (err, result)=> {
		if (err) {
			return console.log('unable to insert into Users',err);
		}



		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
	});*/

	db.close();

});