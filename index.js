module.exports = {
  settings: {
    'import/core-modules': ['@emotion/core', 'react'],
  },
  plugins: [
    'html',
    'json',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-sonarjs',
  ],
  extends: ['airbnb', './es6.js', './react.js', './noFix.js', './prettier.js'],
}
