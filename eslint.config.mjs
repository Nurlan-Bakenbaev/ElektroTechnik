import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["node_modules/**", ".next/**", "out/**", "test-results/**"] },
  {
    files: [
      "src/lib/**/*.js",
      "src/data/ohm-lesson.js",
      "src/data/lesson-basics.js",
      "src/data/units.js",
      "src/components/lesson/**/*.js",
      "src/components/Notation.js",
      "src/components/FormulaImage.js",
      "src/components/QuantityLegend.js",
      "src/components/LessonBrief.js",
      "src/components/PowerSupplyDemo.js",
      "tests/physics.test.js",
      "tests/lesson-engine.test.js",
      "tests/reference-lesson.spec.js",
      "tests/beginner-lessons.test.js",
      "tests/beginner-lessons.spec.js",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", caughtErrors: "none" },
      ],
    },
  },
  // JSX component references require React-specific analysis; the core parser
  // still checks syntax, undefined JS names and unreachable code in these files.
  { files: ["src/components/**/*.js"], rules: { "no-unused-vars": "off" } },
];
