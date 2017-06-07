'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _resources = require('../resolvers/resources.gql');

var resources = _interopRequireWildcard(_resources);

var _locations = require('../resolvers/locations.gql');

var locations = _interopRequireWildcard(_locations);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootTypeDefs = '\n  type Viewer {\n    resources: [Resource]\n    locations: [Location]\n  }\n\n  type Query {\n    viewer: Viewer\n  }\n\n  schema {\n    query: Query\n  }\n';

var rootResolver = {
  Query: {
    viewer: function viewer() {
      return {};
    }
  }
};

var resolvers = _deepmerge2.default.all([rootResolver, resources.resolvers, locations.resolvers]);

var schema = {
  typeDefs: [rootTypeDefs, resources.typeDefs, locations.typeDefs],
  resolvers: resolvers
};

exports.default = (0, _graphqlTools.makeExecutableSchema)(schema

// const rootTypeDefs = `
//   type Viewer {
//     foo: String
//   }
//
//   type Query {
//     viewer: Viewer
//     resources: [Resource]
//   }
//
//   schema {
//     query: Query
//   }
// `
);