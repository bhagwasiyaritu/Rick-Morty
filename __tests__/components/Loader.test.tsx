import React from 'react';
import {render} from '@testing-library/react-native';
import Loader from '../../src/components/Loader';

describe('Loader', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<Loader />);
    const loader = getByTestId('loader');

    expect(loader).toBeTruthy();
  });

  it('matches snapshot', () => {
    const {toJSON} = render(<Loader />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('has correct size and color', () => {
    const {getByTestId} = render(<Loader />);
    const loader = getByTestId('loader');
    
    expect(loader.props.size).toBe('large');
    expect(loader.props.className).toBe('color-violet-900');
  });
});
