'use strict';

var _powerAssertVisitorKeys = "{\"ArrayExpression\":[\"elements\"],\"AssignmentExpression\":[\"left\",\"right\"],\"BinaryExpression\":[\"left\",\"right\"],\"InterpreterDirective\":[],\"Directive\":[\"value\"],\"DirectiveLiteral\":[],\"BlockStatement\":[\"directives\",\"body\"],\"BreakStatement\":[\"label\"],\"CallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"CatchClause\":[\"param\",\"body\"],\"ConditionalExpression\":[\"test\",\"consequent\",\"alternate\"],\"ContinueStatement\":[\"label\"],\"DebuggerStatement\":[],\"DoWhileStatement\":[\"test\",\"body\"],\"EmptyStatement\":[],\"ExpressionStatement\":[\"expression\"],\"File\":[\"program\"],\"ForInStatement\":[\"left\",\"right\",\"body\"],\"ForStatement\":[\"init\",\"test\",\"update\",\"body\"],\"FunctionDeclaration\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"FunctionExpression\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"Identifier\":[\"typeAnnotation\"],\"IfStatement\":[\"test\",\"consequent\",\"alternate\"],\"LabeledStatement\":[\"label\",\"body\"],\"StringLiteral\":[],\"NumericLiteral\":[],\"NullLiteral\":[],\"BooleanLiteral\":[],\"RegExpLiteral\":[],\"LogicalExpression\":[\"left\",\"right\"],\"MemberExpression\":[\"object\",\"property\"],\"NewExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"Program\":[\"directives\",\"body\"],\"ObjectExpression\":[\"properties\"],\"ObjectMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectProperty\":[\"key\",\"value\",\"decorators\"],\"RestElement\":[\"argument\",\"typeAnnotation\"],\"ReturnStatement\":[\"argument\"],\"SequenceExpression\":[\"expressions\"],\"SwitchCase\":[\"test\",\"consequent\"],\"SwitchStatement\":[\"discriminant\",\"cases\"],\"ThisExpression\":[],\"ThrowStatement\":[\"argument\"],\"TryStatement\":[\"block\",\"handler\",\"finalizer\"],\"UnaryExpression\":[\"argument\"],\"UpdateExpression\":[\"argument\"],\"VariableDeclaration\":[\"declarations\"],\"VariableDeclarator\":[\"id\",\"init\"],\"WhileStatement\":[\"test\",\"body\"],\"WithStatement\":[\"object\",\"body\"],\"AssignmentPattern\":[\"left\",\"right\"],\"ArrayPattern\":[\"elements\",\"typeAnnotation\"],\"ArrowFunctionExpression\":[\"params\",\"body\",\"returnType\",\"typeParameters\"],\"ClassBody\":[\"body\"],\"ClassDeclaration\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ClassExpression\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ExportAllDeclaration\":[\"source\"],\"ExportDefaultDeclaration\":[\"declaration\"],\"ExportNamedDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"ExportSpecifier\":[\"local\",\"exported\"],\"ForOfStatement\":[\"left\",\"right\",\"body\"],\"ImportDeclaration\":[\"specifiers\",\"source\"],\"ImportDefaultSpecifier\":[\"local\"],\"ImportNamespaceSpecifier\":[\"local\"],\"ImportSpecifier\":[\"local\",\"imported\"],\"MetaProperty\":[\"meta\",\"property\"],\"ClassMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectPattern\":[\"properties\",\"typeAnnotation\"],\"SpreadElement\":[\"argument\"],\"Super\":[],\"TaggedTemplateExpression\":[\"tag\",\"quasi\"],\"TemplateElement\":[],\"TemplateLiteral\":[\"quasis\",\"expressions\"],\"YieldExpression\":[\"argument\"],\"AnyTypeAnnotation\":[],\"ArrayTypeAnnotation\":[\"elementType\"],\"BooleanTypeAnnotation\":[],\"BooleanLiteralTypeAnnotation\":[],\"NullLiteralTypeAnnotation\":[],\"ClassImplements\":[\"id\",\"typeParameters\"],\"DeclareClass\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareFunction\":[\"id\"],\"DeclareInterface\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareModule\":[\"id\",\"body\"],\"DeclareModuleExports\":[\"typeAnnotation\"],\"DeclareTypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"DeclareOpaqueType\":[\"id\",\"typeParameters\",\"supertype\"],\"DeclareVariable\":[\"id\"],\"DeclareExportDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"DeclareExportAllDeclaration\":[\"source\"],\"DeclaredPredicate\":[\"value\"],\"ExistsTypeAnnotation\":[],\"FunctionTypeAnnotation\":[\"typeParameters\",\"params\",\"rest\",\"returnType\"],\"FunctionTypeParam\":[\"name\",\"typeAnnotation\"],\"GenericTypeAnnotation\":[\"id\",\"typeParameters\"],\"InferredPredicate\":[],\"InterfaceExtends\":[\"id\",\"typeParameters\"],\"InterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"InterfaceTypeAnnotation\":[\"extends\",\"body\"],\"IntersectionTypeAnnotation\":[\"types\"],\"MixedTypeAnnotation\":[],\"EmptyTypeAnnotation\":[],\"NullableTypeAnnotation\":[\"typeAnnotation\"],\"NumberLiteralTypeAnnotation\":[],\"NumberTypeAnnotation\":[],\"ObjectTypeAnnotation\":[\"properties\",\"indexers\",\"callProperties\",\"internalSlots\"],\"ObjectTypeInternalSlot\":[\"id\",\"value\",\"optional\",\"static\",\"method\"],\"ObjectTypeCallProperty\":[\"value\"],\"ObjectTypeIndexer\":[\"id\",\"key\",\"value\",\"variance\"],\"ObjectTypeProperty\":[\"key\",\"value\",\"variance\"],\"ObjectTypeSpreadProperty\":[\"argument\"],\"OpaqueType\":[\"id\",\"typeParameters\",\"supertype\",\"impltype\"],\"QualifiedTypeIdentifier\":[\"id\",\"qualification\"],\"StringLiteralTypeAnnotation\":[],\"StringTypeAnnotation\":[],\"ThisTypeAnnotation\":[],\"TupleTypeAnnotation\":[\"types\"],\"TypeofTypeAnnotation\":[\"argument\"],\"TypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"TypeAnnotation\":[\"typeAnnotation\"],\"TypeCastExpression\":[\"expression\",\"typeAnnotation\"],\"TypeParameter\":[\"bound\",\"default\",\"variance\"],\"TypeParameterDeclaration\":[\"params\"],\"TypeParameterInstantiation\":[\"params\"],\"UnionTypeAnnotation\":[\"types\"],\"Variance\":[],\"VoidTypeAnnotation\":[],\"JSXAttribute\":[\"name\",\"value\"],\"JSXClosingElement\":[\"name\"],\"JSXElement\":[\"openingElement\",\"children\",\"closingElement\"],\"JSXEmptyExpression\":[],\"JSXExpressionContainer\":[\"expression\"],\"JSXSpreadChild\":[\"expression\"],\"JSXIdentifier\":[],\"JSXMemberExpression\":[\"object\",\"property\"],\"JSXNamespacedName\":[\"namespace\",\"name\"],\"JSXOpeningElement\":[\"name\",\"attributes\"],\"JSXSpreadAttribute\":[\"argument\"],\"JSXText\":[],\"JSXFragment\":[\"openingFragment\",\"children\",\"closingFragment\"],\"JSXOpeningFragment\":[],\"JSXClosingFragment\":[],\"Noop\":[],\"ParenthesizedExpression\":[\"expression\"],\"AwaitExpression\":[\"argument\"],\"BindExpression\":[\"object\",\"callee\"],\"ClassProperty\":[\"key\",\"value\",\"typeAnnotation\",\"decorators\"],\"OptionalMemberExpression\":[\"object\",\"property\"],\"PipelineTopicExpression\":[\"expression\"],\"PipelineBareFunction\":[\"callee\"],\"PipelinePrimaryTopicReference\":[],\"OptionalCallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"ClassPrivateProperty\":[\"key\",\"value\"],\"ClassPrivateMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"Import\":[],\"Decorator\":[\"expression\"],\"DoExpression\":[\"body\"],\"ExportDefaultSpecifier\":[\"exported\"],\"ExportNamespaceSpecifier\":[\"exported\"],\"PrivateName\":[\"id\"],\"BigIntLiteral\":[],\"TSParameterProperty\":[\"parameter\"],\"TSDeclareFunction\":[\"id\",\"typeParameters\",\"params\",\"returnType\"],\"TSDeclareMethod\":[\"decorators\",\"key\",\"typeParameters\",\"params\",\"returnType\"],\"TSQualifiedName\":[\"left\",\"right\"],\"TSCallSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSPropertySignature\":[\"key\",\"typeAnnotation\",\"initializer\"],\"TSMethodSignature\":[\"key\",\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSIndexSignature\":[\"parameters\",\"typeAnnotation\"],\"TSAnyKeyword\":[],\"TSUnknownKeyword\":[],\"TSNumberKeyword\":[],\"TSObjectKeyword\":[],\"TSBooleanKeyword\":[],\"TSStringKeyword\":[],\"TSSymbolKeyword\":[],\"TSVoidKeyword\":[],\"TSUndefinedKeyword\":[],\"TSNullKeyword\":[],\"TSNeverKeyword\":[],\"TSThisType\":[],\"TSFunctionType\":[\"typeParameters\",\"typeAnnotation\"],\"TSConstructorType\":[\"typeParameters\",\"typeAnnotation\"],\"TSTypeReference\":[\"typeName\",\"typeParameters\"],\"TSTypePredicate\":[\"parameterName\",\"typeAnnotation\"],\"TSTypeQuery\":[\"exprName\"],\"TSTypeLiteral\":[\"members\"],\"TSArrayType\":[\"elementType\"],\"TSTupleType\":[\"elementTypes\"],\"TSOptionalType\":[\"typeAnnotation\"],\"TSRestType\":[\"typeAnnotation\"],\"TSUnionType\":[\"types\"],\"TSIntersectionType\":[\"types\"],\"TSConditionalType\":[\"checkType\",\"extendsType\",\"trueType\",\"falseType\"],\"TSInferType\":[\"typeParameter\"],\"TSParenthesizedType\":[\"typeAnnotation\"],\"TSTypeOperator\":[\"typeAnnotation\"],\"TSIndexedAccessType\":[\"objectType\",\"indexType\"],\"TSMappedType\":[\"typeParameter\",\"typeAnnotation\"],\"TSLiteralType\":[\"literal\"],\"TSExpressionWithTypeArguments\":[\"expression\",\"typeParameters\"],\"TSInterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"TSInterfaceBody\":[\"body\"],\"TSTypeAliasDeclaration\":[\"id\",\"typeParameters\",\"typeAnnotation\"],\"TSAsExpression\":[\"expression\",\"typeAnnotation\"],\"TSTypeAssertion\":[\"typeAnnotation\",\"expression\"],\"TSEnumDeclaration\":[\"id\",\"members\"],\"TSEnumMember\":[\"id\",\"initializer\"],\"TSModuleDeclaration\":[\"id\",\"body\"],\"TSModuleBlock\":[\"body\"],\"TSImportEqualsDeclaration\":[\"id\",\"moduleReference\"],\"TSExternalModuleReference\":[\"expression\"],\"TSNonNullExpression\":[\"expression\"],\"TSExportAssignment\":[\"expression\"],\"TSNamespaceExportDeclaration\":[\"id\"],\"TSTypeAnnotation\":[\"typeAnnotation\"],\"TSTypeParameterInstantiation\":[\"params\"],\"TSTypeParameterDeclaration\":[\"params\"],\"TSTypeParameter\":[\"constraint\",\"default\"]}",
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }();

