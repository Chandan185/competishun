import axios from 'axios';
import { LoginActions } from '../Reducers/UserReducer';


export const LoginUser = (email, password) => {
    return async (dispatch) => {
      dispatch(LoginActions.loginrequest());
      const login = async () => {
        const { data } = await axios.post(
          `http://localhost:4000/api/users/login`,
          { email, password },
          { withCredentials: true }
        );
        return data;
      };
      try {
        const response = await login();
        dispatch(LoginActions.loginsuccess(response.user));
      } catch (error) {
        dispatch(LoginActions.loginfail(error.message));
      }
    };
  };
  
  export const RegisterUser = (name, email, password) => {
    return async (dispatch) => {
      dispatch(LoginActions.registerrequest());
      const register = async () => {
        const config = {
          Headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        };
        const { data } = await axios.post(
          `http://localhost:4000/api/users/register`,
          {
            name,
            email,
            password,
          },
          config
        );
        return data;
      };
      try {
        const response = await register();
        dispatch(LoginActions.registersuccess(response.user));
      } catch (error) {
        dispatch(LoginActions.registerfail(error.message));
      }
    };
  };
  
  export const LoadUser = () => {
    return async (dispatch) => {
      dispatch(LoginActions.loaduserrequest());
      const loaduser = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/profile`, {
          withCredentials: true,
        });
        return data;
      };
      try {
        const response = await loaduser();
        dispatch(LoginActions.loadusersuccess(response.user));
      } catch (error) {
        dispatch(LoginActions.loaduserfail(error.message));
      }
    };
  };
  
  export const Logout = () => {
    return async (dispatch) => {
      dispatch(LoginActions.logoutrequest());
      const logout = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/logout`, {
          withCredentials: true,
        });
        return data;
      };
      try {
        await logout();
        dispatch(LoginActions.logoutsuccess());
      } catch (error) {
        dispatch(LoginActions.logoutfail(error.message));
      }
    };
  };
  export const LoginclearErrors = () => {
    return (dispatch) => {
      dispatch(LoginActions.clearerrors());
    };
  };
  