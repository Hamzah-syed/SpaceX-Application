import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HistoryContent from "../historyContent";
import { shallow, ShallowWrapper } from "enzyme";

describe("Launch History Item", () => {
  let root: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    root = shallow(
      <HistoryContent
        title="mission title"
        details="details"
        articleLink="Article"
        date="2020-08-27T19:19:00-04:00"
      />
    );
  });

  test("should render title", () => {
    expect(root.contains("mission title")).toBeTruthy();
  });
  test("should render details", () => {
    expect(root.contains("details")).toBeTruthy();
  });
  test("should render Link", () => {
    expect(root.contains("Article")).toBeTruthy();
  });

  test("should not render date", () => {
    expect(root.contains("Augest 8th, 2020")).not.toBeTruthy();
  });
});
