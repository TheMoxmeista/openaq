import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import useCities from 'hooks/useCities';

jest.mock('hooks/useCities');

describe('<App /> Tests', () => {
  it('Should show loading state if it not falsy', () => {
    (useCities as jest.Mock).mockReturnValue([true, '', 'results']);
    const { container } = render(<App />);

    let header = container.querySelector('header');
    expect(header).not.toBeNull();
  });

  it('Should show error if it is not falsy', () => {
    (useCities as jest.Mock).mockReturnValue([false, 'An error occurred', 'results']);
    render(<App />);

    expect(screen.getByText('An error occurred')).not.toBeNull();
  });
});
