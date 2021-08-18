module.exports = {
  moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy'
  },
  setupFiles: ["dotenv/config"],
  testEnvironment: 'jsdom',
};
