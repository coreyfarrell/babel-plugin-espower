'use strict';

var _powerAssertVisitorKeys = "{\"ArrayExpression\":[\"elements\"],\"AssignmentExpression\":[\"left\",\"right\"],\"BinaryExpression\":[\"left\",\"right\"],\"Directive\":[\"value\"],\"DirectiveLiteral\":[],\"BlockStatement\":[\"directives\",\"body\"],\"BreakStatement\":[\"label\"],\"CallExpression\":[\"callee\",\"arguments\",\"typeParameters\"],\"CatchClause\":[\"param\",\"body\"],\"ConditionalExpression\":[\"test\",\"consequent\",\"alternate\"],\"ContinueStatement\":[\"label\"],\"DebuggerStatement\":[],\"DoWhileStatement\":[\"test\",\"body\"],\"EmptyStatement\":[],\"ExpressionStatement\":[\"expression\"],\"File\":[\"program\"],\"ForInStatement\":[\"left\",\"right\",\"body\"],\"ForStatement\":[\"init\",\"test\",\"update\",\"body\"],\"FunctionDeclaration\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"FunctionExpression\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"Identifier\":[\"typeAnnotation\"],\"IfStatement\":[\"test\",\"consequent\",\"alternate\"],\"LabeledStatement\":[\"label\",\"body\"],\"StringLiteral\":[],\"NumericLiteral\":[],\"NullLiteral\":[],\"BooleanLiteral\":[],\"RegExpLiteral\":[],\"LogicalExpression\":[\"left\",\"right\"],\"MemberExpression\":[\"object\",\"property\"],\"NewExpression\":[\"callee\",\"arguments\",\"typeParameters\"],\"Program\":[\"directives\",\"body\"],\"ObjectExpression\":[\"properties\"],\"ObjectMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectProperty\":[\"key\",\"value\",\"decorators\"],\"RestElement\":[\"argument\",\"typeAnnotation\"],\"ReturnStatement\":[\"argument\"],\"SequenceExpression\":[\"expressions\"],\"SwitchCase\":[\"test\",\"consequent\"],\"SwitchStatement\":[\"discriminant\",\"cases\"],\"ThisExpression\":[],\"ThrowStatement\":[\"argument\"],\"TryStatement\":[\"block\",\"handler\",\"finalizer\"],\"UnaryExpression\":[\"argument\"],\"UpdateExpression\":[\"argument\"],\"VariableDeclaration\":[\"declarations\"],\"VariableDeclarator\":[\"id\",\"init\"],\"WhileStatement\":[\"test\",\"body\"],\"WithStatement\":[\"object\",\"body\"],\"AssignmentPattern\":[\"left\",\"right\"],\"ArrayPattern\":[\"elements\",\"typeAnnotation\"],\"ArrowFunctionExpression\":[\"params\",\"body\",\"returnType\",\"typeParameters\"],\"ClassBody\":[\"body\"],\"ClassDeclaration\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ClassExpression\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ExportAllDeclaration\":[\"source\"],\"ExportDefaultDeclaration\":[\"declaration\"],\"ExportNamedDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"ExportSpecifier\":[\"local\",\"exported\"],\"ForOfStatement\":[\"left\",\"right\",\"body\"],\"ImportDeclaration\":[\"specifiers\",\"source\"],\"ImportDefaultSpecifier\":[\"local\"],\"ImportNamespaceSpecifier\":[\"local\"],\"ImportSpecifier\":[\"local\",\"imported\"],\"MetaProperty\":[\"meta\",\"property\"],\"ClassMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectPattern\":[\"properties\",\"typeAnnotation\"],\"SpreadElement\":[\"argument\"],\"Super\":[],\"TaggedTemplateExpression\":[\"tag\",\"quasi\"],\"TemplateElement\":[],\"TemplateLiteral\":[\"quasis\",\"expressions\"],\"YieldExpression\":[\"argument\"],\"AnyTypeAnnotation\":[],\"ArrayTypeAnnotation\":[\"elementType\"],\"BooleanTypeAnnotation\":[],\"BooleanLiteralTypeAnnotation\":[],\"NullLiteralTypeAnnotation\":[],\"ClassImplements\":[\"id\",\"typeParameters\"],\"DeclareClass\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"DeclareFunction\":[\"id\"],\"DeclareInterface\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"DeclareModule\":[\"id\",\"body\"],\"DeclareModuleExports\":[\"typeAnnotation\"],\"DeclareTypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"DeclareOpaqueType\":[\"id\",\"typeParameters\",\"supertype\"],\"DeclareVariable\":[\"id\"],\"DeclareExportDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"DeclareExportAllDeclaration\":[\"source\"],\"DeclaredPredicate\":[\"value\"],\"ExistsTypeAnnotation\":[],\"FunctionTypeAnnotation\":[\"typeParameters\",\"params\",\"rest\",\"returnType\"],\"FunctionTypeParam\":[\"name\",\"typeAnnotation\"],\"GenericTypeAnnotation\":[\"id\",\"typeParameters\"],\"InferredPredicate\":[],\"InterfaceExtends\":[\"id\",\"typeParameters\"],\"InterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"IntersectionTypeAnnotation\":[\"types\"],\"MixedTypeAnnotation\":[],\"EmptyTypeAnnotation\":[],\"NullableTypeAnnotation\":[\"typeAnnotation\"],\"NumberLiteralTypeAnnotation\":[],\"NumberTypeAnnotation\":[],\"ObjectTypeAnnotation\":[\"properties\",\"indexers\",\"callProperties\"],\"ObjectTypeCallProperty\":[\"value\"],\"ObjectTypeIndexer\":[\"id\",\"key\",\"value\"],\"ObjectTypeProperty\":[\"key\",\"value\"],\"ObjectTypeSpreadProperty\":[\"argument\"],\"OpaqueType\":[\"id\",\"typeParameters\",\"supertype\",\"impltype\"],\"QualifiedTypeIdentifier\":[\"id\",\"qualification\"],\"StringLiteralTypeAnnotation\":[],\"StringTypeAnnotation\":[],\"ThisTypeAnnotation\":[],\"TupleTypeAnnotation\":[\"types\"],\"TypeofTypeAnnotation\":[\"argument\"],\"TypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"TypeAnnotation\":[\"typeAnnotation\"],\"TypeCastExpression\":[\"expression\",\"typeAnnotation\"],\"TypeParameter\":[\"bound\",\"default\"],\"TypeParameterDeclaration\":[\"params\"],\"TypeParameterInstantiation\":[\"params\"],\"UnionTypeAnnotation\":[\"types\"],\"VoidTypeAnnotation\":[],\"JSXAttribute\":[\"name\",\"value\"],\"JSXClosingElement\":[\"name\"],\"JSXElement\":[\"openingElement\",\"children\",\"closingElement\"],\"JSXEmptyExpression\":[],\"JSXExpressionContainer\":[\"expression\"],\"JSXSpreadChild\":[\"expression\"],\"JSXIdentifier\":[],\"JSXMemberExpression\":[\"object\",\"property\"],\"JSXNamespacedName\":[\"namespace\",\"name\"],\"JSXOpeningElement\":[\"name\",\"attributes\"],\"JSXSpreadAttribute\":[\"argument\"],\"JSXText\":[],\"Noop\":[],\"ParenthesizedExpression\":[\"expression\"],\"AwaitExpression\":[\"argument\"],\"BindExpression\":[\"object\",\"callee\"],\"ClassProperty\":[\"key\",\"value\",\"typeAnnotation\",\"decorators\"],\"Import\":[],\"Decorator\":[\"expression\"],\"DoExpression\":[\"body\"],\"ExportDefaultSpecifier\":[\"exported\"],\"ExportNamespaceSpecifier\":[\"exported\"],\"TSParameterProperty\":[\"parameter\"],\"TSDeclareFunction\":[\"id\",\"typeParameters\",\"params\",\"returnType\"],\"TSDeclareMethod\":[\"decorators\",\"key\",\"typeParameters\",\"params\",\"returnType\"],\"TSQualifiedName\":[\"left\",\"right\"],\"TSCallSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSPropertySignature\":[\"key\",\"typeAnnotation\",\"initializer\"],\"TSMethodSignature\":[\"key\",\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSIndexSignature\":[\"parameters\",\"typeAnnotation\"],\"TSAnyKeyword\":[],\"TSNumberKeyword\":[],\"TSObjectKeyword\":[],\"TSBooleanKeyword\":[],\"TSStringKeyword\":[],\"TSSymbolKeyword\":[],\"TSVoidKeyword\":[],\"TSUndefinedKeyword\":[],\"TSNullKeyword\":[],\"TSNeverKeyword\":[],\"TSThisType\":[],\"TSFunctionType\":[\"typeParameters\",\"typeAnnotation\"],\"TSConstructorType\":[\"typeParameters\",\"typeAnnotation\"],\"TSTypeReference\":[\"typeName\",\"typeParameters\"],\"TSTypePredicate\":[\"parameterName\",\"typeAnnotation\"],\"TSTypeQuery\":[\"exprName\"],\"TSTypeLiteral\":[\"members\"],\"TSArrayType\":[\"elementType\"],\"TSTupleType\":[\"elementTypes\"],\"TSUnionType\":[\"types\"],\"TSIntersectionType\":[\"types\"],\"TSParenthesizedType\":[\"typeAnnotation\"],\"TSTypeOperator\":[\"typeAnnotation\"],\"TSIndexedAccessType\":[\"objectType\",\"indexType\"],\"TSMappedType\":[\"typeParameter\",\"typeAnnotation\"],\"TSLiteralType\":[\"literal\"],\"TSExpressionWithTypeArguments\":[\"expression\",\"typeParameters\"],\"TSInterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"TSInterfaceBody\":[\"body\"],\"TSTypeAliasDeclaration\":[\"id\",\"typeParameters\",\"typeAnnotation\"],\"TSAsExpression\":[\"expression\",\"typeAnnotation\"],\"TSTypeAssertion\":[\"typeAnnotation\",\"expression\"],\"TSEnumDeclaration\":[\"id\",\"members\"],\"TSEnumMember\":[\"id\",\"initializer\"],\"TSModuleDeclaration\":[\"id\",\"body\"],\"TSModuleBlock\":[\"body\"],\"TSImportEqualsDeclaration\":[\"id\",\"moduleReference\"],\"TSExternalModuleReference\":[\"expression\"],\"TSNonNullExpression\":[\"expression\"],\"TSExportAssignment\":[\"expression\"],\"TSNamespaceExportDeclaration\":[\"id\"],\"TSTypeAnnotation\":[\"typeAnnotation\"],\"TSTypeParameterInstantiation\":[\"params\"],\"TSTypeParameterDeclaration\":[\"params\"],\"TSTypeParameter\":[\"constraint\",\"default\"]}",
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder();

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["a", ""], ["a", ""]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["a", "b", "c", ""], ["a", "b", "c", ""]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["driver ", ", navigator ", ""], ["driver ", ", navigator ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

assert(_rec._expr(_rec._capt(fn(_templateObject, 1), "arguments/0"), {
  content: "assert(fn`a${1}`)",
  filepath: "test/fixtures/TaggedTemplateExpression/fixture.js",
  line: 3,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"TaggedTemplateExpression\",\"tag\":{\"type\":\"Identifier\",\"name\":\"fn\",\"range\":[7,9]},\"quasi\":{\"type\":\"TemplateLiteral\",\"quasis\":[{\"type\":\"TemplateElement\",\"value\":{\"raw\":\"a\",\"cooked\":\"a\"},\"tail\":false,\"range\":[10,11]},{\"type\":\"TemplateElement\",\"value\":{\"raw\":\"\",\"cooked\":\"\"},\"tail\":true,\"range\":[15,15]}],\"expressions\":[{\"type\":\"NumericLiteral\",\"value\":1,\"range\":[13,14]}],\"range\":[9,16]},\"range\":[7,16]}],\"range\":[0,17]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"fn\",\"range\":[7,9]},{\"type\":{\"label\":\"`\"},\"range\":[9,10]},{\"type\":{\"label\":\"template\"},\"value\":\"a\",\"range\":[10,11]},{\"type\":{\"label\":\"${\"},\"range\":[11,13]},{\"type\":{\"label\":\"num\"},\"value\":1,\"range\":[13,14]},{\"type\":{\"label\":\"}\"},\"range\":[14,15]},{\"type\":{\"label\":\"template\"},\"value\":\"\",\"range\":[15,15]},{\"type\":{\"label\":\"`\"},\"range\":[15,16]},{\"type\":{\"label\":\")\"},\"range\":[16,17]}]",
  visitorKeys: _powerAssertVisitorKeys
}));
assert(_rec2._expr(_rec2._capt(fn(_templateObject2, _rec2._capt(foo, "arguments/0/quasi/expressions/0"), _rec2._capt(bar, "arguments/0/quasi/expressions/1"), _rec2._capt(baz, "arguments/0/quasi/expressions/2")), "arguments/0"), {
  content: "assert(fn`a${foo}b${bar}c${baz}`)",
  filepath: "test/fixtures/TaggedTemplateExpression/fixture.js",
  line: 5,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"TaggedTemplateExpression\",\"tag\":{\"type\":\"Identifier\",\"name\":\"fn\",\"range\":[7,9]},\"quasi\":{\"type\":\"TemplateLiteral\",\"quasis\":[{\"type\":\"TemplateElement\",\"value\":{\"raw\":\"a\",\"cooked\":\"a\"},\"tail\":false,\"range\":[10,11]},{\"type\":\"TemplateElement\",\"value\":{\"raw\":\"b\",\"cooked\":\"b\"},\"tail\":false,\"range\":[17,18]},{\"type\":\"TemplateElement\",\"value\":{\"raw\":\"c\",\"cooked\":\"c\"},\"tail\":false,\"range\":[24,25]},{\"type\":\"TemplateElement\",\"value\":{\"raw\":\"\",\"cooked\":\"\"},\"tail\":true,\"range\":[31,31]}],\"expressions\":[{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[13,16]},{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[20,23]},{\"type\":\"Identifier\",\"name\":\"baz\",\"range\":[27,30]}],\"range\":[9,32]},\"range\":[7,32]}],\"range\":[0,33]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"fn\",\"range\":[7,9]},{\"type\":{\"label\":\"`\"},\"range\":[9,10]},{\"type\":{\"label\":\"template\"},\"value\":\"a\",\"range\":[10,11]},{\"type\":{\"label\":\"${\"},\"range\":[11,13]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[13,16]},{\"type\":{\"label\":\"}\"},\"range\":[16,17]},{\"type\":{\"label\":\"template\"},\"value\":\"b\",\"range\":[17,18]},{\"type\":{\"label\":\"${\"},\"range\":[18,20]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[20,23]},{\"type\":{\"label\":\"}\"},\"range\":[23,24]},{\"type\":{\"label\":\"template\"},\"value\":\"c\",\"range\":[24,25]},{\"type\":{\"label\":\"${\"},\"range\":[25,27]},{\"type\":{\"label\":\"name\"},\"value\":\"baz\",\"range\":[27,30]},{\"type\":{\"label\":\"}\"},\"range\":[30,31]},{\"type\":{\"label\":\"template\"},\"value\":\"\",\"range\":[31,31]},{\"type\":{\"label\":\"`\"},\"range\":[31,32]},{\"type\":{\"label\":\")\"},\"range\":[32,33]}]",
  visitorKeys: _powerAssertVisitorKeys
}));
assert(_rec3._expr(_rec3._capt(fn(_templateObject3, _rec3._capt(_rec3._capt(bob, "arguments/0/quasi/expressions/0/object").name, "arguments/0/quasi/expressions/0"), _rec3._capt(_rec3._capt(alice, "arguments/0/quasi/expressions/1/callee/object").getName(), "arguments/0/quasi/expressions/1")), "arguments/0"), {
  content: "assert(fn`driver ${bob.name}, navigator ${alice.getName()}`)",
  filepath: "test/fixtures/TaggedTemplateExpression/fixture.js",
  line: 7,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"TaggedTemplateExpression\",\"tag\":{\"type\":\"Identifier\",\"name\":\"fn\",\"range\":[7,9]},\"quasi\":{\"type\":\"TemplateLiteral\",\"quasis\":[{\"type\":\"TemplateElement\",\"value\":{\"raw\":\"driver \",\"cooked\":\"driver \"},\"tail\":false,\"range\":[10,17]},{\"type\":\"TemplateElement\",\"value\":{\"raw\":\", navigator \",\"cooked\":\", navigator \"},\"tail\":false,\"range\":[28,40]},{\"type\":\"TemplateElement\",\"value\":{\"raw\":\"\",\"cooked\":\"\"},\"tail\":true,\"range\":[58,58]}],\"expressions\":[{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"bob\",\"range\":[19,22]},\"property\":{\"type\":\"Identifier\",\"name\":\"name\",\"range\":[23,27]},\"computed\":false,\"range\":[19,27]},{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"alice\",\"range\":[42,47]},\"property\":{\"type\":\"Identifier\",\"name\":\"getName\",\"range\":[48,55]},\"computed\":false,\"range\":[42,55]},\"arguments\":[],\"range\":[42,57]}],\"range\":[9,59]},\"range\":[7,59]}],\"range\":[0,60]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"fn\",\"range\":[7,9]},{\"type\":{\"label\":\"`\"},\"range\":[9,10]},{\"type\":{\"label\":\"template\"},\"value\":\"driver \",\"range\":[10,17]},{\"type\":{\"label\":\"${\"},\"range\":[17,19]},{\"type\":{\"label\":\"name\"},\"value\":\"bob\",\"range\":[19,22]},{\"type\":{\"label\":\".\"},\"range\":[22,23]},{\"type\":{\"label\":\"name\"},\"value\":\"name\",\"range\":[23,27]},{\"type\":{\"label\":\"}\"},\"range\":[27,28]},{\"type\":{\"label\":\"template\"},\"value\":\", navigator \",\"range\":[28,40]},{\"type\":{\"label\":\"${\"},\"range\":[40,42]},{\"type\":{\"label\":\"name\"},\"value\":\"alice\",\"range\":[42,47]},{\"type\":{\"label\":\".\"},\"range\":[47,48]},{\"type\":{\"label\":\"name\"},\"value\":\"getName\",\"range\":[48,55]},{\"type\":{\"label\":\"(\"},\"range\":[55,56]},{\"type\":{\"label\":\")\"},\"range\":[56,57]},{\"type\":{\"label\":\"}\"},\"range\":[57,58]},{\"type\":{\"label\":\"template\"},\"value\":\"\",\"range\":[58,58]},{\"type\":{\"label\":\"`\"},\"range\":[58,59]},{\"type\":{\"label\":\")\"},\"range\":[59,60]}]",
  visitorKeys: _powerAssertVisitorKeys
}));
