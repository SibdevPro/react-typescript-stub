import { AxiosResponse } from 'axios';

import { ENDPOINTS } from 'src/shared/constants';

import { agent } from '../agent';

import { Character } from './types';

export function fetchCharactersByHouse(house: string): Promise<AxiosResponse<Character[]>> {
  return agent.get(`${ENDPOINTS.charactersByHouse}/${house}`);
}
