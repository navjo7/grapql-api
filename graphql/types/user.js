const graphql = require('graphql')
const {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList
} = require('graphql');


const PostModel = require('../../models/post');
const { postType }  = require('./post');

exports.userType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		email: {
			type: GraphQLString
		},
    name: {
      type: GraphQLString
    },
    posts: {
			type: new GraphQLList(postType),
			resolve(user) {
				const { _id } = user
				return PostModel.find({ uid: _id }).exec()
			}
		},
	})
})


exports.userInputType = new GraphQLInputObjectType({
	name: 'UserInput',
	fields: () => ({
		email: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		}
	})
})
