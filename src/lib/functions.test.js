import { pricePerWeightInGrams } from './functions';

test('pricePerWeightInGrams returns price', () => {
  console.log(pricePerWeightInGrams(35)(80));
});
