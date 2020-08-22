import React from "react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import renderer from "react-test-renderer";

import { act } from "@testing-library/react";
//components
import Home from "./index";
import LandingSec from "./landingSec";

//query
import { comapnyInfo } from "./query";
import { mount, ReactWrapper } from "enzyme";

let container: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
//before each

//this is basically query which request the data
const mocks = [
  {
    request: {
      query: comapnyInfo,
    },

    result: () => {
      return {
        data: {
          info: { summary: "some text" },
        },
      };
    },
  },
];

it("renders without error", () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );
});
it("should render loading state initially", () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks}>
      <Home />
    </MockedProvider>
  );

  const tree: any = component.toJSON();
  //check what we are getting in tree
  //   console.log(tree);
  expect(tree.children).toContain("Loading...");
});
it("should render loading state initially", () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks}>
      <Home />
    </MockedProvider>
  );

  const tree: any = component.toJSON();
  //check what we are getting in tree
  //   console.log(tree);
  expect(tree.children).toContain("Loading...");
});
