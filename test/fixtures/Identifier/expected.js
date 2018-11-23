'use strict';

var _powerAssertConfig = ["assert(value, [message])", "assert.ok(value, [message])", "assert.equal(actual, expected, [message])", "assert.notEqual(actual, expected, [message])", "assert.strictEqual(actual, expected, [message])", "assert.notStrictEqual(actual, expected, [message])", { pattern: "assert.deepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }],
    _am = {
  content: "assert(falsyStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 3
},
    _ArgumentRecorder = function () { function ArgumentRecorder(callee, am, ag) { this._callee = callee; this._metadata = am; this._argDef = ag; this._logs = []; this._recorded = null; this._value = null; this._isBlock = false; if (am.config) { var argconf = am.config.args[ag.index]; this._isBlock = !!argconf.block; } } ArgumentRecorder.prototype.metadata = function metadata() { return this._metadata; }; ArgumentRecorder.prototype.code = function code() { return this._argDef.code; }; ArgumentRecorder.prototype.value = function value() { return this._value; }; ArgumentRecorder.prototype._tap = function _tap(value, espath) { this._logs.push({ value: wrap(value), espath: espath }); return value; }; ArgumentRecorder.prototype._rec = function _rec(value, espath) { var log = { value: wrap(value), espath: espath }; this._logs.push(log); if (this._isBlock && this._callee && this._callee._empowered && typeof value === 'function') { value = new Proxy(value, { apply: function (target, thisArg, argumentsList) { var ret; try { ret = target.apply(thisArg, argumentsList); log.value = wrap(ret); } catch (e) { log.value = e; throw e; } return ret; } }); } this._value = value; this._recorded = { value: value, logs: [].concat(this._logs) }; this._logs = []; if (this._callee && this._callee._empowered) { return this; } else { return value; } }; ArgumentRecorder.prototype.eject = function eject() { var result = this._recorded; this._recorded = null; this._value = null; return result; }; function isPromiseLike(o) { return o !== null && typeof o === 'object' && typeof o.then === 'function' && typeof o.catch === 'function'; } function $Promise$(prms) { this.status = 'pending'; prms.then(mark(this, 'resolved'), mark(this, 'rejected')); } function mark(_this, s) { return function () { var args = Array.prototype.slice.apply(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; } function wrap(v) { return isPromiseLike(v) ? new $Promise$(v) : v; } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am, {
  espath: "arguments/0",
  code: "falsyStr",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _AssertionMessage = function () { function AssertionMessage(argRecs, metadata, message) { this._argRecs = argRecs; this._metadata = metadata; this._message = message; } AssertionMessage.prototype.value = function value() { if (this._message && typeof this._message.value === 'function') { return this._message.value(); } else { return this._message; } }; AssertionMessage.prototype.eject = function eject() { if (this._message && typeof this._message.eject === 'function') { return this._message.eject(); } else { return { value: this.value(), logs: [] }; } }; AssertionMessage.prototype.toString = function toString() { var message = this._message ? this._message : ''; message += '\n----------'; message += '\n  code: ' + this._metadata.content; message += '\n  line: ' + this._metadata.filepath + ':' + this._metadata.line; var argRec; for (var i = 0; i < this._argRecs.length; i += 1) { argRec = this._argRecs[i]; message += '\n  arg' + i + ': '; message += '\n    code: ' + argRec.code(); message += '\n    value: ' + argRec.value(); message += '\n    type: ' + typeof argRec.value(); } message += '\n'; message += '[NOTICE] configure power-assert for more verbose report. see: https://github.com/power-assert-js/power-assert'; message += '\n----------'; return message; }; return AssertionMessage; }(),
    _am2 = {
  content: "assert(falsyStr, messageStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 5
},
    _ag2 = new _ArgumentRecorder(assert, _am2, {
  espath: "arguments/0",
  code: "falsyStr",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _ag3 = new _ArgumentRecorder(assert, _am2, {
  espath: "arguments/1",
  code: "messageStr",
  index: 1,
  name: "message",
  kind: "optional"
}),
    _am3 = {
  content: "assert.equal(str, anotherStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 7,
  config: _powerAssertConfig[2]
},
    _ag4 = new _ArgumentRecorder(assert.equal, _am3, {
  espath: "arguments/0",
  code: "str",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag5 = new _ArgumentRecorder(assert.equal, _am3, {
  espath: "arguments/1",
  code: "anotherStr",
  index: 1,
  name: "expected",
  kind: "mandatory"
}),
    _am4 = {
  content: "assert.equal(str, anotherStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 9,
  config: _powerAssertConfig[2]
},
    _ag6 = new _ArgumentRecorder(assert.equal, _am4, {
  espath: "arguments/0",
  code: "str",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag7 = new _ArgumentRecorder(assert.equal, _am4, {
  espath: "arguments/1",
  code: "anotherStr",
  index: 1,
  name: "expected",
  kind: "mandatory"
}),
    _am5 = {
  content: "assert.equal(str, anotherStr, messageStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 14,
  config: _powerAssertConfig[2]
},
    _ag8 = new _ArgumentRecorder(assert.equal, _am5, {
  espath: "arguments/0",
  code: "str",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag9 = new _ArgumentRecorder(assert.equal, _am5, {
  espath: "arguments/1",
  code: "anotherStr",
  index: 1,
  name: "expected",
  kind: "mandatory"
}),
    _ag10 = new _ArgumentRecorder(assert.equal, _am5, {
  espath: "arguments/2",
  code: "messageStr",
  index: 2,
  name: "message",
  kind: "optional"
}),
    _am6 = {
  content: "assert.equal(str, anotherStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 16,
  config: _powerAssertConfig[2]
},
    _ag11 = new _ArgumentRecorder(assert.equal, _am6, {
  espath: "arguments/0",
  code: "str",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag12 = new _ArgumentRecorder(assert.equal, _am6, {
  espath: "arguments/1",
  code: "anotherStr",
  index: 1,
  name: "expected",
  kind: "mandatory"
}),
    _am7 = {
  content: "assert.equal(str, yetAnotherStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 21,
  config: _powerAssertConfig[2]
},
    _ag13 = new _ArgumentRecorder(assert.equal, _am7, {
  espath: "arguments/0",
  code: "str",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag14 = new _ArgumentRecorder(assert.equal, _am7, {
  espath: "arguments/1",
  code: "yetAnotherStr",
  index: 1,
  name: "expected",
  kind: "mandatory"
});

assert(_ag._rec(falsyStr, "arguments/0"), new _AssertionMessage([_ag], _am));
assert(_ag2._rec(falsyStr, "arguments/0"), new _AssertionMessage([_ag2, _ag3], _am2, _ag3._rec(messageStr, "arguments/1")));
assert.equal(_ag4._rec(str, "arguments/0"), _ag5._rec(anotherStr, "arguments/1"), new _AssertionMessage([_ag4, _ag5], _am3));
assert.equal(_ag6._rec(str, "arguments/0"), _ag7._rec(anotherStr, "arguments/1"), new _AssertionMessage([_ag6, _ag7], _am4));
assert.equal(_ag8._rec(str, "arguments/0"), _ag9._rec(anotherStr, "arguments/1"), new _AssertionMessage([_ag8, _ag9, _ag10], _am5, _ag10._rec(messageStr, "arguments/2")));
assert.equal(_ag11._rec(str, "arguments/0"), _ag12._rec(anotherStr, "arguments/1"), new _AssertionMessage([_ag11, _ag12], _am6));
assert.equal(_ag13._rec(str, "arguments/0"), _ag14._rec(yetAnotherStr, "arguments/1"), new _AssertionMessage([_ag13, _ag14], _am7));
