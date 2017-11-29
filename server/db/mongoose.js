var mongoose = require('mongoose');

mongoose.Promise = global.Promise;


//got the mlab url by creating a db in mblab website after creating an account
mongoose.connect("mongodb://localhost:27017/TodoApp" || "mongodb://shyama12:munnu@ds123926.mlab.com:23926/node-todos-app-db");

module.exports = {
	mongoose
};