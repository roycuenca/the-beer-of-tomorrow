import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonApp from '../src/components/Button/Button';

describe('ButtonApp Component', () => {
  it('applies custom styles', () => {
    const customStyles = { backgroundColor: 'blue' };
    const onPressMock = jest.fn();

    const { getByText, getByTestId } = render(
      <ButtonApp
        text="Test Button"
        customStyles={customStyles}
        onPressButton={onPressMock}
      />
    );

    const buttonElement = getByText('Test Button');
    const buttonContainer = getByTestId('button-container');

    expect(buttonElement).toBeDefined();
    expect(buttonContainer.props.style).toMatchObject(customStyles);
  });
});
