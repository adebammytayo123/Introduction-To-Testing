import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render as rtlRender, fireEvent } from "@testing-library/react";
import { ReduxCounter } from "../ReduxCounter";
import { reducer } from "../reduxReducer";

function render(
  ui,
  { initialState, store = createStore(reducer, initialState), ...rtlOptions } = {}
) { function Wrapper ({children}){
  return <Provider store={store}>{children}</Provider>;
}
return {
    ...rtlRender(ui, {wrapper: Wrapper, ...rtlOptions}), store
}
}

test("can render with redux with default", () => {
  const { getByLabelText, getByText } = render(<ReduxCounter />);
  fireEvent.click(getByText("+"));
  expect(getByLabelText(/count/i)).toHaveTextContent("1");
});

test("can render with redux custom inital state", () => {
  const { getByLabelText, getByText } = render(<ReduxCounter />, {
    initialState: { count: 3 },
  });
  fireEvent.click(getByText("-"));
  expect(getByLabelText(/count/i)).toHaveTextContent("2");
});
