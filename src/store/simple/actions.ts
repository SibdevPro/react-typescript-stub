import { ISimpleData, SimpleAction } from './types';

export const setSimpleData = (data: ISimpleData): SimpleAction => ({
  type: 'setSimpleData',
  payload: data,
});
