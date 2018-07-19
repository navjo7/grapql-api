const graphql = require('graphql')
const {
	GraphQLNonNull,
} = require('graphql');

const {
	userType,
	userInputType
} = require('../../types/user')
const UserModel = require('../../../models/user')

module.exports = {
	type: userType,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(userInputType)
		}
	},
	resolve(root, params) {
		const uModel = new UserModel(params.data);
		const newUser = uModel.save();
		if (!newUser) {
			throw new Error('Error adding user');
		}
		return newUser
	}
}
