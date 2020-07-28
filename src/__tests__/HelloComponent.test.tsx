import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import HelloComponent, { Props } from  "../HelloComponent";

describe("HelloComponent", () => {
  test("should return right value", async () => {
    const { findByTestId } = render(<HelloComponent {...{testProp: "abcd"}} />);

    const helloComp = await findByTestId("test-div");

    expect(helloComp).toHaveTextContent("abcd");
  });
});