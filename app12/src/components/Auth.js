const getToken = () => localStorage.getItem("token");

const setToken = () => localStorage.setItem("token", "123");

const isAuth = () => getToken();

export { setToken };
export default isAuth;
