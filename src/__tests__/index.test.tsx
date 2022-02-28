import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('Display Home on the homepage', () => {
    render(<Home />);
    expect(screen.queryByText(/home/i)).toBeInTheDocument();
  });
});
