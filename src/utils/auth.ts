const TOKEN_KEY = 'access';

export const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const hasToken = () => !!getToken();

export const removeToken = () => localStorage.removeItem(TOKEN_KEY);
