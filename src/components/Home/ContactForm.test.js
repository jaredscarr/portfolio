import React from 'react'
import 'mutationobserver-shim'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import ContactForm from './ContactForm'

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


it("Renders", () => {
  act(() => {
    render(<ContactForm />, container);
  });
  expect(container.textContent).toBe("NameEmailMessageSubmit");
});
