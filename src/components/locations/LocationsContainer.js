import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations, selectLocationResults } from "./locationsSlice";
import { LocationCard } from "./LocationCard";
import "./Locations.scss";

export const LocationContainer = () => {
  const dispatch = useDispatch();
  const results = useSelector(selectLocationResults);

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  // I extract logic out of main component retuirn when I can
  const renderCard = () => {
    return results.map((r) => {
      return (
        <LocationCard
          key={r.id}
          residents={r.residents}
          name={r.name}
          dimension={r.dimension}
          type={r.type}
        />
      );
    });
  };

  return <div className="LocationCard_Wrapper">{renderCard()}</div>;
};
