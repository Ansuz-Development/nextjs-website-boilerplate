module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "next",
    "plugin:@next/next/recommended",
    "plugin:import/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "import",
    "react-hooks",
  ],
  rules: {
    //  Common
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "block-spacing": "error",
    "comma-spacing": ["error", {before: false, after: true}],
    "computed-property-spacing": ["error", "never"],
    "func-call-spacing": ["error", "never"],
    "import/no-extraneous-dependencies": ["error", {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    }],
    "key-spacing": ["error", {beforeColon: false, afterColon: true}],
    "keyword-spacing": ["error", {before: true, after: true}],
    "no-confusing-arrow": ["error", {allowParens: false}],
    "no-console": ["error", {allow: ["warn", "error"]}],
    "no-duplicate-imports": ["error", {includeExports: true}],
    "no-extra-parens": ["error", "all", {
      conditionalAssign: false,
      ignoreJSX: "multi-line",
      nestedBinaryExpressions: false,
      returnAssign: false,
    }],
    "no-loss-of-precision": "error",
    "no-multi-spaces": "error",
    "no-plusplus": ["error", {allowForLoopAfterthoughts: true}],
    "no-promise-executor-return": "error",
    "no-return-assign": ["error", "always"],
    "no-template-curly-in-string": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-optional-chaining": ["error", {disallowArithmeticOperators: true}],
    "no-useless-backreference": "error",
    "no-var": "error",
    "object-curly-spacing": ["error", "never"],
    "require-atomic-updates": "error",
    "semi-spacing": "error",
    "space-in-parens": ["error", "never"],
    "template-curly-spacing": ["error", "never"],

    //  React
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-filename-extension": [1, {extensions: [".js", ".jsx"]}],

    "react/forbid-prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",

    "indent": ["error", 2, {
      "ignoredNodes": ["TemplateLiteral"],
    }],
    "space-before-blocks": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "max-len": [
      "error",
      {
        "code": 80,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreComments": true,
      },
    ],
    "no-multiple-empty-lines": [
      "error", {"max": 1, "maxBOF": 0, "maxEOF": 1},
    ],
    "comma-dangle": ["error", "always-multiline"],
    "react/display-name": "off",
  },
};
