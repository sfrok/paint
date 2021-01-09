module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/__mocks__/fileMock.js",
  },
  testRegex: "/src/.*\\.test.(js|jsx)$",
  moduleFileExtensions: ["js", "ts", "json", "node"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.(js|ts)"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/build/",
    "/coverage/",
    "<rootDir>/src/index.js",
  ],
};
