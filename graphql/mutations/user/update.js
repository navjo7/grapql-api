
const graphql = require('graphql')
const {
	GraphQLNonNull,
	GraphQLID
} = require('graphql');

const {
	userType, userInputType
} = require('../../types/user')
const UserModel = require('../../../models/user')

module.exports =  {
	type: userType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(userInputType)
		}
	},
	resolve(root, params) {
		return UserModel.findByIdAndUpdate(
			params.id,
			{ $set: { ...params.data } },
			{ new: true }
		)
		.catch(err => new Error('Couldn\'t Update User data, ', err));
	}
}
