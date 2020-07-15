import * as R from "ramda";

const precisionTwo = R.invoker(1, 'toFixed');
export const formatAmount = (amount) => `£${R.compose(precisionTwo(2), R.divide(R.__, 100))(amount)}`;

