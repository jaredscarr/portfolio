import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from "react-router-dom"
import ProjectNavBar from './ProjectNavBar'

describe('Project Navigation Component', () => {
  test('Navigation Bar Renders correctly', () => {
    const tree = renderer.create(<Router><ProjectNavBar /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
