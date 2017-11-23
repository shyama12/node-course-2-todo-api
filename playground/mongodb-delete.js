// const MongoClient = require('mongodb').MongoClient;


//object destructuring
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db)=> {
if (err) {
	return console.log('Unable to connect to mongodb server');

}
	console.log('Connected to mongodb server');
	
	//delete many
	/*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{console.log(result);},(err)=>{console.log('Error in deletion: '+err);});*/


	//deleteone
	/*db.collection('Todos').deleteOne({text: "eat"}).then((res)=>{
console.log(res);
	});*/

	//findoneanddelete
	/*db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
		console.log(res);
	});*/

	/*db.collection('Users').deleteMany({name: "Shyama"}).then((res)=>{
		console.log(res);
	});*/

	db.collection('Users').findOneAndDelete({_id: new ObjectID('5a159bd70bffb4007877e86e')}).then((res)=>{
		console.log(res);
	});
	/*db.close();*/

});