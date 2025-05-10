import globals from 'globals';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  pluginReactConfig,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ignores: ['**/node_modules/**', '**/dist/**'],
    rules: {
      'no-console': ['error'], // Disallow console.log, allow console.warn and console.error
      'no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ], // Disallow unused variables
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-key': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: '19.0',
      },
    },
  },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
];
