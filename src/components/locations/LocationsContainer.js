import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLocations } from "./LocationsSlice";
import "./Locations.scss";

export const LocationContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);
  return <div className="LocationCard_Wrapper">Hello!</div>;
};
