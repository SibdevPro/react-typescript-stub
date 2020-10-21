import { ISimpleState, SimpleAction } from './types';

const InitialState: ISimpleState = {
  exampleFirst: null,
  exampleSecond: null,
};

export default function exampleReducer(state = InitialState, action: SimpleAction) {
  switch (action.type) {
    case 'setSimpleData':
      return {
        ...state,
        exampleFirst: action.payload.exampleFirst,
        exampleSecond: action.payload.exampleSecond,
      };

    default:
      return state;
  }
}
