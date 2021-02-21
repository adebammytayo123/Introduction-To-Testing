import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render as rtlRender, fireEvent } from "@testing-library/react";
import { Main } from "../Main";

function render(
  ui,
  {
    route = "/",
    history = createMemoryHistory({
      initialEntries: [route],
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Router history={history}>{children}</Router>;
  }
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    history,
  }
}

test("main renders about and home and i can navigate to those pages", () => {
  const { getByRole, getByText, debug } = render(<Main />);
  expect(getByRole("heading")).toHaveTextContent(/home/i);
  fireEvent.click(getByText(/about/i));
  expect(getByRole("heading")).toHaveTextContent(/about/i);
  debug();
});

test("landing on a bad page shows no match", () => {
  const { getByRole } = render(<Main />, {
    route: "/something-that-does-not-match",
  });
  expect(getByRole("heading")).toHaveTextContent(/404/i);
});
