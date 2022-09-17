import axios from 'axios';
import { AppDispatch } from '../..';
import { IUser } from '../../../models/IUser';
import {
  SetUserAction,
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
} from './types';

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setError: (error: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload: error }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const response = await axios.get<IUser[]>('./users.json');
      const mockUser = response.data.find(
        (user) => user.username === username && user.password === password,
      );

      if (mockUser) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('username', mockUser.username);
        dispatch(AuthActionCreators.setIsAuth(true));
        dispatch(AuthActionCreators.setUser(mockUser));
      } else {
        dispatch(AuthActionCreators.setError('Некорректный логин или пароль'));
      }
      dispatch(AuthActionCreators.setIsLoading(false));
    } catch (e) {
      dispatch(AuthActionCreators.setError(`Произошла ошибка: ${e}`));
    }
  },

  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
    dispatch(AuthActionCreators.setIsLoading(false));
  },
};