var assert = require('power-assert');

describe('Array#indexOf()', function () {
  beforeEach(function () {
    this.ary = [1, 2, 3];
  });
  it('should return index when the value is present', function () {
    var _rec = new _powerAssertRecorder();

    var who = 'ariya',
        two = 2;
    assert(_rec._expr(_rec._capt(_rec._capt(_rec._capt(this.ary, "arguments/0/left/callee/object").indexOf(_rec._capt(who, "arguments/0/left/arguments/0")), "arguments/0/left") === _rec._capt(two, "arguments/0/right"), "arguments/0"), {
      content: "assert(this.ary.indexOf(who) === two)",
      filepath: "test/fixtures/Mocha/fixture.js",
      line: 11,
      ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"ThisExpression\",\"range\":[7,11]},\"property\":{\"type\":\"Identifier\",\"name\":\"ary\",\"range\":[12,15]},\"computed\":false,\"range\":[7,15]},\"property\":{\"type\":\"Identifier\",\"name\":\"indexOf\",\"range\":[16,23]},\"computed\":false,\"range\":[7,23]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"who\",\"range\":[24,27]}],\"range\":[7,28]},\"right\":{\"type\":\"Identifier\",\"name\":\"two\",\"range\":[33,36]},\"range\":[7,36]}],\"range\":[0,37]}",
      tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"this\"},\"value\":\"this\",\"range\":[7,11]},{\"type\":{\"label\":\".\"},\"range\":[11,12]},{\"type\":{\"label\":\"name\"},\"value\":\"ary\",\"range\":[12,15]},{\"type\":{\"label\":\".\"},\"range\":[15,16]},{\"type\":{\"label\":\"name\"},\"value\":\"indexOf\",\"range\":[16,23]},{\"type\":{\"label\":\"(\"},\"range\":[23,24]},{\"type\":{\"label\":\"name\"},\"value\":\"who\",\"range\":[24,27]},{\"type\":{\"label\":\")\"},\"range\":[27,28]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"===\",\"range\":[29,32]},{\"type\":{\"label\":\"name\"},\"value\":\"two\",\"range\":[33,36]},{\"type\":{\"label\":\")\"},\"range\":[36,37]}]",
      visitorKeys: _powerAssertVisitorKeys
    }));
  });
  it('should return -1 when the value is not present', function () {
    var _rec2 = new _powerAssertRecorder();

    var minusOne = -1,
        two = 2;
    assert.ok(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(this.ary, "arguments/0/left/callee/object").indexOf(_rec2._capt(two, "arguments/0/left/arguments/0")), "arguments/0/left") === _rec2._capt(minusOne, "arguments/0/right"), "arguments/0"), {
      content: "assert.ok(this.ary.indexOf(two) === minusOne, 'THIS IS AN ASSERTION MESSAGE')",
      filepath: "test/fixtures/Mocha/fixture.js",
      line: 15,
      ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"property\":{\"type\":\"Identifier\",\"name\":\"ok\",\"range\":[7,9]},\"computed\":false,\"range\":[0,9]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"ThisExpression\",\"range\":[10,14]},\"property\":{\"type\":\"Identifier\",\"name\":\"ary\",\"range\":[15,18]},\"computed\":false,\"range\":[10,18]},\"property\":{\"type\":\"Identifier\",\"name\":\"indexOf\",\"range\":[19,26]},\"computed\":false,\"range\":[10,26]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"two\",\"range\":[27,30]}],\"range\":[10,31]},\"right\":{\"type\":\"Identifier\",\"name\":\"minusOne\",\"range\":[36,44]},\"range\":[10,44]},{\"type\":\"StringLiteral\",\"value\":\"THIS IS AN ASSERTION MESSAGE\",\"range\":[46,76]}],\"range\":[0,77]}",
      tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\".\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"ok\",\"range\":[7,9]},{\"type\":{\"label\":\"(\"},\"range\":[9,10]},{\"type\":{\"label\":\"this\"},\"value\":\"this\",\"range\":[10,14]},{\"type\":{\"label\":\".\"},\"range\":[14,15]},{\"type\":{\"label\":\"name\"},\"value\":\"ary\",\"range\":[15,18]},{\"type\":{\"label\":\".\"},\"range\":[18,19]},{\"type\":{\"label\":\"name\"},\"value\":\"indexOf\",\"range\":[19,26]},{\"type\":{\"label\":\"(\"},\"range\":[26,27]},{\"type\":{\"label\":\"name\"},\"value\":\"two\",\"range\":[27,30]},{\"type\":{\"label\":\")\"},\"range\":[30,31]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"===\",\"range\":[32,35]},{\"type\":{\"label\":\"name\"},\"value\":\"minusOne\",\"range\":[36,44]},{\"type\":{\"label\":\",\"},\"range\":[44,45]},{\"type\":{\"label\":\"string\"},\"value\":\"THIS IS AN ASSERTION MESSAGE\",\"range\":[46,76]},{\"type\":{\"label\":\")\"},\"range\":[76,77]}]",
      visitorKeys: _powerAssertVisitorKeys
    }), 'THIS IS AN ASSERTION MESSAGE');
  });
});
