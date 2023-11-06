import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
  test('Вычитание', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test('Сложение', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test('Пустой стейт', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
