// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
// });

import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "./App";
import Detail from "./components/Detail/Detail";

afterEach(() => {
  cleanup();
});

describe(App, () => {
  it("Renders App", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const div = screen.getByTestId("miDiv");
    expect(div).toBeInTheDocument();
  });
});
