"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventWrapper = eventWrapper;

var _dom = require("../../../pre-bundled/node_modules/@testing-library/dom");

function eventWrapper(cb) {
  let result;
  (0, _dom.getConfig)().eventWrapper(() => {
    result = cb();
  });
  return result;
}