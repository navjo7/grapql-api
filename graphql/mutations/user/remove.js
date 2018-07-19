const graphql = require('graphql')
const {
	GraphQLNonNull,
	GraphQLID
} = require('graphql');

const {
	postType
} = require('../../types/post')
const UserModel = require('../../../models/post')


module.exports= {
	type: postType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		const removeduser = UserModel.findByIdAndRemove(params.id).exec();
		if (!removeduser) {
			throw new Error('Error removing user')
		}
		return removeduser;
	}
}
