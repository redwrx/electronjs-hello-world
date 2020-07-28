import React from "react";

export interface Props {
  testProp: "abcd";
}

function HelloComponent(props: Props) {
  return (
    <div data-testid="test-div">{props.testProp}</div>
  );
}

export default HelloComponent;