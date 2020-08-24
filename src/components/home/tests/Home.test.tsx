import React from "react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import renderer from "react-test-renderer";

import { render, waitForElement } from "@testing-library/react";
//components
import Home from "../index";
import Missions from "../missions";
import LandingSec from "../landingSec";

//query
import { comapnyInfo } from "../query";
import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import { MemoryRouter } from "react-router-dom";

let container: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
//before each

//this is basically query which request the data

const mocks = [
  {
    request: {
      query: comapnyInfo,
      variables: {},
    },

    result: () => {
      return {
        data: {
          info: { summary: "summary" },
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

it("should render summary", async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  const waitForData = () => new Promise((resolve) => setTimeout(resolve, 0)); // wait for response
  await waitForData();
  const p = component.root.findByType("p");
  expect(p.children).toContain("summary");
});
