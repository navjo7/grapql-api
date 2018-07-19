const graphql = require('graphql')
const {
	userType
} = require('../../types/user')
const userModel = require('../../../models/user')
const {
	GraphQLList,
	GraphQLID,
	GraphQLNonNull
} = require('graphql')

module.exports = {
	type: userType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		return userModel.findById(params.id).exec();
	}
}
