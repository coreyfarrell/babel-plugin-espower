'use strict';

var _powerAssertRecorder = function () { var events = []; function _capt(value, espath) { events.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var captured = events; events = []; var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder();

assert(v => v + 1);

assert((v, i) => v + i);

assert(v => ({ even: v, odd: v + 1 }));

assert(_rec._expr(_rec._capt(_rec._capt(seven, 'arguments/0/left') === _rec._capt(((v, i) => v + i)(_rec._capt(four, 'arguments/0/right/arguments/0'), _rec._capt(five, 'arguments/0/right/arguments/1')), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(seven === ((v, i) => v + i)(four, five))',
  filepath: 'test/fixtures/ArrowFunctionExpression/fixture.js',
  line: 9
}));
