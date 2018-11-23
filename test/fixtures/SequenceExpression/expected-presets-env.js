'use strict';

var _powerAssertVisitorKeys = "{\"ArrayExpression\":[\"elements\"],\"AssignmentExpression\":[\"left\",\"right\"],\"BinaryExpression\":[\"left\",\"right\"],\"InterpreterDirective\":[],\"Directive\":[\"value\"],\"DirectiveLiteral\":[],\"BlockStatement\":[\"directives\",\"body\"],\"BreakStatement\":[\"label\"],\"CallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"CatchClause\":[\"param\",\"body\"],\"ConditionalExpression\":[\"test\",\"consequent\",\"alternate\"],\"ContinueStatement\":[\"label\"],\"DebuggerStatement\":[],\"DoWhileStatement\":[\"test\",\"body\"],\"EmptyStatement\":[],\"ExpressionStatement\":[\"expression\"],\"File\":[\"program\"],\"ForInStatement\":[\"left\",\"right\",\"body\"],\"ForStatement\":[\"init\",\"test\",\"update\",\"body\"],\"FunctionDeclaration\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"FunctionExpression\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"Identifier\":[\"typeAnnotation\"],\"IfStatement\":[\"test\",\"consequent\",\"alternate\"],\"LabeledStatement\":[\"label\",\"body\"],\"StringLiteral\":[],\"NumericLiteral\":[],\"NullLiteral\":[],\"BooleanLiteral\":[],\"RegExpLiteral\":[],\"LogicalExpression\":[\"left\",\"right\"],\"MemberExpression\":[\"object\",\"property\"],\"NewExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"Program\":[\"directives\",\"body\"],\"ObjectExpression\":[\"properties\"],\"ObjectMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectProperty\":[\"key\",\"value\",\"decorators\"],\"RestElement\":[\"argument\",\"typeAnnotation\"],\"ReturnStatement\":[\"argument\"],\"SequenceExpression\":[\"expressions\"],\"SwitchCase\":[\"test\",\"consequent\"],\"SwitchStatement\":[\"discriminant\",\"cases\"],\"ThisExpression\":[],\"ThrowStatement\":[\"argument\"],\"TryStatement\":[\"block\",\"handler\",\"finalizer\"],\"UnaryExpression\":[\"argument\"],\"UpdateExpression\":[\"argument\"],\"VariableDeclaration\":[\"declarations\"],\"VariableDeclarator\":[\"id\",\"init\"],\"WhileStatement\":[\"test\",\"body\"],\"WithStatement\":[\"object\",\"body\"],\"AssignmentPattern\":[\"left\",\"right\"],\"ArrayPattern\":[\"elements\",\"typeAnnotation\"],\"ArrowFunctionExpression\":[\"params\",\"body\",\"returnType\",\"typeParameters\"],\"ClassBody\":[\"body\"],\"ClassDeclaration\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ClassExpression\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ExportAllDeclaration\":[\"source\"],\"ExportDefaultDeclaration\":[\"declaration\"],\"ExportNamedDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"ExportSpecifier\":[\"local\",\"exported\"],\"ForOfStatement\":[\"left\",\"right\",\"body\"],\"ImportDeclaration\":[\"specifiers\",\"source\"],\"ImportDefaultSpecifier\":[\"local\"],\"ImportNamespaceSpecifier\":[\"local\"],\"ImportSpecifier\":[\"local\",\"imported\"],\"MetaProperty\":[\"meta\",\"property\"],\"ClassMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectPattern\":[\"properties\",\"typeAnnotation\"],\"SpreadElement\":[\"argument\"],\"Super\":[],\"TaggedTemplateExpression\":[\"tag\",\"quasi\"],\"TemplateElement\":[],\"TemplateLiteral\":[\"quasis\",\"expressions\"],\"YieldExpression\":[\"argument\"],\"AnyTypeAnnotation\":[],\"ArrayTypeAnnotation\":[\"elementType\"],\"BooleanTypeAnnotation\":[],\"BooleanLiteralTypeAnnotation\":[],\"NullLiteralTypeAnnotation\":[],\"ClassImplements\":[\"id\",\"typeParameters\"],\"DeclareClass\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareFunction\":[\"id\"],\"DeclareInterface\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareModule\":[\"id\",\"body\"],\"DeclareModuleExports\":[\"typeAnnotation\"],\"DeclareTypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"DeclareOpaqueType\":[\"id\",\"typeParameters\",\"supertype\"],\"DeclareVariable\":[\"id\"],\"DeclareExportDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"DeclareExportAllDeclaration\":[\"source\"],\"DeclaredPredicate\":[\"value\"],\"ExistsTypeAnnotation\":[],\"FunctionTypeAnnotation\":[\"typeParameters\",\"params\",\"rest\",\"returnType\"],\"FunctionTypeParam\":[\"name\",\"typeAnnotation\"],\"GenericTypeAnnotation\":[\"id\",\"typeParameters\"],\"InferredPredicate\":[],\"InterfaceExtends\":[\"id\",\"typeParameters\"],\"InterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"InterfaceTypeAnnotation\":[\"extends\",\"body\"],\"IntersectionTypeAnnotation\":[\"types\"],\"MixedTypeAnnotation\":[],\"EmptyTypeAnnotation\":[],\"NullableTypeAnnotation\":[\"typeAnnotation\"],\"NumberLiteralTypeAnnotation\":[],\"NumberTypeAnnotation\":[],\"ObjectTypeAnnotation\":[\"properties\",\"indexers\",\"callProperties\",\"internalSlots\"],\"ObjectTypeInternalSlot\":[\"id\",\"value\",\"optional\",\"static\",\"method\"],\"ObjectTypeCallProperty\":[\"value\"],\"ObjectTypeIndexer\":[\"id\",\"key\",\"value\",\"variance\"],\"ObjectTypeProperty\":[\"key\",\"value\",\"variance\"],\"ObjectTypeSpreadProperty\":[\"argument\"],\"OpaqueType\":[\"id\",\"typeParameters\",\"supertype\",\"impltype\"],\"QualifiedTypeIdentifier\":[\"id\",\"qualification\"],\"StringLiteralTypeAnnotation\":[],\"StringTypeAnnotation\":[],\"ThisTypeAnnotation\":[],\"TupleTypeAnnotation\":[\"types\"],\"TypeofTypeAnnotation\":[\"argument\"],\"TypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"TypeAnnotation\":[\"typeAnnotation\"],\"TypeCastExpression\":[\"expression\",\"typeAnnotation\"],\"TypeParameter\":[\"bound\",\"default\",\"variance\"],\"TypeParameterDeclaration\":[\"params\"],\"TypeParameterInstantiation\":[\"params\"],\"UnionTypeAnnotation\":[\"types\"],\"Variance\":[],\"VoidTypeAnnotation\":[],\"JSXAttribute\":[\"name\",\"value\"],\"JSXClosingElement\":[\"name\"],\"JSXElement\":[\"openingElement\",\"children\",\"closingElement\"],\"JSXEmptyExpression\":[],\"JSXExpressionContainer\":[\"expression\"],\"JSXSpreadChild\":[\"expression\"],\"JSXIdentifier\":[],\"JSXMemberExpression\":[\"object\",\"property\"],\"JSXNamespacedName\":[\"namespace\",\"name\"],\"JSXOpeningElement\":[\"name\",\"attributes\"],\"JSXSpreadAttribute\":[\"argument\"],\"JSXText\":[],\"JSXFragment\":[\"openingFragment\",\"children\",\"closingFragment\"],\"JSXOpeningFragment\":[],\"JSXClosingFragment\":[],\"Noop\":[],\"ParenthesizedExpression\":[\"expression\"],\"AwaitExpression\":[\"argument\"],\"BindExpression\":[\"object\",\"callee\"],\"ClassProperty\":[\"key\",\"value\",\"typeAnnotation\",\"decorators\"],\"OptionalMemberExpression\":[\"object\",\"property\"],\"OptionalCallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"ClassPrivateProperty\":[\"key\",\"value\"],\"Import\":[],\"Decorator\":[\"expression\"],\"DoExpression\":[\"body\"],\"ExportDefaultSpecifier\":[\"exported\"],\"ExportNamespaceSpecifier\":[\"exported\"],\"PrivateName\":[\"id\"],\"BigIntLiteral\":[],\"TSParameterProperty\":[\"parameter\"],\"TSDeclareFunction\":[\"id\",\"typeParameters\",\"params\",\"returnType\"],\"TSDeclareMethod\":[\"decorators\",\"key\",\"typeParameters\",\"params\",\"returnType\"],\"TSQualifiedName\":[\"left\",\"right\"],\"TSCallSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSPropertySignature\":[\"key\",\"typeAnnotation\",\"initializer\"],\"TSMethodSignature\":[\"key\",\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSIndexSignature\":[\"parameters\",\"typeAnnotation\"],\"TSAnyKeyword\":[],\"TSUnknownKeyword\":[],\"TSNumberKeyword\":[],\"TSObjectKeyword\":[],\"TSBooleanKeyword\":[],\"TSStringKeyword\":[],\"TSSymbolKeyword\":[],\"TSVoidKeyword\":[],\"TSUndefinedKeyword\":[],\"TSNullKeyword\":[],\"TSNeverKeyword\":[],\"TSThisType\":[],\"TSFunctionType\":[\"typeParameters\",\"typeAnnotation\"],\"TSConstructorType\":[\"typeParameters\",\"typeAnnotation\"],\"TSTypeReference\":[\"typeName\",\"typeParameters\"],\"TSTypePredicate\":[\"parameterName\",\"typeAnnotation\"],\"TSTypeQuery\":[\"exprName\"],\"TSTypeLiteral\":[\"members\"],\"TSArrayType\":[\"elementType\"],\"TSTupleType\":[\"elementTypes\"],\"TSOptionalType\":[\"typeAnnotation\"],\"TSRestType\":[\"typeAnnotation\"],\"TSUnionType\":[\"types\"],\"TSIntersectionType\":[\"types\"],\"TSConditionalType\":[\"checkType\",\"extendsType\",\"trueType\",\"falseType\"],\"TSInferType\":[\"typeParameter\"],\"TSParenthesizedType\":[\"typeAnnotation\"],\"TSTypeOperator\":[\"typeAnnotation\"],\"TSIndexedAccessType\":[\"objectType\",\"indexType\"],\"TSMappedType\":[\"typeParameter\",\"typeAnnotation\"],\"TSLiteralType\":[\"literal\"],\"TSExpressionWithTypeArguments\":[\"expression\",\"typeParameters\"],\"TSInterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"TSInterfaceBody\":[\"body\"],\"TSTypeAliasDeclaration\":[\"id\",\"typeParameters\",\"typeAnnotation\"],\"TSAsExpression\":[\"expression\",\"typeAnnotation\"],\"TSTypeAssertion\":[\"typeAnnotation\",\"expression\"],\"TSEnumDeclaration\":[\"id\",\"members\"],\"TSEnumMember\":[\"id\",\"initializer\"],\"TSModuleDeclaration\":[\"id\",\"body\"],\"TSModuleBlock\":[\"body\"],\"TSImportEqualsDeclaration\":[\"id\",\"moduleReference\"],\"TSExternalModuleReference\":[\"expression\"],\"TSNonNullExpression\":[\"expression\"],\"TSExportAssignment\":[\"expression\"],\"TSNamespaceExportDeclaration\":[\"id\"],\"TSTypeAnnotation\":[\"typeAnnotation\"],\"TSTypeParameterInstantiation\":[\"params\"],\"TSTypeParameterDeclaration\":[\"params\"],\"TSTypeParameter\":[\"constraint\",\"default\"]}",
    _powerAssertConfig = ["assert(value, [message])", "assert.ok(value, [message])", "assert.equal(actual, expected, [message])", "assert.notEqual(actual, expected, [message])", "assert.strictEqual(actual, expected, [message])", "assert.notStrictEqual(actual, expected, [message])", { pattern: "assert.deepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }],
    _am = {
  content: "assert((2, 1, 0))",
  filepath: "test/fixtures/SequenceExpression/fixture.js",
  line: 3,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"SequenceExpression\",\"expressions\":[{\"type\":\"NumericLiteral\",\"value\":2,\"range\":[8,9]},{\"type\":\"NumericLiteral\",\"value\":1,\"range\":[11,12]},{\"type\":\"NumericLiteral\",\"value\":0,\"range\":[14,15]}],\"range\":[8,15]}],\"range\":[0,17]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"(\"},\"range\":[7,8]},{\"type\":{\"label\":\"num\"},\"value\":2,\"range\":[8,9]},{\"type\":{\"label\":\",\"},\"range\":[9,10]},{\"type\":{\"label\":\"num\"},\"value\":1,\"range\":[11,12]},{\"type\":{\"label\":\",\"},\"range\":[12,13]},{\"type\":{\"label\":\"num\"},\"value\":0,\"range\":[14,15]},{\"type\":{\"label\":\")\"},\"range\":[15,16]},{\"type\":{\"label\":\")\"},\"range\":[16,17]}]",
  visitorKeys: _powerAssertVisitorKeys
},
    _ArgumentRecorder = function () { function ArgumentRecorder(callee, am, ag) { this._callee = callee; this._metadata = am; this._argDef = ag; this._logs = []; this._recorded = null; this._value = null; this._isBlock = false; if (am.config) { var argconf = am.config.args[ag.index]; this._isBlock = !!argconf.block; } } ArgumentRecorder.prototype.metadata = function metadata() { return this._metadata; }; ArgumentRecorder.prototype.code = function code() { return this._argDef.code; }; ArgumentRecorder.prototype.value = function value() { return this._value; }; ArgumentRecorder.prototype._tap = function _tap(value, espath) { this._logs.push({ value: wrap(value), espath: espath }); return value; }; ArgumentRecorder.prototype._rec = function _rec(value, espath) { var log = { value: wrap(value), espath: espath }; this._logs.push(log); if (this._isBlock && this._callee && this._callee._empowered && typeof value === 'function') { value = new Proxy(value, { apply: function apply(target, thisArg, argumentsList) { var ret; try { ret = target.apply(thisArg, argumentsList); log.value = wrap(ret); } catch (e) { log.value = e; throw e; } return ret; } }); } this._value = value; this._recorded = { value: value, logs: [].concat(this._logs) }; this._logs = []; if (this._callee && this._callee._empowered) { return this; } else { return value; } }; ArgumentRecorder.prototype.eject = function eject() { var result = this._recorded; this._recorded = null; this._value = null; return result; }; function isPromiseLike(o) { return o !== null && _typeof(o) === 'object' && typeof o.then === 'function' && typeof o.catch === 'function'; } function $Promise$(prms) { this.status = 'pending'; prms.then(mark(this, 'resolved'), mark(this, 'rejected')); } function mark(_this, s) { return function () { var args = Array.prototype.slice.apply(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; } function wrap(v) { return isPromiseLike(v) ? new $Promise$(v) : v; } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am, {
  espath: "arguments/0",
  code: "2, 1, 0",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am2 = {
  content: "assert((foo, bar) === baz)",
  filepath: "test/fixtures/SequenceExpression/fixture.js",
  line: 5,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"SequenceExpression\",\"expressions\":[{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[8,11]},{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[13,16]}],\"range\":[8,16]},\"right\":{\"type\":\"Identifier\",\"name\":\"baz\",\"range\":[22,25]},\"range\":[7,25]}],\"range\":[0,26]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"(\"},\"range\":[7,8]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[8,11]},{\"type\":{\"label\":\",\"},\"range\":[11,12]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[13,16]},{\"type\":{\"label\":\")\"},\"range\":[16,17]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"===\",\"range\":[18,21]},{\"type\":{\"label\":\"name\"},\"value\":\"baz\",\"range\":[22,25]},{\"type\":{\"label\":\")\"},\"range\":[25,26]}]",
  visitorKeys: _powerAssertVisitorKeys
},
    _ag2 = new _ArgumentRecorder(assert, _am2, {
  espath: "arguments/0",
  code: "(foo, bar) === baz",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _AssertionMessage = function () { function AssertionMessage(argRecs, metadata, message) { this._argRecs = argRecs; this._metadata = metadata; this._message = message; } AssertionMessage.prototype.value = function value() { if (this._message && typeof this._message.value === 'function') { return this._message.value(); } else { return this._message; } }; AssertionMessage.prototype.eject = function eject() { if (this._message && typeof this._message.eject === 'function') { return this._message.eject(); } else { return { value: this.value(), logs: [] }; } }; AssertionMessage.prototype.toString = function toString() { var message = this._message ? this._message : ''; message += '\n----------'; message += '\n  code: ' + this._metadata.content; message += '\n  line: ' + this._metadata.filepath + ':' + this._metadata.line; var argRec; for (var i = 0; i < this._argRecs.length; i += 1) { argRec = this._argRecs[i]; message += '\n  arg' + i + ': '; message += '\n    code: ' + argRec.code(); message += '\n    value: ' + argRec.value(); message += '\n    type: ' + _typeof(argRec.value()); } message += '\n'; message += '[NOTICE] configure power-assert for more verbose report. see: https://github.com/power-assert-js/power-assert'; message += '\n----------'; return message; }; return AssertionMessage; }(),
    _am3 = {
  content: "assert(toto((tata, titi)))",
  filepath: "test/fixtures/SequenceExpression/fixture.js",
  line: 7,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"toto\",\"range\":[7,11]},\"arguments\":[{\"type\":\"SequenceExpression\",\"expressions\":[{\"type\":\"Identifier\",\"name\":\"tata\",\"range\":[13,17]},{\"type\":\"Identifier\",\"name\":\"titi\",\"range\":[19,23]}],\"range\":[13,23]}],\"range\":[7,25]}],\"range\":[0,26]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"toto\",\"range\":[7,11]},{\"type\":{\"label\":\"(\"},\"range\":[11,12]},{\"type\":{\"label\":\"(\"},\"range\":[12,13]},{\"type\":{\"label\":\"name\"},\"value\":\"tata\",\"range\":[13,17]},{\"type\":{\"label\":\",\"},\"range\":[17,18]},{\"type\":{\"label\":\"name\"},\"value\":\"titi\",\"range\":[19,23]},{\"type\":{\"label\":\")\"},\"range\":[23,24]},{\"type\":{\"label\":\")\"},\"range\":[24,25]},{\"type\":{\"label\":\")\"},\"range\":[25,26]}]",
  visitorKeys: _powerAssertVisitorKeys
},
    _ag3 = new _ArgumentRecorder(assert, _am3, {
  espath: "arguments/0",
  code: "toto((tata, titi))",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am4 = {
  content: "assert((foo, (bar, baz)))",
  filepath: "test/fixtures/SequenceExpression/fixture.js",
  line: 9,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"SequenceExpression\",\"expressions\":[{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[8,11]},{\"type\":\"SequenceExpression\",\"expressions\":[{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[14,17]},{\"type\":\"Identifier\",\"name\":\"baz\",\"range\":[19,22]}],\"range\":[14,22]}],\"range\":[8,23]}],\"range\":[0,25]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"(\"},\"range\":[7,8]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[8,11]},{\"type\":{\"label\":\",\"},\"range\":[11,12]},{\"type\":{\"label\":\"(\"},\"range\":[13,14]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[14,17]},{\"type\":{\"label\":\",\"},\"range\":[17,18]},{\"type\":{\"label\":\"name\"},\"value\":\"baz\",\"range\":[19,22]},{\"type\":{\"label\":\")\"},\"range\":[22,23]},{\"type\":{\"label\":\")\"},\"range\":[23,24]},{\"type\":{\"label\":\")\"},\"range\":[24,25]}]",
  visitorKeys: _powerAssertVisitorKeys
},
    _ag4 = new _ArgumentRecorder(assert, _am4, {
  espath: "arguments/0",
  code: "foo, (bar, baz)",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am5 = {
  content: "assert((((((foo, bar), baz), toto), tata), titi))",
  filepath: "test/fixtures/SequenceExpression/fixture.js",
  line: 11,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"SequenceExpression\",\"expressions\":[{\"type\":\"SequenceExpression\",\"expressions\":[{\"type\":\"SequenceExpression\",\"expressions\":[{\"type\":\"SequenceExpression\",\"expressions\":[{\"type\":\"SequenceExpression\",\"expressions\":[{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[12,15]},{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[17,20]}],\"range\":[12,20]},{\"type\":\"Identifier\",\"name\":\"baz\",\"range\":[23,26]}],\"range\":[11,26]},{\"type\":\"Identifier\",\"name\":\"toto\",\"range\":[29,33]}],\"range\":[10,33]},{\"type\":\"Identifier\",\"name\":\"tata\",\"range\":[36,40]}],\"range\":[9,40]},{\"type\":\"Identifier\",\"name\":\"titi\",\"range\":[43,47]}],\"range\":[8,47]}],\"range\":[0,49]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"(\"},\"range\":[7,8]},{\"type\":{\"label\":\"(\"},\"range\":[8,9]},{\"type\":{\"label\":\"(\"},\"range\":[9,10]},{\"type\":{\"label\":\"(\"},\"range\":[10,11]},{\"type\":{\"label\":\"(\"},\"range\":[11,12]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[12,15]},{\"type\":{\"label\":\",\"},\"range\":[15,16]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[17,20]},{\"type\":{\"label\":\")\"},\"range\":[20,21]},{\"type\":{\"label\":\",\"},\"range\":[21,22]},{\"type\":{\"label\":\"name\"},\"value\":\"baz\",\"range\":[23,26]},{\"type\":{\"label\":\")\"},\"range\":[26,27]},{\"type\":{\"label\":\",\"},\"range\":[27,28]},{\"type\":{\"label\":\"name\"},\"value\":\"toto\",\"range\":[29,33]},{\"type\":{\"label\":\")\"},\"range\":[33,34]},{\"type\":{\"label\":\",\"},\"range\":[34,35]},{\"type\":{\"label\":\"name\"},\"value\":\"tata\",\"range\":[36,40]},{\"type\":{\"label\":\")\"},\"range\":[40,41]},{\"type\":{\"label\":\",\"},\"range\":[41,42]},{\"type\":{\"label\":\"name\"},\"value\":\"titi\",\"range\":[43,47]},{\"type\":{\"label\":\")\"},\"range\":[47,48]},{\"type\":{\"label\":\")\"},\"range\":[48,49]}]",
  visitorKeys: _powerAssertVisitorKeys
},
    _ag5 = new _ArgumentRecorder(assert, _am5, {
  espath: "arguments/0",
  code: "((((foo, bar), baz), toto), tata), titi",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am6 = {
  content: "assert((y = x, z))",
  filepath: "test/fixtures/SequenceExpression/fixture.js",
  line: 13,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"SequenceExpression\",\"expressions\":[{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"Identifier\",\"name\":\"y\",\"range\":[8,9]},\"right\":{\"type\":\"Identifier\",\"name\":\"x\",\"range\":[12,13]},\"range\":[8,13]},{\"type\":\"Identifier\",\"name\":\"z\",\"range\":[15,16]}],\"range\":[8,16]}],\"range\":[0,18]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"(\"},\"range\":[7,8]},{\"type\":{\"label\":\"name\"},\"value\":\"y\",\"range\":[8,9]},{\"type\":{\"label\":\"=\"},\"value\":\"=\",\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"x\",\"range\":[12,13]},{\"type\":{\"label\":\",\"},\"range\":[13,14]},{\"type\":{\"label\":\"name\"},\"value\":\"z\",\"range\":[15,16]},{\"type\":{\"label\":\")\"},\"range\":[16,17]},{\"type\":{\"label\":\")\"},\"range\":[17,18]}]",
  visitorKeys: _powerAssertVisitorKeys
},
    _ag6 = new _ArgumentRecorder(assert, _am6, {
  espath: "arguments/0",
  code: "y = x, z",
  index: 0,
  name: "value",
  kind: "mandatory"
});

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

assert((2, 1, 0));
assert(_ag2._rec((_ag2._tap(foo, "arguments/0/left/expressions/0"), _ag2._tap(bar, "arguments/0/left/expressions/1")) === _ag2._tap(baz, "arguments/0/right"), "arguments/0"), new _AssertionMessage([_ag2], _am2));
assert(_ag3._rec(toto((_ag3._tap(tata, "arguments/0/arguments/0/expressions/0"), _ag3._tap(titi, "arguments/0/arguments/0/expressions/1"))), "arguments/0"), new _AssertionMessage([_ag3], _am3));
assert(_ag4._rec((_ag4._tap(foo, "arguments/0/expressions/0"), (_ag4._tap(bar, "arguments/0/expressions/1/expressions/0"), _ag4._tap(baz, "arguments/0/expressions/1/expressions/1"))), "arguments/0"), new _AssertionMessage([_ag4], _am4));
assert(_ag5._rec((((((_ag5._tap(foo, "arguments/0/expressions/0/expressions/0/expressions/0/expressions/0/expressions/0"), _ag5._tap(bar, "arguments/0/expressions/0/expressions/0/expressions/0/expressions/0/expressions/1")), _ag5._tap(baz, "arguments/0/expressions/0/expressions/0/expressions/0/expressions/1")), _ag5._tap(toto, "arguments/0/expressions/0/expressions/0/expressions/1")), _ag5._tap(tata, "arguments/0/expressions/0/expressions/1")), _ag5._tap(titi, "arguments/0/expressions/1")), "arguments/0"), new _AssertionMessage([_ag5], _am5));
assert(_ag6._rec((_ag6._tap(y = _ag6._tap(x, "arguments/0/expressions/0/right"), "arguments/0/expressions/0"), _ag6._tap(z, "arguments/0/expressions/1")), "arguments/0"), new _AssertionMessage([_ag6], _am6));
