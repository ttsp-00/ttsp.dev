import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import next from 'eslint-plugin-next'

export default defineConfig([
	{
		ignores: [
			'.next/**',
			'**/.next/**',
			'**/node_modules/**',
			'**/dist/**'
		]
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: { next },
		extends: ['plugin:next/recommended'],
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		plugins: { js, tseslint },
		extends: ['js/recommended']
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		languageOptions: { globals: { ...globals.browser, ...globals.node } }
	},
	...tseslint.configs.recommended,
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: true
			}
		}
	},
	{
		...pluginReact.configs.flat.recommended,
		settings: {
			react: {
				version: 'detect'
			}
		}
	},
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'no-extra-semi': 'error',
			'semi': ['error', 'never'],
			'quotes': ['error', 'single'],
			'indent': ['error', 'tab'],
			'react/react-in-jsx-scope': 'off',
		}
	}
])