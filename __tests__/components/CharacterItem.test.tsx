import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CharacterItem from '../../src/components/CharacterItem';

describe('CharacterItem', () => {
  const mockProps = {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://example.com/rick.png',
    gender: 'Male',
    onPress: jest.fn(),
    activeOpacity: 0.8,
  };

  it('character-item renders correctly', () => {
    const {getByText, getByTestId} = render(<CharacterItem {...mockProps} />);

    expect(getByTestId('character-item')).toBeTruthy();
    expect(getByText('Rick Sanchez')).toBeTruthy();
    expect(getByText('Male')).toBeTruthy();
  });

  it('character-image renders correctly with image source', () => {
    const {getByTestId} = render(<CharacterItem {...mockProps} />);

    const image = getByTestId('character-image');

    expect(image).toBeTruthy();
    expect(image.props.source.uri).toBe(mockProps.image);
  });

  it('calls onPress when pressed', () => {
    const {getByTestId} = render(<CharacterItem {...mockProps} />);

    const characterItem = getByTestId('character-item');
    fireEvent.press(characterItem);

    expect(mockProps.onPress).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const {toJSON} = render(<CharacterItem {...mockProps} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
