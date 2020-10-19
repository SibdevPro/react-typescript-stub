import agent from 'agent';
import { useState, useCallback } from 'react';

interface IErrorData {
  data: string[];
  status: number;
}
export interface IError {
  response: IErrorData;
}

type Response<R> = R | undefined;
type ResponseError = IError | undefined;

interface IProps {
  method: keyof typeof agent;
  url: string;
}

interface IFullResponse<R> {
  isLoading: boolean;
  response: Response<R>;
  error: ResponseError;
}

const useApi = <R = unknown, T = object>(
  props: IProps
): [IFullResponse<R>, (data?: T, params?: string) => void] => {
  const { method, url } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<Response<R>>();
  const [error, setError] = useState<ResponseError>();

  const fetchData = useCallback(
    async (data, params) => {
      try {
        setIsLoading(true);
        const result = await agent[method]<T, R>(params ? url + params : url, data);
        setResponse(result.data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    },
    // Warn: React Hook useCallback has missing dependencies: 'R' and 'T'
    // eslint-disable-next-line
    [method, url]
  );

  return [{ isLoading, response, error }, fetchData];
};

export default useApi;
