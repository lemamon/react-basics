import { USER, PW, TOKEN_TAG } from "./Constants";

const getToken = () => localStorage.getItem(TOKEN_TAG);

const setToken = () => localStorage.setItem(TOKEN_TAG, "123");

const isAuth = () => getToken();

const login = ({ user, pw, redirect }) => {
  if (user === USER && pw === PW) {
    setToken();
    redirect();
    return true;
  } else {
    return false;
  }
};

const logout = ({ redirect }) => {
  localStorage.removeItem(TOKEN_TAG);
  redirect();
  return true;
};

export { setToken, login, logout };
export default isAuth;
