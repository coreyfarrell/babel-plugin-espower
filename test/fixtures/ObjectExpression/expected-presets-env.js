'use strict';

var _powerAssertVisitorKeys = "{\"ArrayExpression\":[\"elements\"],\"AssignmentExpression\":[\"left\",\"right\"],\"BinaryExpression\":[\"left\",\"right\"],\"InterpreterDirective\":[],\"Directive\":[\"value\"],\"DirectiveLiteral\":[],\"BlockStatement\":[\"directives\",\"body\"],\"BreakStatement\":[\"label\"],\"CallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"CatchClause\":[\"param\",\"body\"],\"ConditionalExpression\":[\"test\",\"consequent\",\"alternate\"],\"ContinueStatement\":[\"label\"],\"DebuggerStatement\":[],\"DoWhileStatement\":[\"test\",\"body\"],\"EmptyStatement\":[],\"ExpressionStatement\":[\"expression\"],\"File\":[\"program\"],\"ForInStatement\":[\"left\",\"right\",\"body\"],\"ForStatement\":[\"init\",\"test\",\"update\",\"body\"],\"FunctionDeclaration\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"FunctionExpression\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"Identifier\":[\"typeAnnotation\"],\"IfStatement\":[\"test\",\"consequent\",\"alternate\"],\"LabeledStatement\":[\"label\",\"body\"],\"StringLiteral\":[],\"NumericLiteral\":[],\"NullLiteral\":[],\"BooleanLiteral\":[],\"RegExpLiteral\":[],\"LogicalExpression\":[\"left\",\"right\"],\"MemberExpression\":[\"object\",\"property\"],\"NewExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"Program\":[\"directives\",\"body\"],\"ObjectExpression\":[\"properties\"],\"ObjectMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectProperty\":[\"key\",\"value\",\"decorators\"],\"RestElement\":[\"argument\",\"typeAnnotation\"],\"ReturnStatement\":[\"argument\"],\"SequenceExpression\":[\"expressions\"],\"SwitchCase\":[\"test\",\"consequent\"],\"SwitchStatement\":[\"discriminant\",\"cases\"],\"ThisExpression\":[],\"ThrowStatement\":[\"argument\"],\"TryStatement\":[\"block\",\"handler\",\"finalizer\"],\"UnaryExpression\":[\"argument\"],\"UpdateExpression\":[\"argument\"],\"VariableDeclaration\":[\"declarations\"],\"VariableDeclarator\":[\"id\",\"init\"],\"WhileStatement\":[\"test\",\"body\"],\"WithStatement\":[\"object\",\"body\"],\"AssignmentPattern\":[\"left\",\"right\"],\"ArrayPattern\":[\"elements\",\"typeAnnotation\"],\"ArrowFunctionExpression\":[\"params\",\"body\",\"returnType\",\"typeParameters\"],\"ClassBody\":[\"body\"],\"ClassDeclaration\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ClassExpression\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ExportAllDeclaration\":[\"source\"],\"ExportDefaultDeclaration\":[\"declaration\"],\"ExportNamedDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"ExportSpecifier\":[\"local\",\"exported\"],\"ForOfStatement\":[\"left\",\"right\",\"body\"],\"ImportDeclaration\":[\"specifiers\",\"source\"],\"ImportDefaultSpecifier\":[\"local\"],\"ImportNamespaceSpecifier\":[\"local\"],\"ImportSpecifier\":[\"local\",\"imported\"],\"MetaProperty\":[\"meta\",\"property\"],\"ClassMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectPattern\":[\"properties\",\"typeAnnotation\"],\"SpreadElement\":[\"argument\"],\"Super\":[],\"TaggedTemplateExpression\":[\"tag\",\"quasi\"],\"TemplateElement\":[],\"TemplateLiteral\":[\"quasis\",\"expressions\"],\"YieldExpression\":[\"argument\"],\"AnyTypeAnnotation\":[],\"ArrayTypeAnnotation\":[\"elementType\"],\"BooleanTypeAnnotation\":[],\"BooleanLiteralTypeAnnotation\":[],\"NullLiteralTypeAnnotation\":[],\"ClassImplements\":[\"id\",\"typeParameters\"],\"DeclareClass\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareFunction\":[\"id\"],\"DeclareInterface\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareModule\":[\"id\",\"body\"],\"DeclareModuleExports\":[\"typeAnnotation\"],\"DeclareTypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"DeclareOpaqueType\":[\"id\",\"typeParameters\",\"supertype\"],\"DeclareVariable\":[\"id\"],\"DeclareExportDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"DeclareExportAllDeclaration\":[\"source\"],\"DeclaredPredicate\":[\"value\"],\"ExistsTypeAnnotation\":[],\"FunctionTypeAnnotation\":[\"typeParameters\",\"params\",\"rest\",\"returnType\"],\"FunctionTypeParam\":[\"name\",\"typeAnnotation\"],\"GenericTypeAnnotation\":[\"id\",\"typeParameters\"],\"InferredPredicate\":[],\"InterfaceExtends\":[\"id\",\"typeParameters\"],\"InterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"InterfaceTypeAnnotation\":[\"extends\",\"body\"],\"IntersectionTypeAnnotation\":[\"types\"],\"MixedTypeAnnotation\":[],\"EmptyTypeAnnotation\":[],\"NullableTypeAnnotation\":[\"typeAnnotation\"],\"NumberLiteralTypeAnnotation\":[],\"NumberTypeAnnotation\":[],\"ObjectTypeAnnotation\":[\"properties\",\"indexers\",\"callProperties\",\"internalSlots\"],\"ObjectTypeInternalSlot\":[\"id\",\"value\",\"optional\",\"static\",\"method\"],\"ObjectTypeCallProperty\":[\"value\"],\"ObjectTypeIndexer\":[\"id\",\"key\",\"value\",\"variance\"],\"ObjectTypeProperty\":[\"key\",\"value\",\"variance\"],\"ObjectTypeSpreadProperty\":[\"argument\"],\"OpaqueType\":[\"id\",\"typeParameters\",\"supertype\",\"impltype\"],\"QualifiedTypeIdentifier\":[\"id\",\"qualification\"],\"StringLiteralTypeAnnotation\":[],\"StringTypeAnnotation\":[],\"ThisTypeAnnotation\":[],\"TupleTypeAnnotation\":[\"types\"],\"TypeofTypeAnnotation\":[\"argument\"],\"TypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"TypeAnnotation\":[\"typeAnnotation\"],\"TypeCastExpression\":[\"expression\",\"typeAnnotation\"],\"TypeParameter\":[\"bound\",\"default\",\"variance\"],\"TypeParameterDeclaration\":[\"params\"],\"TypeParameterInstantiation\":[\"params\"],\"UnionTypeAnnotation\":[\"types\"],\"Variance\":[],\"VoidTypeAnnotation\":[],\"JSXAttribute\":[\"name\",\"value\"],\"JSXClosingElement\":[\"name\"],\"JSXElement\":[\"openingElement\",\"children\",\"closingElement\"],\"JSXEmptyExpression\":[],\"JSXExpressionContainer\":[\"expression\"],\"JSXSpreadChild\":[\"expression\"],\"JSXIdentifier\":[],\"JSXMemberExpression\":[\"object\",\"property\"],\"JSXNamespacedName\":[\"namespace\",\"name\"],\"JSXOpeningElement\":[\"name\",\"attributes\"],\"JSXSpreadAttribute\":[\"argument\"],\"JSXText\":[],\"JSXFragment\":[\"openingFragment\",\"children\",\"closingFragment\"],\"JSXOpeningFragment\":[],\"JSXClosingFragment\":[],\"Noop\":[],\"ParenthesizedExpression\":[\"expression\"],\"AwaitExpression\":[\"argument\"],\"BindExpression\":[\"object\",\"callee\"],\"ClassProperty\":[\"key\",\"value\",\"typeAnnotation\",\"decorators\"],\"OptionalMemberExpression\":[\"object\",\"property\"],\"PipelineTopicExpression\":[\"expression\"],\"PipelineBareFunction\":[\"callee\"],\"PipelinePrimaryTopicReference\":[],\"OptionalCallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"ClassPrivateProperty\":[\"key\",\"value\"],\"ClassPrivateMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"Import\":[],\"Decorator\":[\"expression\"],\"DoExpression\":[\"body\"],\"ExportDefaultSpecifier\":[\"exported\"],\"ExportNamespaceSpecifier\":[\"exported\"],\"PrivateName\":[\"id\"],\"BigIntLiteral\":[],\"TSParameterProperty\":[\"parameter\"],\"TSDeclareFunction\":[\"id\",\"typeParameters\",\"params\",\"returnType\"],\"TSDeclareMethod\":[\"decorators\",\"key\",\"typeParameters\",\"params\",\"returnType\"],\"TSQualifiedName\":[\"left\",\"right\"],\"TSCallSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSPropertySignature\":[\"key\",\"typeAnnotation\",\"initializer\"],\"TSMethodSignature\":[\"key\",\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSIndexSignature\":[\"parameters\",\"typeAnnotation\"],\"TSAnyKeyword\":[],\"TSUnknownKeyword\":[],\"TSNumberKeyword\":[],\"TSObjectKeyword\":[],\"TSBooleanKeyword\":[],\"TSStringKeyword\":[],\"TSSymbolKeyword\":[],\"TSVoidKeyword\":[],\"TSUndefinedKeyword\":[],\"TSNullKeyword\":[],\"TSNeverKeyword\":[],\"TSThisType\":[],\"TSFunctionType\":[\"typeParameters\",\"typeAnnotation\"],\"TSConstructorType\":[\"typeParameters\",\"typeAnnotation\"],\"TSTypeReference\":[\"typeName\",\"typeParameters\"],\"TSTypePredicate\":[\"parameterName\",\"typeAnnotation\"],\"TSTypeQuery\":[\"exprName\"],\"TSTypeLiteral\":[\"members\"],\"TSArrayType\":[\"elementType\"],\"TSTupleType\":[\"elementTypes\"],\"TSOptionalType\":[\"typeAnnotation\"],\"TSRestType\":[\"typeAnnotation\"],\"TSUnionType\":[\"types\"],\"TSIntersectionType\":[\"types\"],\"TSConditionalType\":[\"checkType\",\"extendsType\",\"trueType\",\"falseType\"],\"TSInferType\":[\"typeParameter\"],\"TSParenthesizedType\":[\"typeAnnotation\"],\"TSTypeOperator\":[\"typeAnnotation\"],\"TSIndexedAccessType\":[\"objectType\",\"indexType\"],\"TSMappedType\":[\"typeParameter\",\"typeAnnotation\"],\"TSLiteralType\":[\"literal\"],\"TSExpressionWithTypeArguments\":[\"expression\",\"typeParameters\"],\"TSInterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"TSInterfaceBody\":[\"body\"],\"TSTypeAliasDeclaration\":[\"id\",\"typeParameters\",\"typeAnnotation\"],\"TSAsExpression\":[\"expression\",\"typeAnnotation\"],\"TSTypeAssertion\":[\"typeAnnotation\",\"expression\"],\"TSEnumDeclaration\":[\"id\",\"members\"],\"TSEnumMember\":[\"id\",\"initializer\"],\"TSModuleDeclaration\":[\"id\",\"body\"],\"TSModuleBlock\":[\"body\"],\"TSImportEqualsDeclaration\":[\"id\",\"moduleReference\"],\"TSExternalModuleReference\":[\"expression\"],\"TSNonNullExpression\":[\"expression\"],\"TSExportAssignment\":[\"expression\"],\"TSNamespaceExportDeclaration\":[\"id\"],\"TSTypeAnnotation\":[\"typeAnnotation\"],\"TSTypeParameterInstantiation\":[\"params\"],\"TSTypeParameterDeclaration\":[\"params\"],\"TSTypeParameter\":[\"constraint\",\"default\"]}",
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt({
  foo: _rec._capt(bar, "arguments/0/properties/0/value"),
  hoge: _rec._capt(fuga, "arguments/0/properties/1/value")
}, "arguments/0"), {
  content: "assert({ foo: bar, hoge: fuga })",
  filepath: "test/fixtures/ObjectExpression/fixture.js",
  line: 3,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"ObjectExpression\",\"properties\":[{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[9,12]},\"value\":{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[14,17]},\"computed\":false,\"shorthand\":false,\"range\":[9,17]},{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"hoge\",\"range\":[19,23]},\"value\":{\"type\":\"Identifier\",\"name\":\"fuga\",\"range\":[25,29]},\"computed\":false,\"shorthand\":false,\"range\":[19,29]}],\"range\":[7,31]}],\"range\":[0,32]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"{\"},\"range\":[7,8]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[9,12]},{\"type\":{\"label\":\":\"},\"range\":[12,13]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[14,17]},{\"type\":{\"label\":\",\"},\"range\":[17,18]},{\"type\":{\"label\":\"name\"},\"value\":\"hoge\",\"range\":[19,23]},{\"type\":{\"label\":\":\"},\"range\":[23,24]},{\"type\":{\"label\":\"name\"},\"value\":\"fuga\",\"range\":[25,29]},{\"type\":{\"label\":\"}\"},\"range\":[30,31]},{\"type\":{\"label\":\")\"},\"range\":[31,32]}]",
  visitorKeys: _powerAssertVisitorKeys
}));
assert(_rec2._expr(_rec2._capt(!_rec2._capt({
  foo: _rec2._capt(_rec2._capt(bar, "arguments/0/argument/properties/0/value/object").baz, "arguments/0/argument/properties/0/value"),
  name: _rec2._capt(nameOf(_rec2._capt({
    firstName: _rec2._capt(first, "arguments/0/argument/properties/1/value/arguments/0/properties/0/value"),
    lastName: _rec2._capt(last, "arguments/0/argument/properties/1/value/arguments/0/properties/1/value")
  }, "arguments/0/argument/properties/1/value/arguments/0")), "arguments/0/argument/properties/1/value")
}, "arguments/0/argument"), "arguments/0"), {
  content: "assert(!{ foo: bar.baz, name: nameOf({ firstName: first, lastName: last }) })",
  filepath: "test/fixtures/ObjectExpression/fixture.js",
  line: 5,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"UnaryExpression\",\"operator\":\"!\",\"argument\":{\"type\":\"ObjectExpression\",\"properties\":[{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[10,13]},\"value\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[15,18]},\"property\":{\"type\":\"Identifier\",\"name\":\"baz\",\"range\":[19,22]},\"computed\":false,\"range\":[15,22]},\"computed\":false,\"shorthand\":false,\"range\":[10,22]},{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"name\",\"range\":[24,28]},\"value\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"nameOf\",\"range\":[30,36]},\"arguments\":[{\"type\":\"ObjectExpression\",\"properties\":[{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"firstName\",\"range\":[39,48]},\"value\":{\"type\":\"Identifier\",\"name\":\"first\",\"range\":[50,55]},\"computed\":false,\"shorthand\":false,\"range\":[39,55]},{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"lastName\",\"range\":[57,65]},\"value\":{\"type\":\"Identifier\",\"name\":\"last\",\"range\":[67,71]},\"computed\":false,\"shorthand\":false,\"range\":[57,71]}],\"range\":[37,73]}],\"range\":[30,74]},\"computed\":false,\"shorthand\":false,\"range\":[24,74]}],\"range\":[8,76]},\"prefix\":true,\"range\":[7,76]}],\"range\":[0,77]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"!\"},\"value\":\"!\",\"range\":[7,8]},{\"type\":{\"label\":\"{\"},\"range\":[8,9]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[10,13]},{\"type\":{\"label\":\":\"},\"range\":[13,14]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[15,18]},{\"type\":{\"label\":\".\"},\"range\":[18,19]},{\"type\":{\"label\":\"name\"},\"value\":\"baz\",\"range\":[19,22]},{\"type\":{\"label\":\",\"},\"range\":[22,23]},{\"type\":{\"label\":\"name\"},\"value\":\"name\",\"range\":[24,28]},{\"type\":{\"label\":\":\"},\"range\":[28,29]},{\"type\":{\"label\":\"name\"},\"value\":\"nameOf\",\"range\":[30,36]},{\"type\":{\"label\":\"(\"},\"range\":[36,37]},{\"type\":{\"label\":\"{\"},\"range\":[37,38]},{\"type\":{\"label\":\"name\"},\"value\":\"firstName\",\"range\":[39,48]},{\"type\":{\"label\":\":\"},\"range\":[48,49]},{\"type\":{\"label\":\"name\"},\"value\":\"first\",\"range\":[50,55]},{\"type\":{\"label\":\",\"},\"range\":[55,56]},{\"type\":{\"label\":\"name\"},\"value\":\"lastName\",\"range\":[57,65]},{\"type\":{\"label\":\":\"},\"range\":[65,66]},{\"type\":{\"label\":\"name\"},\"value\":\"last\",\"range\":[67,71]},{\"type\":{\"label\":\"}\"},\"range\":[72,73]},{\"type\":{\"label\":\")\"},\"range\":[73,74]},{\"type\":{\"label\":\"}\"},\"range\":[75,76]},{\"type\":{\"label\":\")\"},\"range\":[76,77]}]",
  visitorKeys: _powerAssertVisitorKeys
}));
assert.deepEqual(_rec3._expr(_rec3._capt({
  foo: _rec3._capt(bar, "arguments/0/properties/0/value"),
  hoge: _rec3._capt(fuga, "arguments/0/properties/1/value")
}, "arguments/0"), {
  content: "assert.deepEqual({ foo: bar, hoge: fuga }, { hoge: fuga, foo: bar })",
  filepath: "test/fixtures/ObjectExpression/fixture.js",
  line: 7,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"property\":{\"type\":\"Identifier\",\"name\":\"deepEqual\",\"range\":[7,16]},\"computed\":false,\"range\":[0,16]},\"arguments\":[{\"type\":\"ObjectExpression\",\"properties\":[{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[19,22]},\"value\":{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[24,27]},\"computed\":false,\"shorthand\":false,\"range\":[19,27]},{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"hoge\",\"range\":[29,33]},\"value\":{\"type\":\"Identifier\",\"name\":\"fuga\",\"range\":[35,39]},\"computed\":false,\"shorthand\":false,\"range\":[29,39]}],\"range\":[17,41]},{\"type\":\"ObjectExpression\",\"properties\":[{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"hoge\",\"range\":[45,49]},\"value\":{\"type\":\"Identifier\",\"name\":\"fuga\",\"range\":[51,55]},\"computed\":false,\"shorthand\":false,\"range\":[45,55]},{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[57,60]},\"value\":{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[62,65]},\"computed\":false,\"shorthand\":false,\"range\":[57,65]}],\"range\":[43,67]}],\"range\":[0,68]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\".\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"deepEqual\",\"range\":[7,16]},{\"type\":{\"label\":\"(\"},\"range\":[16,17]},{\"type\":{\"label\":\"{\"},\"range\":[17,18]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[19,22]},{\"type\":{\"label\":\":\"},\"range\":[22,23]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[24,27]},{\"type\":{\"label\":\",\"},\"range\":[27,28]},{\"type\":{\"label\":\"name\"},\"value\":\"hoge\",\"range\":[29,33]},{\"type\":{\"label\":\":\"},\"range\":[33,34]},{\"type\":{\"label\":\"name\"},\"value\":\"fuga\",\"range\":[35,39]},{\"type\":{\"label\":\"}\"},\"range\":[40,41]},{\"type\":{\"label\":\",\"},\"range\":[41,42]},{\"type\":{\"label\":\"{\"},\"range\":[43,44]},{\"type\":{\"label\":\"name\"},\"value\":\"hoge\",\"range\":[45,49]},{\"type\":{\"label\":\":\"},\"range\":[49,50]},{\"type\":{\"label\":\"name\"},\"value\":\"fuga\",\"range\":[51,55]},{\"type\":{\"label\":\",\"},\"range\":[55,56]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[57,60]},{\"type\":{\"label\":\":\"},\"range\":[60,61]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[62,65]},{\"type\":{\"label\":\"}\"},\"range\":[66,67]},{\"type\":{\"label\":\")\"},\"range\":[67,68]}]",
  visitorKeys: _powerAssertVisitorKeys
}), _rec4._expr(_rec4._capt({
  hoge: _rec4._capt(fuga, "arguments/1/properties/0/value"),
  foo: _rec4._capt(bar, "arguments/1/properties/1/value")
}, "arguments/1"), {
  content: "assert.deepEqual({ foo: bar, hoge: fuga }, { hoge: fuga, foo: bar })",
  filepath: "test/fixtures/ObjectExpression/fixture.js",
  line: 7,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"property\":{\"type\":\"Identifier\",\"name\":\"deepEqual\",\"range\":[7,16]},\"computed\":false,\"range\":[0,16]},\"arguments\":[{\"type\":\"ObjectExpression\",\"properties\":[{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[19,22]},\"value\":{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[24,27]},\"computed\":false,\"shorthand\":false,\"range\":[19,27]},{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"hoge\",\"range\":[29,33]},\"value\":{\"type\":\"Identifier\",\"name\":\"fuga\",\"range\":[35,39]},\"computed\":false,\"shorthand\":false,\"range\":[29,39]}],\"range\":[17,41]},{\"type\":\"ObjectExpression\",\"properties\":[{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"hoge\",\"range\":[45,49]},\"value\":{\"type\":\"Identifier\",\"name\":\"fuga\",\"range\":[51,55]},\"computed\":false,\"shorthand\":false,\"range\":[45,55]},{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[57,60]},\"value\":{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[62,65]},\"computed\":false,\"shorthand\":false,\"range\":[57,65]}],\"range\":[43,67]}],\"range\":[0,68]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\".\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"deepEqual\",\"range\":[7,16]},{\"type\":{\"label\":\"(\"},\"range\":[16,17]},{\"type\":{\"label\":\"{\"},\"range\":[17,18]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[19,22]},{\"type\":{\"label\":\":\"},\"range\":[22,23]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[24,27]},{\"type\":{\"label\":\",\"},\"range\":[27,28]},{\"type\":{\"label\":\"name\"},\"value\":\"hoge\",\"range\":[29,33]},{\"type\":{\"label\":\":\"},\"range\":[33,34]},{\"type\":{\"label\":\"name\"},\"value\":\"fuga\",\"range\":[35,39]},{\"type\":{\"label\":\"}\"},\"range\":[40,41]},{\"type\":{\"label\":\",\"},\"range\":[41,42]},{\"type\":{\"label\":\"{\"},\"range\":[43,44]},{\"type\":{\"label\":\"name\"},\"value\":\"hoge\",\"range\":[45,49]},{\"type\":{\"label\":\":\"},\"range\":[49,50]},{\"type\":{\"label\":\"name\"},\"value\":\"fuga\",\"range\":[51,55]},{\"type\":{\"label\":\",\"},\"range\":[55,56]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[57,60]},{\"type\":{\"label\":\":\"},\"range\":[60,61]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[62,65]},{\"type\":{\"label\":\"}\"},\"range\":[66,67]},{\"type\":{\"label\":\")\"},\"range\":[67,68]}]",
  visitorKeys: _powerAssertVisitorKeys
}));
