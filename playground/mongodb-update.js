// const MongoClient = require('mongodb').MongoClient;


//object destructuring
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db)=> {
if (err) {
	return console.log('Unable to connect to mongodb server');

}
	console.log('Connected to mongodb server');
	
	/*db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5a16a8b8bd790ba760c57bf8')
	}, {
		$set: {
			completed : true
		}
	},{
		returnOriginal : false
	}).then((res)=>{
		console.log(res);
	});*/

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5a158bf38cb4763640434455')
	}, {
		$set: {
			name : "Shyama"
		},
		$inc: {
			age:1
		}
	},{
		returnOriginal : false
	}).then((res)=>{
		console.log(res);
	});


	/*db.close();*/

});