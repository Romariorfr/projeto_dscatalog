import { render, screen, waitFor } from '@testing-library/react';
import Catalog from '..';
import { Router } from 'react-router-dom';
import history from 'util/history';

test('should render catalog with products', async () => {
  render(
    <Router history={history}>
      <Catalog />
    </Router>
  );

  expect(screen.getByText('Catálogo de produtos')).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('Smart TV')).toBeInTheDocument();
  });
});
