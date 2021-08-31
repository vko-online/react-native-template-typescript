module.exports = {
  root: true,
  extends: ['@react-native-community'],
  rules: {
    'prettier/prettier': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never']
  }
}