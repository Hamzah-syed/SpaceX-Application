import React from "react";
import App from "./App";

import { shallow, ShallowWrapper } from "enzyme";

describe("testing app rendering", () => {
  //container type
  let container: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => {
    container = shallow(<App />);
  });

  //test1
  it("should contain a div", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
