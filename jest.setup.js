import "@testing-library/jest-dom/extend-expect";

import { cleanup } from "@testing-library/react";
import { server } from "@/tests/setup/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
