import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchCharacters } from "../characters/charactersSlice";

import "./Locations.scss";

export const LocationCard = ({ name, dimension, type, residents }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const residentIds = residents && residents.map(r => r.split("/")[5])

  console.log(residents);

  const handleFetchCharacters = () => {
    console.log("GET CHARS");
    dispatch(fetchCharacters(residentIds))
    history.push("/characters");
  };

  return (
    <div className="locationCard hover" onClick={() => handleFetchCharacters()}>
      <h1 className="locationCard_headers">{name}</h1>
      <h2 className="locationCard_headers">Dimension: {dimension}</h2>
      <h2 className="locationCard_headers">Type: {type}</h2>
    </div>
  );
};
