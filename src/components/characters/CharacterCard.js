import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { NoteModal } from "../notes/NoteModal";

export const CharacterCard = ({
  name,
  gender,
  species,
  location,
  status,
  origin,
  image,
}) => {
  const deadoralive = status === "Dead" ? "red" : "#97ce4c"
  const dispatch = useDispatch();

  const [isOpen, toggleIsOpen] = useState(false)

  const onNoteClick = () => {
     toggleIsOpen(true)
  };
  const handleClose = () =>{
    toggleIsOpen(false)
  }

  return (
    <div className="characterCard">
      <NoteModal modalIsOpen={isOpen} handleClose={handleClose}/>
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
        <button className="note_button" onClick={()=>onNoteClick()}>notes</button>
      </div>
    </div>
  );
};
