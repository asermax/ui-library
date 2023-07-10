module.exports = {
  extends: ["eslint:recommended", "airbnb", "airbnb/hooks", "plugin:react/jsx-runtime", "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended-requiring-type-checking", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    "import/resolver": {
      typescript: true,
    },
  },
  "ignorePatterns": ["**/dist/"],
  rules: {
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": ["error", { "namedComponents": "arrow-function" }],
    "import/extensions": ["error", "ignorePackages", { "js": "never", "jsx": "never", "ts": "never", "tsx": "never" }]
  }
};
