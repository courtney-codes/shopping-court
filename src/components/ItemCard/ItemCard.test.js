import React from 'react';
import { render } from '@testing-library/react';
import ItemCard from './ItemCard';

beforeEach(() => {
});

test('should render the title of the item', () => {
  const { getByText } = render(<ItemCard />);
  const itemTitle = getByText("Item title");
  expect(itemTitle).toBeInTheDocument();
});
