module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	globals: {
		d1: false,
		cb: false,
		p: false,
		data: false,
	},
	extends: ['eslint:recommended'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2017,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-console': 'warn',
		'no-extra-boolean-cast': 'off',
	},
}
