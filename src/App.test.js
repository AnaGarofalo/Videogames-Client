import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

afterEach(() => {
  cleanup();
});

describe(NotFound, () => {
  it("Renders NotFound", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const div = screen.getByTestId("notFound");
    expect(div).toBeInTheDocument();
  });
});

describe(Footer, () => {
  it("Renders createdBy", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const div = screen.getByTestId("createdBy");
    expect(div).toBeInTheDocument();
  });
});

describe(Footer, () => {
  it("Renders linkedin link", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const div = screen.getByTestId("linkedin");
    expect(div).toBeInTheDocument();
  });
});

describe(Footer, () => {
  it("Renders github link", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const div = screen.getByTestId("github");
    expect(div).toBeInTheDocument();
  });
});
