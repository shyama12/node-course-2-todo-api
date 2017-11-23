// const MongoClient = require('mongodb').MongoClient;


//object destructuring
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db)=> {
if (err) {
	return console.log('Unable to connect to mongodb server');

}
	console.log('Connected to mongodb server');
	
	/*db.collection('Todos').find({
		_id: new ObjectID('5a159ebed98e41c48241f06e')
	}).toArray().then((docs)=>{
			console.log('ToDos');
			console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('Unable to fetch Todos ', err);
	});*/

	/*db.collection('Todos').find().count().then((count)=>{
			console.log('ToDos');
			console.log('ToDos Count: '+count);
	},(err)=>{
		console.log('Unable to fetch Todos ', err);
	});*/

	/*var cursor = db.collection('Todos').find();

	cursor.each((err,item)=>{
		if (err) { return console.log(err);}
		cursor.toArray().then( (item)=>{console.log(item);} , (err)=>{console.log('Error ',err);});
	});*/


	db.collection('Users').find({name:"Shyama"}).toArray().then((docs)=>{console.log(JSON.stringify(docs,undefined,2));},(err)=>{console.log('Error: '+err);});

	/*db.close();*/

});