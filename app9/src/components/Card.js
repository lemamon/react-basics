import React, { useState } from "react";
import Stack from "./Stack";
import { getAlbumByUserId } from "./Api";

const Card = ({ data: { username, name, website, id, title }, isUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [album, setAlbum] = useState([]);

  const getAlbum = () => {
    getAlbumByUserId({ id })
      .then(album => setAlbum(album))
      .catch(error => console.log(error));
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    getAlbum();
  };

  return (
    <div className={`${isOpen ? "open" : ""} card`} onClick={handleClick}>
      {isUser ? (
        <React.Fragment>
          <h1>{username}</h1>
          <p>{name}</p>
          <a href={website}>{website}</a>
        </React.Fragment>
      ) : (
        <h1>{title}</h1>
      )}

      {isOpen ? <Stack data={album} /> : ""}
    </div>
  );
};

export default Card;
