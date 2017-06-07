'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _schema = require('./data/schema');

var _schema2 = _interopRequireDefault(_schema);

var _graphqlServerExpress = require('graphql-server-express');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.use('/graphql', _bodyParser2.default.json(), (0, _graphqlServerExpress.graphqlExpress)({
  schema: _schema2.default,
  context: {}
}));

server.use('/graphiql', (0, _graphqlServerExpress.graphiqlExpress)({
  endpointURL: '/graphql'
}));

server.use(_bodyParser2.default.json());
server.use(_express2.default.static('public'));

module.exports = server;