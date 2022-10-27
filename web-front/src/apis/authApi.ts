import { AxiosResponse } from 'axios';
import { globalAxios, isAxiosError, IErrorResponse } from '@/apis/config';
import { UserType, AuthResponseType } from '@/interfaces/User';

interface ResponseType {
  code: number;
  data?: AuthResponseType;
  message?: string;
}

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
    const res: ResponseType = {
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
