module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy'
  },
  setupFiles: ["dotenv/config"],
  testEnvironment: 'node',
};
