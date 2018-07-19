const graphql = require('graphql')
const {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} = require('graphql');

exports.postType = new GraphQLObjectType({
	name: 'Post',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
    uid: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
    body: {
      type: GraphQLString
    }
	})
})


exports.postInputType = new GraphQLInputObjectType({
	name: 'PostInput',
	fields: () => ({
    uid: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
		body: {
			type: GraphQLString
		},
	})
})
