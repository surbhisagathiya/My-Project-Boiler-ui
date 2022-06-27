import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginSaga } from './saga';
import { LoginState } from './types';

const initialData = {
  email: '',
  password: '',
};
export const initialState: LoginState = {
  isSuccess: false,
  isError: false,
  userData: { ...initialData },
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    getLoggeduserInfo(state, action: PayloadAction<any>) {
      const { data, responseCode, success } = action.payload;
      if (responseCode === 200 && success === true) {
        const logged_user_info = {
          ...data,
        };
        localStorage.setItem('Logged_User_info', logged_user_info);
        alert(logged_user_info);
        return {
          ...state,
          isSuccess: true,
          message: 'you have logged in',
          userData: data,
        };
      } else {
        alert('error');
        return {
          ...state,
          isError: true,
          message: 'login error',
          userData: { ...initialData },
        };
      }
    },
  },
});

export const { getLoggeduserInfo } = slice.actions;

export const useLoginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: loginSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useLoginSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
