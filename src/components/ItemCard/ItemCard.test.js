import React from 'react';
import { render } from '@testing-library/react';
import ItemCard from './ItemCard';

beforeEach(() => {
  
});

test('should render the title of the item', () => {

  const testItem = {
    id: 1,
    name: "Pink Lady Apples",
    description: "Crispy and delicious, with a sweet flavour.",
    price: 35,
  };

  const { getByText } = render(<ItemCard item={testItem}/>);
  const itemTitle = getByText(testItem.description);
  expect(itemTitle).toBeInTheDocument();
});
