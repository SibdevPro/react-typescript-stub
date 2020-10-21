import agent from 'agent';

const getSimpleData = (query: string) => agent.GET(`/posts/${query}`);

export default getSimpleData;
