module.exports = {
  preset: '@vue/cli-plugin-unit-jest',

  testMatch: ['<rootDir>/**/*.test.js'],

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
}
