const userMutation = require('./user')
const postMutation = require('./post')
module.exports = {
  ...userMutation,
  ...postMutation
}
