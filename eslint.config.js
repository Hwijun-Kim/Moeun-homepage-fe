import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // React Refresh 규칙
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // TypeScript 규칙
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 사용하지 않는 변수 경고
      '@typescript-eslint/no-explicit-any': 'off', // 필요에 따라 any 사용 허용
      '@typescript-eslint/explicit-function-return-type': 'off', // 함수 반환 타입 강제 안 함
      '@typescript-eslint/ban-ts-comment': 'warn', // TS 주석 사용 시 경고
      '@typescript-eslint/no-require-imports': 'off',
      // Hooks 규칙
      'react-hooks/rules-of-hooks': 'error', // 훅 규칙 강제
      'react-hooks/exhaustive-deps': 'off', // useEffect의 의존성 배열 체크 비활성화
      // Prettier 통합
      'prettier/prettier': [
        'error',
        {
          singleQuote: true, // single 쿼테이션 사용 여부
          jsxSingleQuote: true, // JSX에 singe 쿼테이션 사용 여부
          semi: true, // 세미콜론 사용 여부
          useTabs: true, // 탭 사용 여부
          tabWidth: 4, // 탭 너비
          trailingComma: 'all', // 여러 줄을 사용할 때, 후행 콤마 사용 방식
          endOfLine: 'auto', // EoF 방식, OS별로 처리 방식이 다름
          bracketSpacing: true, // 객체 리터럴에서 괄호에 공백 삽입 여부
          printWidth: 120, // 코드 한 줄의 최대 길이
        },
        {
          usePrettierrc: false,
        },
      ],
      // 기타 유용한 규칙
      // 'no-console': ['warn', { allow: ['warn', 'error'] }], // console.log 금지
      'no-console': 'off', // console.log 금지
      'no-debugger': 'warn', // debugger 사용 시 경고
      'no-unused-vars': 'off', // 사용하지 않는 변수 경고
      'no-duplicate-imports': 'warn', // 중복 import 방지
      'prefer-const': 'warn', // 가능한 경우 const 사용
      'no-var': 'error', // var 금지
      'eqeqeq': ['warn', 'always'], // ===와 !== 강제 사용
    },
  },
  eslintConfigPrettier
)
