import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CharacterCard } from "./CharacterCard";
import {selectCharactersResults} from "./charactersSlice"
import "./Characters.scss";

export const CharacterContainer = () => {
    const characters = useSelector(selectCharactersResults)
    console.log(characters)

    const renderCard = () => {
        return characters.map((c) => {
          return (
            <CharacterCard
              key={c.id}
              name={c.name}
              gender={c.gender}
              species={c.species}
              status={c.status}
              location={c.location}
              origin={c.origin}
              image={c.image}
            />
          );
        });
      };
    
      return <div className='CharacterCard_Wrapper'>{renderCard()}</div>;
};