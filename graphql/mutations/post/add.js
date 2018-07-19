const graphql = require('graphql')
const {
	GraphQLNonNull,
}  =  require('graphql');

const {
	postType,
	postInputType
} = require('../../types/post')
const PostModel = require('../../../models/post')
module.exports = {
	type: postType,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(postInputType)
		}
	},
	resolve(root, params) {
		const pModel = new PostModel(params.data);
		const newPost = pModel.save();
		if (!newPost) {
			throw new Error('Error adding post');
		}
		return newPost
	}
}
