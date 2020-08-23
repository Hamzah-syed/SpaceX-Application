import React from "react";
import { mount, ReactWrapper } from "enzyme";
import LandingSec from "../landingSec";
import { notDeepEqual } from "assert";

describe("testing", () => {
  let container: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    container = mount(<LandingSec summary="data" />);
  });

  it("testing app div render", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("should render summary data and it sould not be empty", () => {
    console.log(container.debug());
    expect(container.find("#summary")).toBeTruthy();
    expect(container.find("#summary")).not.toBeNull();
  });
});
