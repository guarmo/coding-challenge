import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Form from "../ components/Form";
import { Provider } from "react-redux";
import store from "../store";

afterEach(cleanup);

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(
    <Provider store={store}>
      <Form />
    </Provider>
  );

  expect(queryByTestId("search-button")).toBeTruthy();
  expect(
    queryByPlaceholderText("Insert comma separated box coordinates...")
  ).toBeTruthy();
});

describe("Input value", () => {
  it("updates on change", () => {
    const { queryByPlaceholderText } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const searchInput = queryByPlaceholderText(
      "Insert comma separated box coordinates..."
    );

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});
