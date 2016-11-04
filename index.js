"use strict";

module.exports = function(expressMiddleware) {
  return function(socket, next) {
    return expressMiddleware(socket.request, socket.request.res, next);
  }
};
