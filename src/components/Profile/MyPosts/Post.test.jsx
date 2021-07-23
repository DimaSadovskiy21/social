import React from "react";
import { create } from "react-test-renderer";
import Post from "./Post/Post";

describe("Post component", () => {
    test("should show span!)", () => {
        const component = create(<Post />);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span).not.toBeNull();
      });
      test("should show img!)", () => {
        const component = create(<Post />);
        const instance = component.root;
        const img = instance.findByType("img");
        expect(img).not.toBeNull();
      });
  });