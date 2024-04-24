module.exports = {
  testEnvironment: "jest-environment-jsdom",
  clearMocks: true,
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  transformIgnorePatterns: [
    "node_modules/(?!(module-name|module-name-2)/)"
  ]
};
