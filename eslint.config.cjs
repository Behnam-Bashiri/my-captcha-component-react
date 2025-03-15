const tseslint = require("@typescript-eslint/eslint-plugin");
const tsparser = require("@typescript-eslint/parser");

module.exports = [
    {
        ignores: ["dist/**", "node_modules/**"]
    },
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsparser,
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: __dirname,
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            "@typescript-eslint": tseslint
        },
        rules: {
            "no-unused-vars": "warn",
            "semi": ["error", "always"],
            "quotes": ["error", "double"],
            "@typescript-eslint/no-unused-vars": "warn"
        }
    }
];
