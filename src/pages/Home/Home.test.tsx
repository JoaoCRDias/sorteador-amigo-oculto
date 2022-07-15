import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('should render home', () => {
    render(<Home />);

    const linkElement = screen.getByText(/sorteador amigo oculto/i);
    expect(linkElement).toBeInTheDocument();
  });
});
