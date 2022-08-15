import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  verbose: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/domain/entities/**/*",
    "src/business/useCases/**/*",
    "src/presentation/controllers/**/*",
  ],
  coveragePathIgnorePatterns: [".d.ts", "src/business/useCases/IUseCase.ts"],
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
