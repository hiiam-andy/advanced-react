/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
// eslint-disable-next-line max-len
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
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
