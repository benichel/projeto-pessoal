"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = connect;
Object.defineProperty(exports, "BulkLoad", {
  enumerable: true,
  get: function () {
    return _bulkLoad.default;
  }
});
Object.defineProperty(exports, "Connection", {
  enumerable: true,
  get: function () {
    return _connection.default;
  }
});
Object.defineProperty(exports, "Request", {
  enumerable: true,
  get: function () {
    return _request.default;
  }
});
Object.defineProperty(exports, "ConnectionError", {
  enumerable: true,
  get: function () {
    return _errors.ConnectionError;
  }
});
Object.defineProperty(exports, "RequestError", {
  enumerable: true,
  get: function () {
    return _errors.RequestError;
  }
});
Object.defineProperty(exports, "TYPES", {
  enumerable: true,
  get: function () {
    return _dataType.TYPES;
  }
});
Object.defineProperty(exports, "ISOLATION_LEVEL", {
  enumerable: true,
  get: function () {
    return _transaction.ISOLATION_LEVEL;
  }
});
Object.defineProperty(exports, "TDS_VERSION", {
  enumerable: true,
  get: function () {
    return _tdsVersions.versions;
  }
});
exports.library = void 0;

var _bulkLoad = _interopRequireDefault(require("./bulk-load"));

var _connection = _interopRequireDefault(require("./connection"));

var _request = _interopRequireDefault(require("./request"));

var _library = require("./library");

var _errors = require("./errors");

var _dataType = require("./data-type");

var _transaction = require("./transaction");

var _tdsVersions = require("./tds-versions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const library = {
  name: _library.name
};
exports.library = library;

function connect(config, connectListener) {
  const connection = new _connection.default(config);
  connection.connect(connectListener);
  return connection;
}