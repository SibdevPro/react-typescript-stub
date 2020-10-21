export interface ISimpleState {
  exampleFirst: number | string | null;
  exampleSecond: string | null;
}

export interface ISimpleData {
  exampleFirst: ISimpleState['exampleFirst'];
  exampleSecond: ISimpleState['exampleSecond'];
}

export type SimpleAction = { type: 'setSimpleData'; payload: ISimpleData };
