module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
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
    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }], // предупреждает добавление в файл дев зависимостей
    'no-underscore-dangle': 'off', // отключает нижние подчеркивания
    // 'comma-dangle': 'off', // плавающие запятые в объектах
    'object-curly-newline': 'off',
    'react/button-has-type': 'off', // требование пита кнопки
    'react/jsx-wrap-multilines': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true, // подсвечивать непереведенные слова
        ignoreAttribute: ['data-testid', 'to'], // игнорировать некоторые атрибуты в тегах
      },
    ],
    'max-len': ['error', { code: 100 }, { ignoreComments: true }], // игнорировать максимальную длину комментариев
    'comma-dangle': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off', // игнор несемантических кнопок
    'react-hooks/rules-of-hooks': 'error', // проверять правила хуков
    'react-hooks/exhaustive-deps': 'error', // проверять массив зависимостей хуков
    'no-param-reassign': 'off', // возможность переназначать параметры функции
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
