const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect(
  'mongodb://krunal:test123@ds135233.mlab.com:35233/gql-ninja-krunal'
);
mongoose.connection.once('open', () => {
  console.log('connected to the database');
});

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});
