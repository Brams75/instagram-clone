module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/cypress/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js", "@testing-library/jest-dom/extend-expect"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
};
