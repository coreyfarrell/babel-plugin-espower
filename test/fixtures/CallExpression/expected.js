'use strict';

var _powerAssertConfig = [{ pattern: "assert(value, [message])", args: [{ index: 0, name: "value", kind: "mandatory" }, { index: 1, name: "message", kind: "optional", message: true }] }, { pattern: "assert.ok(value, [message])", args: [{ index: 0, name: "value", kind: "mandatory" }, { index: 1, name: "message", kind: "optional", message: true }] }, { pattern: "assert.equal(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.strictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.deepEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", args: [{ index: 0, name: "fn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", args: [{ index: 0, name: "fn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", args: [{ index: 0, name: "asyncFn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", args: [{ index: 0, name: "asyncFn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }],
    _am = {
  content: "assert(func())",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 3,
  config: _powerAssertConfig[0]
},
    _ArgumentRecorder = function () { const isPromiseLike = o => o !== null && typeof o === "object" && typeof o.then === "function" && typeof o.catch === "function"; const mark = (_this, s) => { return function () { const args = Array.from(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; }; class $Promise$ { constructor(prms) { this.status = "pending"; prms.then(mark(this, "resolved"), mark(this, "rejected")); } } const wrap = v => isPromiseLike(v) ? new $Promise$(v) : v; class ArgumentRecorder { constructor(callee, am, matchIndex) { this._callee = callee; this._am = am; this._logs = []; this._recorded = null; this._val = null; this._idx = matchIndex; const argconf = am.config.args[matchIndex]; this._isBlock = !!argconf.block; } metadata() { return this._am; } matchIndex() { return this._idx; } val() { return this._val; } _tap(value, espath) { this._logs.push({ value: wrap(value), espath }); return value; } _rec(value, espath) { const empowered = this._callee && this._callee._empowered; try { if (!empowered) return value; const log = { value: wrap(value), espath }; this._logs.push(log); if (this._isBlock && empowered && typeof value === "function") { value = new Proxy(value, { apply(target, thisArg, args) { try { const ret = target.apply(thisArg, args); log.value = wrap(ret); return ret; } catch (e) { log.value = e; throw e; } } }); } this._recorded = { value, logs: [].concat(this._logs) }; return this; } finally { this._val = value; this._logs = []; } } eject() { const ret = this._recorded; this._recorded = null; this._val = null; return ret; } } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am, 0),
    _AssertionMessage = function () { const _s = "\n\n      "; class AssertionMessage { constructor(am, matchIndex, msgOrRec) { this._am = am; this._idx = matchIndex; this._msgOrRec = msgOrRec; } metadata() { return this._am; } matchIndex() { return this._idx; } val() { if (this._msgOrRec && typeof this._msgOrRec.val === "function") { return this._msgOrRec.val(); } else { return this._msgOrRec; } } eject() { if (this._msgOrRec && typeof this._msgOrRec.eject === "function") { return this._msgOrRec.eject(); } else { return { value: this.val(), logs: [] }; } } toString() { let msg = typeof this._msgOrRec === "string" ? this._msgOrRec : ""; msg += `${_s}# ${this._am.filepath}:${this._am.line}`; msg += `${_s}${this._am.content}`; msg += `${_s}[WARNING] power-assert is not configured. see: https://github.com/power-assert-js/power-assert`; msg += `\n`; return msg; } } return AssertionMessage; }(),
    _am2 = {
  content: "assert(obj.age())",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 5,
  config: _powerAssertConfig[0]
},
    _ag2 = new _ArgumentRecorder(assert, _am2, 0),
    _am3 = {
  content: "assert(isFalsy(positiveInt))",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 7,
  config: _powerAssertConfig[0]
},
    _ag3 = new _ArgumentRecorder(assert, _am3, 0),
    _am4 = {
  content: "assert(foo[propName]())",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 9,
  config: _powerAssertConfig[0]
},
    _ag4 = new _ArgumentRecorder(assert, _am4, 0),
    _am5 = {
  content: "assert(foo[hoge[fuga[piyo]]]())",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 11,
  config: _powerAssertConfig[0]
},
    _ag5 = new _ArgumentRecorder(assert, _am5, 0),
    _am6 = {
  content: "assert(sum(one, two, three) === seven)",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 13,
  config: _powerAssertConfig[0]
},
    _ag6 = new _ArgumentRecorder(assert, _am6, 0),
    _am7 = {
  content: "assert(sum(sum(one, two), three) === sum(sum(two, three), seven))",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 15,
  config: _powerAssertConfig[0]
},
    _ag7 = new _ArgumentRecorder(assert, _am7, 0),
    _am8 = {
  content: "assert(math.calc.sum(one, two, three) === seven)",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 17,
  config: _powerAssertConfig[0]
},
    _ag8 = new _ArgumentRecorder(assert, _am8, 0),
    _am9 = {
  content: "assert(three * (seven * ten) === three)",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 19,
  config: _powerAssertConfig[0]
},
    _ag9 = new _ArgumentRecorder(assert, _am9, 0),
    _am10 = {
  content: "assert(!concat(fuga, piyo))",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 21,
  config: _powerAssertConfig[0]
},
    _ag10 = new _ArgumentRecorder(assert, _am10, 0),
    _am11 = {
  content: "assert.strictEqual(three * (seven * ten), math.calc.sum(one, two, three))",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 23,
  config: _powerAssertConfig[4]
},
    _ag11 = new _ArgumentRecorder(assert.strictEqual, _am11, 0),
    _ag12 = new _ArgumentRecorder(assert.strictEqual, _am11, 1);

assert(_ag._rec(func(), "arguments/0"), new _AssertionMessage(_am, -1));
assert(_ag2._rec(_ag2._tap(obj, "arguments/0/callee/object").age(), "arguments/0"), new _AssertionMessage(_am2, -1));
assert(_ag3._rec(isFalsy(_ag3._tap(positiveInt, "arguments/0/arguments/0")), "arguments/0"), new _AssertionMessage(_am3, -1));
assert(_ag4._rec(_ag4._tap(foo, "arguments/0/callee/object")[_ag4._tap(propName, "arguments/0/callee/property")](), "arguments/0"), new _AssertionMessage(_am4, -1));
assert(_ag5._rec(_ag5._tap(foo, "arguments/0/callee/object")[_ag5._tap(_ag5._tap(hoge, "arguments/0/callee/property/object")[_ag5._tap(_ag5._tap(fuga, "arguments/0/callee/property/property/object")[_ag5._tap(piyo, "arguments/0/callee/property/property/property")], "arguments/0/callee/property/property")], "arguments/0/callee/property")](), "arguments/0"), new _AssertionMessage(_am5, -1));
assert(_ag6._rec(_ag6._tap(sum(_ag6._tap(one, "arguments/0/left/arguments/0"), _ag6._tap(two, "arguments/0/left/arguments/1"), _ag6._tap(three, "arguments/0/left/arguments/2")), "arguments/0/left") === _ag6._tap(seven, "arguments/0/right"), "arguments/0"), new _AssertionMessage(_am6, -1));
assert(_ag7._rec(_ag7._tap(sum(_ag7._tap(sum(_ag7._tap(one, "arguments/0/left/arguments/0/arguments/0"), _ag7._tap(two, "arguments/0/left/arguments/0/arguments/1")), "arguments/0/left/arguments/0"), _ag7._tap(three, "arguments/0/left/arguments/1")), "arguments/0/left") === _ag7._tap(sum(_ag7._tap(sum(_ag7._tap(two, "arguments/0/right/arguments/0/arguments/0"), _ag7._tap(three, "arguments/0/right/arguments/0/arguments/1")), "arguments/0/right/arguments/0"), _ag7._tap(seven, "arguments/0/right/arguments/1")), "arguments/0/right"), "arguments/0"), new _AssertionMessage(_am7, -1));
assert(_ag8._rec(_ag8._tap(_ag8._tap(_ag8._tap(math, "arguments/0/left/callee/object/object").calc, "arguments/0/left/callee/object").sum(_ag8._tap(one, "arguments/0/left/arguments/0"), _ag8._tap(two, "arguments/0/left/arguments/1"), _ag8._tap(three, "arguments/0/left/arguments/2")), "arguments/0/left") === _ag8._tap(seven, "arguments/0/right"), "arguments/0"), new _AssertionMessage(_am8, -1));
assert(_ag9._rec(_ag9._tap(_ag9._tap(three, "arguments/0/left/left") * _ag9._tap(_ag9._tap(seven, "arguments/0/left/right/left") * _ag9._tap(ten, "arguments/0/left/right/right"), "arguments/0/left/right"), "arguments/0/left") === _ag9._tap(three, "arguments/0/right"), "arguments/0"), new _AssertionMessage(_am9, -1));
assert(_ag10._rec(!_ag10._tap(concat(_ag10._tap(fuga, "arguments/0/argument/arguments/0"), _ag10._tap(piyo, "arguments/0/argument/arguments/1")), "arguments/0/argument"), "arguments/0"), new _AssertionMessage(_am10, -1));
assert.strictEqual(_ag11._rec(_ag11._tap(three, "arguments/0/left") * _ag11._tap(_ag11._tap(seven, "arguments/0/right/left") * _ag11._tap(ten, "arguments/0/right/right"), "arguments/0/right"), "arguments/0"), _ag12._rec(_ag12._tap(_ag12._tap(math, "arguments/1/callee/object/object").calc, "arguments/1/callee/object").sum(_ag12._tap(one, "arguments/1/arguments/0"), _ag12._tap(two, "arguments/1/arguments/1"), _ag12._tap(three, "arguments/1/arguments/2")), "arguments/1"), new _AssertionMessage(_am11, -1));
