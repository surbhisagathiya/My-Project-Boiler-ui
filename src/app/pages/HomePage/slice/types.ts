/* --- STATE --- */
export interface LoginState {
  isSuccess: boolean;
  isError: boolean;
  userData: {
    email: string;
    password: string;
  };
}
