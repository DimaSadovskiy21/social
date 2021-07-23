import React from "react";
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProfileStatus />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

describe("ProfileStatus component", () => {
  test("status should be added it-kamasutra!)", () => {
    const component = create(<ProfileStatus status="it-kamasutra" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-kamasutra");
  });

  test("should show span props!)", () => {
    const component = create(<ProfileStatus status="it-kamasutra" />);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span.props.children).toBe("it-kamasutra");
  });

  test("should show span!)", () => {
    const component = create(<ProfileStatus status="it-kamasutra" />);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span).not.toBeNull();
  });

  test("should show input!)", () => {
    const component = create(<ProfileStatus status="it-kamasutra" />);
    const instance = component.root;
    const span = instance.findByType("span");
    span.props.onDoubleClick();
    const input = instance.findByType("input")
    expect(input).not.toBeNull();
  });
});