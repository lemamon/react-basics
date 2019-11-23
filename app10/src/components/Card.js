import React, { useState } from "react";
import Stack from "./Stack";
import { getAlbumByUserId } from "./Api";

const Card = ({ data: { username, name, website, id, title }, isUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [albums, setAlbums] = useState([]);

  const getAlbum = async () => {
    const albums = await getAlbumByUserId({ id });
    setAlbums(albums);
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

      {isOpen ? <Stack data={albums} /> : ""}
    </div>
  );
};

export default Card;
