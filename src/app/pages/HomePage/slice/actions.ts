import * as types from './action_types';

export const getLoginData = (data: any) => {
  return { type: types.LOGIN, data: data };
};
