import React from 'react';
import { render } from '@testing-library/react';
import ItemCard from './ItemCard';

beforeEach(() => {
  
});

test('should render the name of the item', () => {

  const testItem = {
    id: 1,
    name: "Pink Lady Apples",
    description: "Crispy and delicious, with a sweet flavour.",
    price: 35,
  };

  const { getByText } = render(<ItemCard item={testItem}/>);
  const itemTitle = getByText(testItem.name);
  expect(itemTitle).toBeInTheDocument();
});

test('should render the item description', () => {

  const testItem = {
    id: 1,
    name: "Pink Lady Apples",
    description: "Crispy and delicious, with a sweet flavour.",
    price: 35,
  };

  const { getByText } = render(<ItemCard item={testItem}/>);
  const itemDescription = getByText(testItem.description);
  expect(itemDescription).toBeInTheDocument();
});
