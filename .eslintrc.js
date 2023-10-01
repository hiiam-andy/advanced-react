module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn', // неиспользуемые переменные
    'react/require-default-props': 'off', // дефолтное знаение пропсов
    'react/react-in-jsx-scope': 'off', // требует импорт реакта, если jsx/tsx
    'react/jsx-props-no-spreading': 'warn', // предупреждает спред для пропсов
    'react/function-component-definition': 'off', // чтобы использовать стрелочные функции в компонентах
    'no-shadow': 'off',
    'import/extensions': 'off', // не указывать расширение при импорте
    'import/no-extraneous-dependencies': 'warn', // предупреждает добавление в файл дев зависимостей
    'no-underscore-dangle': 'off', // отключает нижние подчеркивания
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'react/button-has-type': 'off',
    'react/jsx-wrap-multilines': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
};
