import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import renderer from "react-test-renderer";
import { missionNames } from "../query";
import Missions from "../missions";

describe("testing missions section", () => {
  const mocks = [
    {
      request: {
        query: missionNames,
        variables: {},
      },

      result: () => {
        return {
          data: {
            missions: [{ mission_id: "9D1B7E0", mission_name: "Thaicom" }],
          },
        };
      },
    },
  ];

  it("renders without error", () => {
    renderer.create(
      <MockedProvider mocks={mocks}>
        <Missions />
      </MockedProvider>
    );
  });
  it("should render loading state initially", () => {
    const component = renderer.create(
      <MockedProvider mocks={mocks}>
        <Missions />
      </MockedProvider>
    );

    const tree: any = component.toJSON();
    //check what we are getting in tree
    //   console.log(tree);
    expect(tree.children).toContain("Loading");
  });
});
