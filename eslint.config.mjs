// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * ESLint flat config for Next.js 14 + TypeScript (Windows-friendly)
 * - Puts ignores FIRST so they apply globally
 * - Disables triple-slash rule for .d.ts (Next's next-env.d.ts uses it)
 * - Exports a named const to avoid "anonymous default export" warning
 */
const config = [
  // 1) Global ignores (put first)
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/out/**",
      "**/build/**",
      "**/next-env.d.ts",
    ],
  },

  // 2) Next.js + TypeScript recommended rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 3) Project-wide tweaks
  {
    rules: {
      "react/react-in-jsx-scope": "off",       // Not needed in Next.js
      "@next/next/no-img-element": "warn",     // Prefer <Image>, allow <img>
    },
  },

  // 4) Type definition files: allow triple-slash references
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];

export default config;
