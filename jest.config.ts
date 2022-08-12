import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  verbose: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [],
  coveragePathIgnorePatterns: [".d.ts"],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  testEnvironment: "node",
  coverageProvider: "v8",
  rootDir: "./",
  testMatch: ["**/tests/**/*.(spec|test).[jt]s"],
  setupFiles: ["./jest-setup-file.ts"],
};

export default config;
