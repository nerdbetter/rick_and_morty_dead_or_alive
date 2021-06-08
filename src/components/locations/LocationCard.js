import React from "react";
import { useDispatch } from "react-redux";

import "./Locations.scss";

export const LocationCard = ({ name, dimension, type, residents }) => {
  const dispatch = useDispatch();
  console.log(name, dimension, type, residents)

  return (
    <div className='locationCard hover'>
      <h1 className='locationCard_headers'>{name}</h1>
      <h2 className='locationCard_headers'>Dimension: {dimension}</h2>
      <h2 className='locationCard_headers'>Type: {type}</h2>
    </div>
  );
};