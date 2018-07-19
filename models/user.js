// import mongoose from 'mongoose';
// mongoose.Promise = Promise;

// const Schema = mongoose.Schema

// const userSchema = new Schema({
// 	email: {
// 		type: String,
// 		required: true,
// 		unique: true
// 	},
// 	name: {
// 	 	type: String,
// 		required: true
// 	}
// }, { collection: 'user', timestamps: true } );

const mongoose = require('mongoose')
// const validator = require('validator')


const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	email: {
		type: String,
		required: true,
		unique: true,
		// validate: {
		// 	validator: validator.isEmail,
		// 	message: '{VALUE} is not a valid email'
		// }
	},
	password: {
		type: String,
		required: true
	}
}, {
	collection: 'user',
	timestamps: true
})


module.exports =  mongoose.model('User', userSchema);
