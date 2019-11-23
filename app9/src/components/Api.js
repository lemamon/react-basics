const URL = "https://jsonplaceholder.typicode.com";

const getUsers = () => {
  return fetch(`${URL}/users`)
    .then(resp => resp.json())
    .then(users => users)
    .catch(error => error);
};

const getAlbumByUserId = ({ id }) => {
  return fetch(`${URL}/albums?userId=${id}`)
    .then(resp => resp.json())
    .then(data => data)
    .catch(error => error);
};

export { getUsers, getAlbumByUserId };
