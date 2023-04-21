import { render, screen } from "@testing-library/react";
import App from "../src/App";
import Detail from "../src/components/Detail/Detail";

jest.mock("../src/App");
test("renders the landing page", () => {
  render(<App />);
});
