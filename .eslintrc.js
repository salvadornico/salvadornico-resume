// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	env: {
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
	},
	extends: ["eslint:recommended", "prettier", "prettier/standard"],
	plugins: ["vue", "prettier", "cypress"],
	rules: {
		"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
		"arrow-parens": "off",
		"generator-star-spacing": "off",
		indent: ["error", "tab"],
		quotes: ["error", "double"],
		"linebreak-style": ["warn", "unix"],
		"no-undef": "off",
		"no-console": "off",
		"prettier/prettier": "warn",
	},
}
