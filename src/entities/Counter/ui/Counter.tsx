/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    const num = Number(prompt('число для сложения'));
    dispatch(counterActions.increment(num));
  };
  const decrement = () => {
    const num = Number(prompt('число для вычитания'));
    dispatch(counterActions.decrement(num));
  };

  return (
    <div data-testid="counter">
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="decrement-btn" onClick={decrement}>
        decrement
      </Button>
      <Button data-testid="increment-btn" onClick={increment}>
        increment
      </Button>
    </div>
  );
};
