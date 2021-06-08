import React from "react";
import { useDispatch } from "react-redux";

export const CharacterCard = ({
  name,
  gender,
  species,
  location,
  status,
  origin,
  image,
}) => {
  console.log(name, gender, species, location, status, origin, image);
  const deadoralive = status === "Dead" ? "red" : "#97ce4c"

  const dispatch = useDispatch();

  const onNoteClick = () => {};

  return (
    <div className="characterCard">
      <div className="characterCard_headers_wrapper">
        <h1 className="characterCard_headers">{name}</h1>
        <h2 className="characterCard_headers">Gender: {gender}</h2>
        <h2 className="characterCard_headers">Species: {species}</h2>
        <h2 className="characterCard_headers">Location: {location.name}</h2>
        <h2 className="characterCard_headers">Origin: {origin.name}</h2>
      </div>
      <div
        className="characterCard portrait"
        style={{backgroundImage: `url(${image})`}}
      >
        <span style={{color:`${deadoralive}`}}>status: {status}</span>
        <button className="note_button">notes</button>
      </div>
    </div>
  );
};
