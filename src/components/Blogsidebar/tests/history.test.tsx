import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HistoryContent from "../historyContent";

describe("Launch History Item", () => {
  let root: RenderResult;

  beforeEach(() => {
    root = render(
      <Router>
        <HistoryContent
          title="mission title"
          details="details"
          articleLink="Article"
          date="2020-08-27T19:19:00-04:00"
        />
      </Router>
    );
  });

  test("should render title", () => {
    expect(root.getByText("mission title")).toBeTruthy();
    console.log(root);
  });
  test("should render details", () => {
    expect(root.getByText("details")).toBeTruthy();
  });
  test("should render Link", () => {
    expect(root.getByText("Article")).toBeTruthy();
  });

  test("should not render date", () => {
    expect(root.queryByText("Augest 8th, 2020")).not.toBeTruthy();
  });
});
