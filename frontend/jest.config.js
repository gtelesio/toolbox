process.env.BABEL_CONFIG_PATH = './.babelrc.test';

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: './.babelrc.test' }],
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ]
} 