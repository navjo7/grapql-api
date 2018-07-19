require('./config/config')
require('./config/mongoose')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql')

//Later
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World..');
});

// GraphQL API
app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})))

app.listen(3000, () => {
  console.log('GraphQL server running at port 3000...')
})
