module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  testEnvironment: 'jest-environment-jsdom',

  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],

  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components/$1',
    '^hooks(.*)$': '<rootDir>/src/hooks/$1'
  }
};
