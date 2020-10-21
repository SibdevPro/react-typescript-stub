import agent from 'agent';
import { IDataResponse } from './types';

const sendSimpleData = (data: IDataResponse) => agent.POST('/posts', data);

export default sendSimpleData;
