import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import EpisodeItem from '../../src/components/EpisodeItem';

describe('EpisodeItem', () => {
  const mockProps = {
    id: 1,
    name: 'Pilot',
    episode: 'S01E01',
    onPress: jest.fn(),
  };

  it('episode-item renders correctly', () => {
    const {getByText, getByTestId} = render(<EpisodeItem {...mockProps} />);

    expect(getByTestId('episode-item')).toBeTruthy();
    expect(getByText('Pilot')).toBeTruthy();
    expect(getByText('S01E01')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const {getByTestId} = render(<EpisodeItem {...mockProps} />);

    const episodeItem = getByTestId('episode-item');
    fireEvent.press(episodeItem);

    expect(mockProps.onPress).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const {toJSON} = render(<EpisodeItem {...mockProps} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
