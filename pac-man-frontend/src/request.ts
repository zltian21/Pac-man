import qs from 'querystring';

interface RequestParams<T> {
  method: 'GET' | 'POST' | 'DELETE';
  url: string;
  body?: T;
  header?: any;
}

interface TResponse<T> {
  errCode: number;
  data: T;
  errMsg?: string;
}

export const request = async <ResponseType = any, RequestType = any>(
  params: RequestParams<RequestType>,
): Promise<TResponse<ResponseType>> => {
  const response = await fetch(params.url, {
    method: params.method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:
      params.method === 'GET'
        ? null
        : qs.stringify({ ...(params.body || {}), uid: localStorage.getItem('uid') }),
  });

  const data = await response.json();

  if (response.status >= 400) {
    throw data;
  }

  return data;
};
