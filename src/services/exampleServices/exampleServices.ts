// TODO: Удалить перед началом разработки проекта

import { AxiosResponse } from 'axios';

import { agent } from 'src/agent';

import { ExampleResponse } from './exampleServices.types';

export const getExampleData = (): Promise<AxiosResponse<ExampleResponse>> => {
  return agent.get('/someUrl');
};
