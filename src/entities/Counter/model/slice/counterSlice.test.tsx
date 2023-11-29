import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

// не работает, потому что значение из промпт принимается как строка

describe('counterSlice.test', () => {
  test('Вычитание', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement(1))).toEqual({
      value: 9,
    });
  });

  test('Сложение', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment(1))).toEqual({
      value: 11,
    });
  });

  test('Пустой стейт', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: NaN,
    });
  });
});
