import React from 'react';
import { render } from '@testing-library/react';
import ItemCard from './ItemCard';

test('should render the title of the item', () => {
  const { getByText } = render(<ItemCard />);
  const itemTitle = getByText();
  expect(itemTitle).toBeInTheDocument();
});
