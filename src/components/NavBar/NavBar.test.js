import React from 'react';
import NavBar from './NavBar';
import { render } from '@testing-library/react';
import faker from 'faker';

describe('NavBar component', () => {
  it('should render the NavBar and title without any errors', () => {
    const { getByTestId } = render(<NavBar />);
    const navbar = getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });
  
  it('should display the correct number of items currently in the basket', () => {

    const testItemsInBasketCount = faker.random.number(30);
    const { getByTestId } = render(<NavBar basketCount={testItemsInBasketCount}/>);
    const basketNavItem = getByTestId("basket-nav-item");

    expect(basketNavItem).toHaveTextContent(`${testItemsInBasketCount} items in basket`);

    
  });
});