'use strict';

var _powerAssertVisitorKeys = "{\"ArrayExpression\":[\"elements\"],\"AssignmentExpression\":[\"left\",\"right\"],\"BinaryExpression\":[\"left\",\"right\"],\"InterpreterDirective\":[],\"Directive\":[\"value\"],\"DirectiveLiteral\":[],\"BlockStatement\":[\"directives\",\"body\"],\"BreakStatement\":[\"label\"],\"CallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"CatchClause\":[\"param\",\"body\"],\"ConditionalExpression\":[\"test\",\"consequent\",\"alternate\"],\"ContinueStatement\":[\"label\"],\"DebuggerStatement\":[],\"DoWhileStatement\":[\"test\",\"body\"],\"EmptyStatement\":[],\"ExpressionStatement\":[\"expression\"],\"File\":[\"program\"],\"ForInStatement\":[\"left\",\"right\",\"body\"],\"ForStatement\":[\"init\",\"test\",\"update\",\"body\"],\"FunctionDeclaration\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"FunctionExpression\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"Identifier\":[\"typeAnnotation\"],\"IfStatement\":[\"test\",\"consequent\",\"alternate\"],\"LabeledStatement\":[\"label\",\"body\"],\"StringLiteral\":[],\"NumericLiteral\":[],\"NullLiteral\":[],\"BooleanLiteral\":[],\"RegExpLiteral\":[],\"LogicalExpression\":[\"left\",\"right\"],\"MemberExpression\":[\"object\",\"property\"],\"NewExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"Program\":[\"directives\",\"body\"],\"ObjectExpression\":[\"properties\"],\"ObjectMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectProperty\":[\"key\",\"value\",\"decorators\"],\"RestElement\":[\"argument\",\"typeAnnotation\"],\"ReturnStatement\":[\"argument\"],\"SequenceExpression\":[\"expressions\"],\"SwitchCase\":[\"test\",\"consequent\"],\"SwitchStatement\":[\"discriminant\",\"cases\"],\"ThisExpression\":[],\"ThrowStatement\":[\"argument\"],\"TryStatement\":[\"block\",\"handler\",\"finalizer\"],\"UnaryExpression\":[\"argument\"],\"UpdateExpression\":[\"argument\"],\"VariableDeclaration\":[\"declarations\"],\"VariableDeclarator\":[\"id\",\"init\"],\"WhileStatement\":[\"test\",\"body\"],\"WithStatement\":[\"object\",\"body\"],\"AssignmentPattern\":[\"left\",\"right\"],\"ArrayPattern\":[\"elements\",\"typeAnnotation\"],\"ArrowFunctionExpression\":[\"params\",\"body\",\"returnType\",\"typeParameters\"],\"ClassBody\":[\"body\"],\"ClassDeclaration\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ClassExpression\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ExportAllDeclaration\":[\"source\"],\"ExportDefaultDeclaration\":[\"declaration\"],\"ExportNamedDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"ExportSpecifier\":[\"local\",\"exported\"],\"ForOfStatement\":[\"left\",\"right\",\"body\"],\"ImportDeclaration\":[\"specifiers\",\"source\"],\"ImportDefaultSpecifier\":[\"local\"],\"ImportNamespaceSpecifier\":[\"local\"],\"ImportSpecifier\":[\"local\",\"imported\"],\"MetaProperty\":[\"meta\",\"property\"],\"ClassMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectPattern\":[\"properties\",\"typeAnnotation\"],\"SpreadElement\":[\"argument\"],\"Super\":[],\"TaggedTemplateExpression\":[\"tag\",\"quasi\"],\"TemplateElement\":[],\"TemplateLiteral\":[\"quasis\",\"expressions\"],\"YieldExpression\":[\"argument\"],\"AnyTypeAnnotation\":[],\"ArrayTypeAnnotation\":[\"elementType\"],\"BooleanTypeAnnotation\":[],\"BooleanLiteralTypeAnnotation\":[],\"NullLiteralTypeAnnotation\":[],\"ClassImplements\":[\"id\",\"typeParameters\"],\"DeclareClass\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareFunction\":[\"id\"],\"DeclareInterface\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareModule\":[\"id\",\"body\"],\"DeclareModuleExports\":[\"typeAnnotation\"],\"DeclareTypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"DeclareOpaqueType\":[\"id\",\"typeParameters\",\"supertype\"],\"DeclareVariable\":[\"id\"],\"DeclareExportDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"DeclareExportAllDeclaration\":[\"source\"],\"DeclaredPredicate\":[\"value\"],\"ExistsTypeAnnotation\":[],\"FunctionTypeAnnotation\":[\"typeParameters\",\"params\",\"rest\",\"returnType\"],\"FunctionTypeParam\":[\"name\",\"typeAnnotation\"],\"GenericTypeAnnotation\":[\"id\",\"typeParameters\"],\"InferredPredicate\":[],\"InterfaceExtends\":[\"id\",\"typeParameters\"],\"InterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"InterfaceTypeAnnotation\":[\"extends\",\"body\"],\"IntersectionTypeAnnotation\":[\"types\"],\"MixedTypeAnnotation\":[],\"EmptyTypeAnnotation\":[],\"NullableTypeAnnotation\":[\"typeAnnotation\"],\"NumberLiteralTypeAnnotation\":[],\"NumberTypeAnnotation\":[],\"ObjectTypeAnnotation\":[\"properties\",\"indexers\",\"callProperties\",\"internalSlots\"],\"ObjectTypeInternalSlot\":[\"id\",\"value\",\"optional\",\"static\",\"method\"],\"ObjectTypeCallProperty\":[\"value\"],\"ObjectTypeIndexer\":[\"id\",\"key\",\"value\",\"variance\"],\"ObjectTypeProperty\":[\"key\",\"value\",\"variance\"],\"ObjectTypeSpreadProperty\":[\"argument\"],\"OpaqueType\":[\"id\",\"typeParameters\",\"supertype\",\"impltype\"],\"QualifiedTypeIdentifier\":[\"id\",\"qualification\"],\"StringLiteralTypeAnnotation\":[],\"StringTypeAnnotation\":[],\"ThisTypeAnnotation\":[],\"TupleTypeAnnotation\":[\"types\"],\"TypeofTypeAnnotation\":[\"argument\"],\"TypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"TypeAnnotation\":[\"typeAnnotation\"],\"TypeCastExpression\":[\"expression\",\"typeAnnotation\"],\"TypeParameter\":[\"bound\",\"default\",\"variance\"],\"TypeParameterDeclaration\":[\"params\"],\"TypeParameterInstantiation\":[\"params\"],\"UnionTypeAnnotation\":[\"types\"],\"Variance\":[],\"VoidTypeAnnotation\":[],\"JSXAttribute\":[\"name\",\"value\"],\"JSXClosingElement\":[\"name\"],\"JSXElement\":[\"openingElement\",\"children\",\"closingElement\"],\"JSXEmptyExpression\":[],\"JSXExpressionContainer\":[\"expression\"],\"JSXSpreadChild\":[\"expression\"],\"JSXIdentifier\":[],\"JSXMemberExpression\":[\"object\",\"property\"],\"JSXNamespacedName\":[\"namespace\",\"name\"],\"JSXOpeningElement\":[\"name\",\"attributes\"],\"JSXSpreadAttribute\":[\"argument\"],\"JSXText\":[],\"JSXFragment\":[\"openingFragment\",\"children\",\"closingFragment\"],\"JSXOpeningFragment\":[],\"JSXClosingFragment\":[],\"Noop\":[],\"ParenthesizedExpression\":[\"expression\"],\"AwaitExpression\":[\"argument\"],\"BindExpression\":[\"object\",\"callee\"],\"ClassProperty\":[\"key\",\"value\",\"typeAnnotation\",\"decorators\"],\"OptionalMemberExpression\":[\"object\",\"property\"],\"PipelineTopicExpression\":[\"expression\"],\"PipelineBareFunction\":[\"callee\"],\"PipelinePrimaryTopicReference\":[],\"OptionalCallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"ClassPrivateProperty\":[\"key\",\"value\"],\"ClassPrivateMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"Import\":[],\"Decorator\":[\"expression\"],\"DoExpression\":[\"body\"],\"ExportDefaultSpecifier\":[\"exported\"],\"ExportNamespaceSpecifier\":[\"exported\"],\"PrivateName\":[\"id\"],\"BigIntLiteral\":[],\"TSParameterProperty\":[\"parameter\"],\"TSDeclareFunction\":[\"id\",\"typeParameters\",\"params\",\"returnType\"],\"TSDeclareMethod\":[\"decorators\",\"key\",\"typeParameters\",\"params\",\"returnType\"],\"TSQualifiedName\":[\"left\",\"right\"],\"TSCallSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSPropertySignature\":[\"key\",\"typeAnnotation\",\"initializer\"],\"TSMethodSignature\":[\"key\",\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSIndexSignature\":[\"parameters\",\"typeAnnotation\"],\"TSAnyKeyword\":[],\"TSUnknownKeyword\":[],\"TSNumberKeyword\":[],\"TSObjectKeyword\":[],\"TSBooleanKeyword\":[],\"TSStringKeyword\":[],\"TSSymbolKeyword\":[],\"TSVoidKeyword\":[],\"TSUndefinedKeyword\":[],\"TSNullKeyword\":[],\"TSNeverKeyword\":[],\"TSThisType\":[],\"TSFunctionType\":[\"typeParameters\",\"typeAnnotation\"],\"TSConstructorType\":[\"typeParameters\",\"typeAnnotation\"],\"TSTypeReference\":[\"typeName\",\"typeParameters\"],\"TSTypePredicate\":[\"parameterName\",\"typeAnnotation\"],\"TSTypeQuery\":[\"exprName\"],\"TSTypeLiteral\":[\"members\"],\"TSArrayType\":[\"elementType\"],\"TSTupleType\":[\"elementTypes\"],\"TSOptionalType\":[\"typeAnnotation\"],\"TSRestType\":[\"typeAnnotation\"],\"TSUnionType\":[\"types\"],\"TSIntersectionType\":[\"types\"],\"TSConditionalType\":[\"checkType\",\"extendsType\",\"trueType\",\"falseType\"],\"TSInferType\":[\"typeParameter\"],\"TSParenthesizedType\":[\"typeAnnotation\"],\"TSTypeOperator\":[\"typeAnnotation\"],\"TSIndexedAccessType\":[\"objectType\",\"indexType\"],\"TSMappedType\":[\"typeParameter\",\"typeAnnotation\"],\"TSLiteralType\":[\"literal\"],\"TSExpressionWithTypeArguments\":[\"expression\",\"typeParameters\"],\"TSInterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"TSInterfaceBody\":[\"body\"],\"TSTypeAliasDeclaration\":[\"id\",\"typeParameters\",\"typeAnnotation\"],\"TSAsExpression\":[\"expression\",\"typeAnnotation\"],\"TSTypeAssertion\":[\"typeAnnotation\",\"expression\"],\"TSEnumDeclaration\":[\"id\",\"members\"],\"TSEnumMember\":[\"id\",\"initializer\"],\"TSModuleDeclaration\":[\"id\",\"body\"],\"TSModuleBlock\":[\"body\"],\"TSImportEqualsDeclaration\":[\"id\",\"moduleReference\"],\"TSExternalModuleReference\":[\"expression\"],\"TSNonNullExpression\":[\"expression\"],\"TSExportAssignment\":[\"expression\"],\"TSNamespaceExportDeclaration\":[\"id\"],\"TSTypeAnnotation\":[\"typeAnnotation\"],\"TSTypeParameterInstantiation\":[\"params\"],\"TSTypeParameterDeclaration\":[\"params\"],\"TSTypeParameter\":[\"constraint\",\"default\"]}",
    _powerAssertConfig = ["assert(value, [message])", "assert.ok(value, [message])", "assert.equal(actual, expected, [message])", "assert.notEqual(actual, expected, [message])", "assert.strictEqual(actual, expected, [message])", "assert.notStrictEqual(actual, expected, [message])", { pattern: "assert.deepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }],
    _am = {
  content: "assert(5 < actual && actual < 13)",
  filepath: "test/fixtures/LogicalExpression/fixture.js",
  line: 3,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"LogicalExpression\",\"operator\":\"&&\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"<\",\"left\":{\"type\":\"NumericLiteral\",\"value\":5,\"range\":[7,8]},\"right\":{\"type\":\"Identifier\",\"name\":\"actual\",\"range\":[11,17]},\"range\":[7,17]},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"<\",\"left\":{\"type\":\"Identifier\",\"name\":\"actual\",\"range\":[21,27]},\"right\":{\"type\":\"NumericLiteral\",\"value\":13,\"range\":[30,32]},\"range\":[21,32]},\"range\":[7,32]}],\"range\":[0,33]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"num\"},\"value\":5,\"range\":[7,8]},{\"type\":{\"label\":\"</>\"},\"value\":\"<\",\"range\":[9,10]},{\"type\":{\"label\":\"name\"},\"value\":\"actual\",\"range\":[11,17]},{\"type\":{\"label\":\"&&\"},\"value\":\"&&\",\"range\":[18,20]},{\"type\":{\"label\":\"name\"},\"value\":\"actual\",\"range\":[21,27]},{\"type\":{\"label\":\"</>\"},\"value\":\"<\",\"range\":[28,29]},{\"type\":{\"label\":\"num\"},\"value\":13,\"range\":[30,32]},{\"type\":{\"label\":\")\"},\"range\":[32,33]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ArgumentRecorder = function () { function ArgumentRecorder(callee, am, ag) { this._callee = callee; this._metadata = am; this._argDef = ag; this._logs = []; this._recorded = null; this._value = null; this._isBlock = false; if (am.config) { this.pattern = am.config.pattern; var argconf = am.config.args[ag.index]; this._isBlock = !!argconf.block; } } ArgumentRecorder.prototype.metadata = function metadata() { return this._metadata; }; ArgumentRecorder.prototype.code = function code() { return this._argDef.code; }; ArgumentRecorder.prototype.value = function value() { return this._value; }; ArgumentRecorder.prototype._tap = function _tap(value, espath) { this._logs.push({ value: wrap(value), espath: espath }); return value; }; ArgumentRecorder.prototype._rec = function _rec(value, espath) { var empowered = this._callee && this._callee._empowered; try { if (!empowered) return value; var log = { value: wrap(value), espath: espath }; this._logs.push(log); if (this._isBlock && empowered && typeof value === 'function') { value = new Proxy(value, { apply: function apply(target, thisArg, argumentsList) { var ret; try { ret = target.apply(thisArg, argumentsList); log.value = wrap(ret); } catch (e) { log.value = e; throw e; } return ret; } }); } this._recorded = { value: value, logs: [].concat(this._logs) }; return this; } finally { this._value = value; this._logs = []; } }; ArgumentRecorder.prototype.eject = function eject() { var result = this._recorded; this._recorded = null; this._value = null; return result; }; function isPromiseLike(o) { return o !== null && _typeof(o) === 'object' && typeof o.then === 'function' && typeof o.catch === 'function'; } function $Promise$(prms) { this.status = 'pending'; prms.then(mark(this, 'resolved'), mark(this, 'rejected')); } function mark(_this, s) { return function () { var args = Array.prototype.slice.apply(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; } function wrap(v) { return isPromiseLike(v) ? new $Promise$(v) : v; } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am, {
  espath: "arguments/0",
  code: "5 < actual && actual < 13",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _AssertionMessage = function () { function AssertionMessage(argRecs, metadata, message) { this._argRecs = argRecs; this._metadata = metadata; this._message = message; } AssertionMessage.prototype.value = function value() { if (this._message && typeof this._message.value === 'function') { return this._message.value(); } else { return this._message; } }; AssertionMessage.prototype.eject = function eject() { if (this._message && typeof this._message.eject === 'function') { return this._message.eject(); } else { return { value: this.value(), logs: [] }; } }; AssertionMessage.prototype.toString = function toString() { var message = this._message ? this._message : ''; message += '\n----------'; message += '\n  code: ' + this._metadata.content; message += '\n  line: ' + this._metadata.filepath + ':' + this._metadata.line; var argRec; for (var i = 0; i < this._argRecs.length; i += 1) { argRec = this._argRecs[i]; message += '\n  arg' + i + ': '; message += '\n    code: ' + argRec.code(); message += '\n    value: ' + argRec.value(); message += '\n    type: ' + _typeof(argRec.value()); } message += '\n'; message += '[NOTICE] configure power-assert for more verbose report. see: https://github.com/power-assert-js/power-assert'; message += '\n----------'; return message; }; return AssertionMessage; }(),
    _am2 = {
  content: "assert.ok(actual < 5 || 13 < actual)",
  filepath: "test/fixtures/LogicalExpression/fixture.js",
  line: 5,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"property\":{\"type\":\"Identifier\",\"name\":\"ok\",\"range\":[7,9]},\"computed\":false,\"range\":[0,9]},\"arguments\":[{\"type\":\"LogicalExpression\",\"operator\":\"||\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"<\",\"left\":{\"type\":\"Identifier\",\"name\":\"actual\",\"range\":[10,16]},\"right\":{\"type\":\"NumericLiteral\",\"value\":5,\"range\":[19,20]},\"range\":[10,20]},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"<\",\"left\":{\"type\":\"NumericLiteral\",\"value\":13,\"range\":[24,26]},\"right\":{\"type\":\"Identifier\",\"name\":\"actual\",\"range\":[29,35]},\"range\":[24,35]},\"range\":[10,35]}],\"range\":[0,36]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\".\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"ok\",\"range\":[7,9]},{\"type\":{\"label\":\"(\"},\"range\":[9,10]},{\"type\":{\"label\":\"name\"},\"value\":\"actual\",\"range\":[10,16]},{\"type\":{\"label\":\"</>\"},\"value\":\"<\",\"range\":[17,18]},{\"type\":{\"label\":\"num\"},\"value\":5,\"range\":[19,20]},{\"type\":{\"label\":\"||\"},\"value\":\"||\",\"range\":[21,23]},{\"type\":{\"label\":\"num\"},\"value\":13,\"range\":[24,26]},{\"type\":{\"label\":\"</>\"},\"value\":\"<\",\"range\":[27,28]},{\"type\":{\"label\":\"name\"},\"value\":\"actual\",\"range\":[29,35]},{\"type\":{\"label\":\")\"},\"range\":[35,36]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[1]
},
    _ag2 = new _ArgumentRecorder(assert.ok, _am2, {
  espath: "arguments/0",
  code: "actual < 5 || 13 < actual",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am3 = {
  content: "assert(2 > actual && actual < 13)",
  filepath: "test/fixtures/LogicalExpression/fixture.js",
  line: 7,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"LogicalExpression\",\"operator\":\"&&\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\">\",\"left\":{\"type\":\"NumericLiteral\",\"value\":2,\"range\":[7,8]},\"right\":{\"type\":\"Identifier\",\"name\":\"actual\",\"range\":[11,17]},\"range\":[7,17]},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"<\",\"left\":{\"type\":\"Identifier\",\"name\":\"actual\",\"range\":[21,27]},\"right\":{\"type\":\"NumericLiteral\",\"value\":13,\"range\":[30,32]},\"range\":[21,32]},\"range\":[7,32]}],\"range\":[0,33]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"num\"},\"value\":2,\"range\":[7,8]},{\"type\":{\"label\":\"</>\"},\"value\":\">\",\"range\":[9,10]},{\"type\":{\"label\":\"name\"},\"value\":\"actual\",\"range\":[11,17]},{\"type\":{\"label\":\"&&\"},\"value\":\"&&\",\"range\":[18,20]},{\"type\":{\"label\":\"name\"},\"value\":\"actual\",\"range\":[21,27]},{\"type\":{\"label\":\"</>\"},\"value\":\"<\",\"range\":[28,29]},{\"type\":{\"label\":\"num\"},\"value\":13,\"range\":[30,32]},{\"type\":{\"label\":\")\"},\"range\":[32,33]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag3 = new _ArgumentRecorder(assert, _am3, {
  espath: "arguments/0",
  code: "2 > actual && actual < 13",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am4 = {
  content: "assert(2 > actual && actual < 13)",
  filepath: "test/fixtures/LogicalExpression/fixture.js",
  line: 9,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"LogicalExpression\",\"operator\":\"&&\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\">\",\"left\":{\"type\":\"NumericLiteral\",\"value\":2,\"range\":[7,8]},\"right\":{\"type\":\"Identifier\",\"name\":\"actual\",\"range\":[11,17]},\"range\":[7,17]},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"<\",\"left\":{\"type\":\"Identifier\",\"name\":\"actual\",\"range\":[21,27]},\"right\":{\"type\":\"NumericLiteral\",\"value\":13,\"range\":[30,32]},\"range\":[21,32]},\"range\":[7,32]}],\"range\":[0,33]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"num\"},\"value\":2,\"range\":[7,8]},{\"type\":{\"label\":\"</>\"},\"value\":\">\",\"range\":[9,10]},{\"type\":{\"label\":\"name\"},\"value\":\"actual\",\"range\":[11,17]},{\"type\":{\"label\":\"&&\"},\"value\":\"&&\",\"range\":[18,20]},{\"type\":{\"label\":\"name\"},\"value\":\"actual\",\"range\":[21,27]},{\"type\":{\"label\":\"</>\"},\"value\":\"<\",\"range\":[28,29]},{\"type\":{\"label\":\"num\"},\"value\":13,\"range\":[30,32]},{\"type\":{\"label\":\")\"},\"range\":[32,33]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag4 = new _ArgumentRecorder(assert, _am4, {
  espath: "arguments/0",
  code: "2 > actual && actual < 13",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am5 = {
  content: "assert.equal(5 < actual && actual < 13, falsy)",
  filepath: "test/fixtures/LogicalExpression/fixture.js",
  line: 11,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"property\":{\"type\":\"Identifier\",\"name\":\"equal\",\"range\":[7,12]},\"computed\":false,\"range\":[0,12]},\"arguments\":[{\"type\":\"LogicalExpression\",\"operator\":\"&&\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"<\",\"left\":{\"type\":\"NumericLiteral\",\"value\":5,\"range\":[13,14]},\"right\":{\"type\":\"Identifier\",\"name\":\"actual\",\"range\":[17,23]},\"range\":[13,23]},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"<\",\"left\":{\"type\":\"Identifier\",\"name\":\"actual\",\"range\":[27,33]},\"right\":{\"type\":\"NumericLiteral\",\"value\":13,\"range\":[36,38]},\"range\":[27,38]},\"range\":[13,38]},{\"type\":\"Identifier\",\"name\":\"falsy\",\"range\":[40,45]}],\"range\":[0,46]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\".\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"equal\",\"range\":[7,12]},{\"type\":{\"label\":\"(\"},\"range\":[12,13]},{\"type\":{\"label\":\"num\"},\"value\":5,\"range\":[13,14]},{\"type\":{\"label\":\"</>\"},\"value\":\"<\",\"range\":[15,16]},{\"type\":{\"label\":\"name\"},\"value\":\"actual\",\"range\":[17,23]},{\"type\":{\"label\":\"&&\"},\"value\":\"&&\",\"range\":[24,26]},{\"type\":{\"label\":\"name\"},\"value\":\"actual\",\"range\":[27,33]},{\"type\":{\"label\":\"</>\"},\"value\":\"<\",\"range\":[34,35]},{\"type\":{\"label\":\"num\"},\"value\":13,\"range\":[36,38]},{\"type\":{\"label\":\",\"},\"range\":[38,39]},{\"type\":{\"label\":\"name\"},\"value\":\"falsy\",\"range\":[40,45]},{\"type\":{\"label\":\")\"},\"range\":[45,46]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[2]
},
    _ag5 = new _ArgumentRecorder(assert.equal, _am5, {
  espath: "arguments/0",
  code: "5 < actual && actual < 13",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag6 = new _ArgumentRecorder(assert.equal, _am5, {
  espath: "arguments/1",
  code: "falsy",
  index: 1,
  name: "expected",
  kind: "mandatory"
});

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

assert(_ag._rec(_ag._tap(5 < _ag._tap(actual, "arguments/0/left/right"), "arguments/0/left") && _ag._tap(_ag._tap(actual, "arguments/0/right/left") < 13, "arguments/0/right"), "arguments/0"), new _AssertionMessage([_ag], _am));
assert.ok(_ag2._rec(_ag2._tap(_ag2._tap(actual, "arguments/0/left/left") < 5, "arguments/0/left") || _ag2._tap(13 < _ag2._tap(actual, "arguments/0/right/right"), "arguments/0/right"), "arguments/0"), new _AssertionMessage([_ag2], _am2));
assert(_ag3._rec(_ag3._tap(2 > _ag3._tap(actual, "arguments/0/left/right"), "arguments/0/left") && _ag3._tap(_ag3._tap(actual, "arguments/0/right/left") < 13, "arguments/0/right"), "arguments/0"), new _AssertionMessage([_ag3], _am3));
assert(_ag4._rec(_ag4._tap(2 > _ag4._tap(actual, "arguments/0/left/right"), "arguments/0/left") && _ag4._tap(_ag4._tap(actual, "arguments/0/right/left") < 13, "arguments/0/right"), "arguments/0"), new _AssertionMessage([_ag4], _am4));
assert.equal(_ag5._rec(_ag5._tap(5 < _ag5._tap(actual, "arguments/0/left/right"), "arguments/0/left") && _ag5._tap(_ag5._tap(actual, "arguments/0/right/left") < 13, "arguments/0/right"), "arguments/0"), _ag6._rec(falsy, "arguments/1"), new _AssertionMessage([_ag5, _ag6], _am5));
