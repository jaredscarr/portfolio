import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ContactForm from './ContactForm'

describe('Contact Form', () => {
  test('Contact Form Renders correctly', () => {
    const tree = renderer.create(<ContactForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
