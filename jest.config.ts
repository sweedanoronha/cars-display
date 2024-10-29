// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
      "preset": "ts-jest",
      "testEnvironment": "jsdom",
      "setupFilesAfterEnv": ['<rootDir>/jest.setup.js'],
      "transform": {
        "^.+\\.(js|jsx|ts|tsx)$": ['babel-jest', { configFile: './.babelrc-jest' }]
      },
      "moduleNameMapper": {
        "^@/(.*)$": "<rootDir>/$1"
      }
    };
  

export default config;

