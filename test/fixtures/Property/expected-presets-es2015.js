'use strict';

var _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType","typeParameters"],"ClassBody":["body"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"ClassProperty":["key","value","typeAnnotation","decorators"],"DeclareClass":["id","typeParameters","extends","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","body"],"DeclareModule":["id","body"],"DeclareModuleExports":["typeAnnotation"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareOpaqueType":["id","typeParameters","supertype"],"DeclareVariable":["id"],"DeclareExportDeclaration":["declaration","specifiers","source"],"ExistentialTypeParam":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"EmptyTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumericLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"OpaqueType":["id","typeParameters","impltype","supertype"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameter":["bound"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"ObjectTypeAnnotation":["properties","indexers","callProperties"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value"],"ObjectTypeProperty":["key","value"],"ObjectTypeSpreadProperty":["argument"],"QualifiedTypeIdentifier":["id","qualification"],"UnionTypeAnnotation":["types"],"VoidTypeAnnotation":[],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXSpreadChild":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"Noop":[],"ParenthesizedExpression":["expression"],"AwaitExpression":["argument"],"ForAwaitStatement":["left","right","body"],"BindExpression":["object","callee"],"Import":[],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"ExportNamespaceSpecifier":["exported"],"RestProperty":["argument"],"SpreadProperty":["argument"]}',
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

assert(_rec._expr(_rec._capt(_defineProperty({}, _rec._capt(num, 'arguments/0/properties/0/key'), _rec._capt(foo, 'arguments/0/properties/0/value')), 'arguments/0'), {
  content: 'assert({ [num]: foo })',
  filepath: 'test/fixtures/Property/fixture.js',
  line: 3,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"ObjectExpression","properties":[{"type":"ObjectProperty","key":{"type":"Identifier","name":"num","range":[10,13]},"value":{"type":"Identifier","name":"foo","range":[16,19]},"computed":true,"shorthand":false,"range":[9,19]}],"range":[7,21]}],"range":[0,22]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"{"},"range":[7,8]},{"type":{"label":"["},"range":[9,10]},{"type":{"label":"name"},"value":"num","range":[10,13]},{"type":{"label":"]"},"range":[13,14]},{"type":{"label":":"},"range":[14,15]},{"type":{"label":"name"},"value":"foo","range":[16,19]},{"type":{"label":"}"},"range":[20,21]},{"type":{"label":")"},"range":[21,22]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec2._expr(_rec2._capt(_defineProperty({}, _rec2._capt('prop_' + _rec2._capt(function () {
  return bar();
}(), 'arguments/0/properties/0/key/right'), 'arguments/0/properties/0/key'), 42), 'arguments/0'), {
  content: 'assert({ [\'prop_\' + (() => bar())()]: 42 })',
  filepath: 'test/fixtures/Property/fixture.js',
  line: 5,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"ObjectExpression","properties":[{"type":"ObjectProperty","key":{"type":"BinaryExpression","operator":"+","left":{"type":"StringLiteral","value":"prop_","range":[10,17]},"right":{"type":"CallExpression","callee":{"type":"ArrowFunctionExpression","params":[],"body":{"type":"CallExpression","callee":{"type":"Identifier","name":"bar","range":[27,30]},"arguments":[],"range":[27,32]},"async":false,"range":[21,32]},"arguments":[],"range":[20,35]},"range":[10,35]},"value":{"type":"NumericLiteral","value":42,"range":[38,40]},"computed":true,"shorthand":false,"range":[9,40]}],"range":[7,42]}],"range":[0,43]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"{"},"range":[7,8]},{"type":{"label":"["},"range":[9,10]},{"type":{"label":"string"},"value":"prop_","range":[10,17]},{"type":{"label":"+/-"},"value":"+","range":[18,19]},{"type":{"label":"("},"range":[20,21]},{"type":{"label":"("},"range":[21,22]},{"type":{"label":")"},"range":[22,23]},{"type":{"label":"=>"},"range":[24,26]},{"type":{"label":"name"},"value":"bar","range":[27,30]},{"type":{"label":"("},"range":[30,31]},{"type":{"label":")"},"range":[31,32]},{"type":{"label":")"},"range":[32,33]},{"type":{"label":"("},"range":[33,34]},{"type":{"label":")"},"range":[34,35]},{"type":{"label":"]"},"range":[35,36]},{"type":{"label":":"},"range":[36,37]},{"type":{"label":"num"},"value":42,"range":[38,40]},{"type":{"label":"}"},"range":[41,42]},{"type":{"label":")"},"range":[42,43]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec3._expr(_rec3._capt(_defineProperty({}, _rec3._capt('prop_' + _rec3._capt(generate(_rec3._capt(seed, 'arguments/0/properties/0/key/expressions/0/arguments/0')), 'arguments/0/properties/0/key/expressions/0'), 'arguments/0/properties/0/key'), _rec3._capt(foo, 'arguments/0/properties/0/value')), 'arguments/0'), {
  content: 'assert({ [`prop_${generate(seed)}`]: foo })',
  filepath: 'test/fixtures/Property/fixture.js',
  line: 7,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"ObjectExpression","properties":[{"type":"ObjectProperty","key":{"type":"TemplateLiteral","quasis":[{"type":"TemplateElement","value":{"raw":"prop_","cooked":"prop_"},"tail":false,"range":[11,16]},{"type":"TemplateElement","value":{"raw":"","cooked":""},"tail":true,"range":[33,33]}],"expressions":[{"type":"CallExpression","callee":{"type":"Identifier","name":"generate","range":[18,26]},"arguments":[{"type":"Identifier","name":"seed","range":[27,31]}],"range":[18,32]}],"range":[10,34]},"value":{"type":"Identifier","name":"foo","range":[37,40]},"computed":true,"shorthand":false,"range":[9,40]}],"range":[7,42]}],"range":[0,43]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"{"},"range":[7,8]},{"type":{"label":"["},"range":[9,10]},{"type":{"label":"`"},"range":[10,11]},{"type":{"label":"template"},"value":"prop_","range":[11,16]},{"type":{"label":"${"},"range":[16,18]},{"type":{"label":"name"},"value":"generate","range":[18,26]},{"type":{"label":"("},"range":[26,27]},{"type":{"label":"name"},"value":"seed","range":[27,31]},{"type":{"label":")"},"range":[31,32]},{"type":{"label":"}"},"range":[32,33]},{"type":{"label":"template"},"value":"","range":[33,33]},{"type":{"label":"`"},"range":[33,34]},{"type":{"label":"]"},"range":[34,35]},{"type":{"label":":"},"range":[35,36]},{"type":{"label":"name"},"value":"foo","range":[37,40]},{"type":{"label":"}"},"range":[41,42]},{"type":{"label":")"},"range":[42,43]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec4._expr(_rec4._capt({ foo: foo }, 'arguments/0'), {
  content: 'assert({ foo })',
  filepath: 'test/fixtures/Property/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"ObjectExpression","properties":[{"type":"ObjectProperty","key":{"type":"Identifier","name":"foo","range":[9,12]},"value":{"type":"Identifier","name":"foo","range":[9,12]},"computed":false,"shorthand":true,"range":[9,12]}],"range":[7,14]}],"range":[0,15]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"{"},"range":[7,8]},{"type":{"label":"name"},"value":"foo","range":[9,12]},{"type":{"label":"}"},"range":[13,14]},{"type":{"label":")"},"range":[14,15]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec5._expr(_rec5._capt({ foo: foo, bar: _rec5._capt(baz, 'arguments/0/properties/1/value') }, 'arguments/0'), {
  content: 'assert({ foo, bar: baz })',
  filepath: 'test/fixtures/Property/fixture.js',
  line: 11,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"ObjectExpression","properties":[{"type":"ObjectProperty","key":{"type":"Identifier","name":"foo","range":[9,12]},"value":{"type":"Identifier","name":"foo","range":[9,12]},"computed":false,"shorthand":true,"range":[9,12]},{"type":"ObjectProperty","key":{"type":"Identifier","name":"bar","range":[14,17]},"value":{"type":"Identifier","name":"baz","range":[19,22]},"computed":false,"shorthand":false,"range":[14,22]}],"range":[7,24]}],"range":[0,25]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"{"},"range":[7,8]},{"type":{"label":"name"},"value":"foo","range":[9,12]},{"type":{"label":","},"range":[12,13]},{"type":{"label":"name"},"value":"bar","range":[14,17]},{"type":{"label":":"},"range":[17,18]},{"type":{"label":"name"},"value":"baz","range":[19,22]},{"type":{"label":"}"},"range":[23,24]},{"type":{"label":")"},"range":[24,25]}]',
  visitorKeys: _powerAssertVisitorKeys
}));
