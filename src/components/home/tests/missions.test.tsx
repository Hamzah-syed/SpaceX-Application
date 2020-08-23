import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import renderer from "react-test-renderer";

import Missions from "../missions";

describe("testing missions section", () => {
  it("renders without error", () => {
    renderer.create(
      <MockedProvider>
        <Missions />
      </MockedProvider>
    );
  });
});
