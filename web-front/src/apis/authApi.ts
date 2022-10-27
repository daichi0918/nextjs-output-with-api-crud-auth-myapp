import { AxiosResponse } from 'axios';
import globalAxios, { isAxiosError, ResponseType, IErrorResponse } from '@/apis/config';
import { AuthResponseType } from '@/interfaces/User';

/**
 * ログインAPI
 * @param email
 * @param password
 * @returns
 */
export const singInApi = async (email: string, password: string) => {
  try {
    const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post('auth/sign_in', {
      email,
      password,
    });
    const res: ResponseType<AuthResponseType> = {
      code: 200,
      data,
    };
    return res;
  } catch (err) {
    if (isAxiosError(err)) {
      const axiosError = err as IErrorResponse;
      const res: ResponseType = {
        code: axiosError.response.status,
        message: axiosError.response.data.message,
      };
      return res;
    }
  }
};

/**
 * 認証チェックAPI
 * @returns
 */
export const authenticationApi = async () => {
  try {
    const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post('/auth/authentication/');
    const res: ResponseType<AuthResponseType> = {
      code: 200,
      data,
    };
    return res;
  } catch (err) {
    if (isAxiosError(err)) {
      const axiosError = err as IErrorResponse;
      const res: ResponseType = {
        code: axiosError.response.status,
        message: axiosError.response.data.message,
      };
      return res;
    }
  }
};
