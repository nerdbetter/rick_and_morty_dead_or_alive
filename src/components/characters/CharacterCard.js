import React from "react";
import { useDispatch } from "react-redux";

export const CharacterCard = ({ name, gender, species, location, status, origin, image }) => {

    console.log(name, gender, species, location, status, origin, image)
 
  const dispatch = useDispatch();

  const onNoteClick = () => {
      
  }

  return (
    <div className='characterCard hover'>
      <h1 className='characterCard_headers'>{name}</h1>
      <h2 className='characterCard_headers'>Gender: {gender}</h2>
      <h2 className='characterCard_headers'>Species: {species}</h2>
      <h2 className='characterCard_headers'>Location: {location.name}</h2>
      <h2 className='characterCard_headers'>status: {status}</h2>
      <h2 className='characterCard_headers'>Origin: {origin.name}</h2>      
    </div>
  );
};