module.exports = [
    {
        ignores: ["dist/**", "node_modules/**"]
    },
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: require("@typescript-eslint/parser"),
            ecmaVersion: 2020,
            sourceType: "module",
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: __dirname,
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: [require("@typescript-eslint")],
        rules: {
            "no-unused-vars": "warn",
            "semi": ["error", "always"],
            "quotes": ["error", "double"]
        }
    }
];
