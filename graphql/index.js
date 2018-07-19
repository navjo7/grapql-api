const { builtinModules }  = require('module');

const graphql = require('graphql')
const {
	GraphQLObjectType,
	GraphQLSchema
} =require('graphql');

const mutations = require('./mutations')
const queries = require('./queries')

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: queries
	}),
	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: mutations
	})
});

module.exports = schema
