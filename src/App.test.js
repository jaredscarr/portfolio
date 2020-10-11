import React from 'react'
import 'mutationobserver-shim'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import { unmountComponentAtNode } from 'react-dom'
import Home from './components/Home/Home'

global.MutationObserver = window.MutationObserver;
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Home Component', () => {
  test('Home Renders correctly', () => {
    const tree = renderer.create(<Router><Home /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})

