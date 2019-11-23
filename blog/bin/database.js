var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let database = 'blog';
let port = '2699';
let host = 'localhost';
let uri = `mongodb://${host}:${port}/${database}`;

const connectDB = () => {
	mongoose
		.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
		.then(() => {
			console.log('The conection was succesfull.');
		})
		.catch(() => {
			console.log('An error has ocurred with the conection.');
		});
};

module.exports = {
	connectDB
}