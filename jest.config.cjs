/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest/presets/default-esm", // ✅ Use ESM preset
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],       // ✅ Treat .ts as ESM
  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: "tsconfig.test.json"     // or "tsconfig.json" if you don't have a separate one
    }
  },
  moduleNameMapper: {
    // ✅ Allow imports without .js extensions
    "^(\\.{1,2}/.*)\\.js$": "$1"
  }
};
