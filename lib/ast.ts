import { factory, createPrinter } from "typescript";

const {
  createBlock,
  createCallExpression,
  createFunctionDeclaration,
  createIdentifier,
  createImportClause,
  createImportDeclaration,
  createImportSpecifier,
  createJsxAttributes,
  createJsxElement,
  createJsxExpression,
  createJsxClosingElement,
  createJsxOpeningElement,
  createModifier,
  createNamedImports,
  createParameterDeclaration,
  createParenthesizedExpression,
  createPropertyAccessExpression,
  createReturnStatement,
  createSourceFile,
  createStringLiteral,
  createTypeReferenceNode,
  createToken,
  createVariableDeclaration,
  createVariableDeclarationList,
  createVariableStatement,
} = factory;

// @alias CREATE
const Ast = {
  create: {
    block: createBlock,
    callExpression: createCallExpression,
    fnDeclaration: createFunctionDeclaration,
    identifier: createIdentifier,
    importClause: createImportClause,
    importDeclaration: createImportDeclaration,
    importSpecifier: createImportSpecifier,
    jsxAttrs: createJsxAttributes,
    jsxElm: createJsxElement,
    jsxExpression: createJsxExpression,
    jsxClosingElm: createJsxClosingElement,
    jsxOpeningElm: createJsxOpeningElement,
    modifier: createModifier,
    namedImports: createNamedImports,
    paramDeclaration: createParameterDeclaration,
    parenthesizedExpression: createParenthesizedExpression,
    propertyAccessExpression: createPropertyAccessExpression,
    returnStatement: createReturnStatement,
    srcFile: createSourceFile,
    strLiteral: createStringLiteral,
    token: createToken,
    printer: createPrinter,
    typeRefNode: createTypeReferenceNode,
    varDeclaration: createVariableDeclaration,
    varDeclarationList: createVariableDeclarationList,
    varStatement: createVariableStatement,
  },
};

export const create = Ast.create;
export default Ast;
