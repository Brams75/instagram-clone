// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('true', () => {
    render(<Home />);
    expect(screen.findByText('Home')).toBeInTheDocument();
  });
});
