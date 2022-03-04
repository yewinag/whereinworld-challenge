import '@testing-library/jest-dom/extend-expect';
import 'babel-polyfill';
import { server } from './mocks/server';
// import './src/testServer';
require('jest-fetch-mock').enableMocks();
fetchMock.dontMock();
if (process.env.NODE_ENV === 'test') {
  beforeAll(() => {
    server.listen({
      onUnhandledRequest: 'warn',
    });
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });
}
