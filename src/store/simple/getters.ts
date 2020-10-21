import { IState } from '../interfaces';

import { ISimpleState } from './types';

const getState = (state: IState): ISimpleState => state.simpleReducer;

export const getSimpleFirstState = (state: IState) => {
  const simpleState = getState(state);
  return simpleState.exampleFirst;
};

export const getSimpleSecondState = (state: IState) => {
  const simpleState = getState(state);
  return simpleState.exampleSecond;
};
