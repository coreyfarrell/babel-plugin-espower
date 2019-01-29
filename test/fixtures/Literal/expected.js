'use strict';

var _powerAssertConfig = [{ pattern: "assert(value, [message])", args: [{ index: 0, name: "value", kind: "mandatory" }, { index: 1, name: "message", kind: "optional", message: true }] }, { pattern: "assert.ok(value, [message])", args: [{ index: 0, name: "value", kind: "mandatory" }, { index: 1, name: "message", kind: "optional", message: true }] }, { pattern: "assert.equal(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.strictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.deepEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", args: [{ index: 0, name: "fn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", args: [{ index: 0, name: "fn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", args: [{ index: 0, name: "asyncFn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", args: [{ index: 0, name: "asyncFn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }],
    _am = {
  content: "assert(false)",
  filepath: "test/fixtures/Literal/fixture.js",
  line: 3,
  config: _powerAssertConfig[0]
},
    _am2 = {
  content: "assert(0)",
  filepath: "test/fixtures/Literal/fixture.js",
  line: 5,
  config: _powerAssertConfig[0]
},
    _am3 = {
  content: "assert.equal(1, 0)",
  filepath: "test/fixtures/Literal/fixture.js",
  line: 7,
  config: _powerAssertConfig[2]
},
    _am4 = {
  content: "assert(false, 'message')",
  filepath: "test/fixtures/Literal/fixture.js",
  line: 9,
  config: _powerAssertConfig[0]
},
    _am5 = {
  content: "assert(false, messageStr)",
  filepath: "test/fixtures/Literal/fixture.js",
  line: 11,
  config: _powerAssertConfig[0]
},
    _ArgumentRecorder = function () { const isPromiseLike = o => o !== null && typeof o === "object" && typeof o.then === "function" && typeof o.catch === "function"; const mark = (_this, s) => { return function () { const args = Array.from(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; }; class $Promise$ { constructor(prms) { this.status = "pending"; prms.then(mark(this, "resolved"), mark(this, "rejected")); } } const wrap = v => isPromiseLike(v) ? new $Promise$(v) : v; class ArgumentRecorder { constructor(callee, am, matchIndex) { this._callee = callee; this._am = am; this._logs = []; this._recorded = null; this._val = null; this._idx = matchIndex; const argconf = am.config.args[matchIndex]; this._isBlock = !!argconf.block; } metadata() { return this._am; } matchIndex() { return this._idx; } val() { return this._val; } _tap(value, espath) { this._logs.push({ value: wrap(value), espath }); return value; } _rec(value, espath) { const empowered = this._callee && this._callee._empowered; try { if (!empowered) return value; const log = { value: wrap(value), espath }; this._logs.push(log); if (this._isBlock && empowered && typeof value === "function") { value = new Proxy(value, { apply(target, thisArg, args) { try { const ret = target.apply(thisArg, args); log.value = wrap(ret); return ret; } catch (e) { log.value = e; throw e; } } }); } this._recorded = { value, logs: [].concat(this._logs) }; return this; } finally { this._val = value; this._logs = []; } } eject() { const ret = this._recorded; this._recorded = null; this._val = null; return ret; } } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am5, 1),
    _AssertionMessage = function () { const _s = "\n\n      "; class AssertionMessage { constructor(am, matchIndex, msgOrRec) { this._am = am; this._idx = matchIndex; this._msgOrRec = msgOrRec; } metadata() { return this._am; } matchIndex() { return this._idx; } val() { if (this._msgOrRec && typeof this._msgOrRec.val === "function") { return this._msgOrRec.val(); } else { return this._msgOrRec; } } eject() { if (this._msgOrRec && typeof this._msgOrRec.eject === "function") { return this._msgOrRec.eject(); } else { return { value: this.val(), logs: [] }; } } toString() { let msg = typeof this._msgOrRec === "string" ? this._msgOrRec : ""; msg += `${_s}# ${this._am.filepath}:${this._am.line}`; msg += `${_s}${this._am.content}`; msg += `${_s}[WARNING] power-assert is not configured. see: https://github.com/power-assert-js/power-assert`; msg += `\n`; return msg; } } return AssertionMessage; }(),
    _am6 = {
  content: "assert.equal(foo, 'bar', 'msg')",
  filepath: "test/fixtures/Literal/fixture.js",
  line: 13,
  config: _powerAssertConfig[2]
},
    _ag2 = new _ArgumentRecorder(assert.equal, _am6, 0),
    _am7 = {
  content: "assert(/^not/.exec(str))",
  filepath: "test/fixtures/Literal/fixture.js",
  line: 15,
  config: _powerAssertConfig[0]
},
    _ag3 = new _ArgumentRecorder(assert, _am7, 0),
    _am8 = {
  content: "assert(fuga !== '\u3075\u304C')",
  filepath: "test/fixtures/Literal/fixture.js",
  line: 17,
  config: _powerAssertConfig[0]
},
    _ag4 = new _ArgumentRecorder(assert, _am8, 0),
    _am9 = {
  content: "assert('\u307B\u3052' !== '\u3075\u304C')",
  filepath: "test/fixtures/Literal/fixture.js",
  line: 19,
  config: _powerAssertConfig[0]
},
    _ag5 = new _ArgumentRecorder(assert, _am9, 0),
    _am10 = {
  content: "assert(0b111110111)",
  filepath: "test/fixtures/Literal/fixture.js",
  line: 21,
  config: _powerAssertConfig[0]
},
    _am11 = {
  content: "assert(0o767)",
  filepath: "test/fixtures/Literal/fixture.js",
  line: 23,
  config: _powerAssertConfig[0]
};

assert(false);
assert(0);
assert.equal(1, 0);
assert(false, 'message');
assert(false, new _AssertionMessage(_am5, 1, _ag._rec(messageStr, "arguments/1")));
assert.equal(_ag2._rec(foo, "arguments/0"), 'bar', new _AssertionMessage(_am6, 2, 'msg'));
assert(_ag3._rec(/^not/.exec(_ag3._tap(str, "arguments/0/arguments/0")), "arguments/0"), new _AssertionMessage(_am7, -1));
assert(_ag4._rec(_ag4._tap(fuga, "arguments/0/left") !== 'ふが', "arguments/0"), new _AssertionMessage(_am8, -1));
assert(_ag5._rec('ほげ' !== 'ふが', "arguments/0"), new _AssertionMessage(_am9, -1));
assert(0b111110111);
assert(0o767);
