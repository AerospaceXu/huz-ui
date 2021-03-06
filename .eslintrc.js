module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
        jsx: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/prop-types": 0,
    "max-len": [2, { code: 80, ignoreUrls: true, ignoreStrings: true }],
    "implicit-arrow-linebreak": 0,
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-vars": 0,
    "no-nested-ternary": 0,
    "react/destructuring-assignment": 0,
    "react/button-has-type": 0,
    "react/no-danger": 0,
    "no-unused-expressions": 0,
    "import/prefer-default-export": 0,
    "no-undef": 0,
    quotes: ["error", "double"],
    "import/no-unresolved": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
