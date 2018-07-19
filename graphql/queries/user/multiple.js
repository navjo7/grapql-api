const graphql = require('graphql')
const {userType} = require('../../types/user')
const userModel = require('../../../models/user')
const {
	GraphQLList
}  = require('graphql')

module.exports =  {
	type: new GraphQLList(userType),
	resolve() {
		const users = userModel.find().exec()
		if (!users) {
			throw new Error('Error getting users')
		}
		return users
	}
}
